import { useState } from 'react';

import type { OriginalMaterial } from '@/shared/types/original';
import Icon, { type IconName } from '@/shared/ui/Icon';
import { buttonClass, INPUT_CLASS } from '@/shared/ui/styles';

import Dropzone from './Dropzone';
import { MAX_UPLOAD_BYTES, reduceImage } from './reduceImage';

export const MAX_TEXT_LENGTH = 20_000;
type Mode = OriginalMaterial['kind'];

// The PowerPoint option is hidden until V2 (decision of 18/11): the sheet loses the slide
// figures. SlidePicker and the server route stay, so turning it back on is one line.
const MODES: { mode: Mode; label: string; icon: IconName }[] = [
  { mode: 'image', label: 'Foto da prova', icon: 'camera' },
  { mode: 'text', label: 'Colar texto', icon: 'text' },
];
const ACCEPTED = 'image/png,image/jpeg,image/webp,image/heic,image/heif,.heic,.heif';

interface MaterialInputProps {
  value: OriginalMaterial | null;
  onChange: (value: OriginalMaterial | null) => void;
  onError: (message: string) => void;
}

/** Photo of the blank test (reduced in the browser) or pasted text (RF-01, RF-19). */
export default function MaterialInput({ value, onChange, onError }: MaterialInputProps) {
  const [mode, setMode] = useState<Mode>(value?.kind ?? 'image');
  const [reducing, setReducing] = useState(false);

  const choose = async (file: File | undefined) => {
    if (!file) return;
    setReducing(true);
    const image = await reduceImage(file);
    setReducing(false);
    if (image.size > MAX_UPLOAD_BYTES) {
      onError('A foto passa de 20 MB. Tire a foto de novo ou cole o texto.');
      return;
    }
    if (value?.kind === 'image') URL.revokeObjectURL(value.url);
    onChange({ kind: 'image', image, url: URL.createObjectURL(image) });
  };

  const switchTo = (next: Mode) => {
    setMode(next);
    onChange(null);
  };

  return (
    <fieldset>
      <legend className="sr-only">Material</legend>
      <div className="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
        {MODES.map((option) => (
          <button
            key={option.mode}
            type="button"
            aria-pressed={mode === option.mode}
            onClick={() => switchTo(option.mode)}
            className="flex items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-slate-600 transition-colors hover:text-slate-900 aria-pressed:bg-white aria-pressed:font-semibold aria-pressed:text-brand-800 aria-pressed:shadow-sm"
          >
            <Icon name={option.icon} className="hidden size-5 sm:block" />
            {option.label}
          </button>
        ))}
      </div>
      {mode === 'image' &&
        (value?.kind === 'image' ? (
          <div className="animate-fade-in flex flex-wrap items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <img
              src={value.url}
              alt="Prova enviada"
              className="h-40 w-auto max-w-full rounded-lg border border-slate-200 bg-white object-contain"
            />
            <div className="space-y-2">
              <p className="flex items-center gap-2 font-semibold text-brand-800">
                <Icon name="check" className="size-5" />
                Foto pronta para adaptar
              </p>
              <label className={buttonClass('outline', 'sm', 'focus-within:ring-4')}>
                <Icon name="refresh" className="size-4" />
                Trocar a foto
                <input
                  type="file"
                  accept={ACCEPTED}
                  aria-label="Foto da prova em branco"
                  className="sr-only"
                  onChange={(event) => {
                    void choose(event.target.files?.[0]);
                    event.target.value = '';
                  }}
                />
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <Dropzone
              icon="camera"
              title="Escolher foto da prova"
              hint="PNG, JPG, WEBP ou HEIC (foto do celular)."
              accept={ACCEPTED}
              inputLabel="Foto da prova em branco"
              busy={reducing ? 'Preparando a foto...' : null}
              onFile={(file) => void choose(file)}
            />
            <p className="flex items-center gap-1.5 text-sm text-slate-600">
              <Icon name="lock" className="size-4 text-amber-600" />
              Fotografe a prova em branco, sem nome de aluno.
            </p>
          </div>
        ))}
      {mode === 'text' && (
        <label className="block">
          <textarea
            className={`${INPUT_CLASS} min-h-48`}
            rows={8}
            maxLength={MAX_TEXT_LENGTH}
            aria-label="Texto da prova"
            placeholder="Cole aqui o texto da prova ou da atividade."
            value={value?.kind === 'text' ? value.text : ''}
            onChange={(event) =>
              onChange(event.target.value ? { kind: 'text', text: event.target.value } : null)
            }
          />
          <span className="mt-1.5 block text-right text-sm tabular-nums text-slate-600">
            {value?.kind === 'text' ? value.text.length.toLocaleString('pt-BR') : 0}/
            {MAX_TEXT_LENGTH.toLocaleString('pt-BR')}
          </span>
        </label>
      )}
    </fieldset>
  );
}
