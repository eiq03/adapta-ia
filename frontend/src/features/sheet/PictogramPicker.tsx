import { useEffect, useRef, useState } from 'react';

import { pictogramUrl } from '@/shared/pictograms';
import type { Keyword } from '@/shared/types/contract';
import Icon from '@/shared/ui/Icon';
import { buttonClass, INPUT_CLASS } from '@/shared/ui/styles';

import { usePictogramSearch } from './usePictogramSearch';

interface PictogramPickerProps {
  keyword: Keyword;
  color: boolean;
  /** The word searched goes along: it is the caption of an added pictogram (CA-004-28). */
  onChoose: (pictogramId: number, word: string) => void;
  /** Absent when adding a new pictogram: there is nothing to remove yet. */
  onRemove?: () => void;
  onClose: () => void;
}

/** Spec 004: swap (CA-004-21), search another word (CA-004-22), remove (CA-004-23) or add
 * (CA-004-28, the keyword comes with an empty word). */
export default function PictogramPicker({
  keyword,
  color,
  onChoose,
  onRemove,
  onClose,
}: PictogramPickerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { query, results, status, error, search } = usePictogramSearch(keyword.word);
  const [draft, setDraft] = useState(keyword.word);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        // Esc: the screen state closes the window, not the browser, so both stay in step.
        event.preventDefault();
        onClose();
      }}
      aria-labelledby="picker-title"
      className="m-auto w-[min(42rem,calc(100vw-2rem))] rounded-2xl p-0 shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm print:hidden"
    >
      <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
        <h2 id="picker-title" className="text-xl font-bold">
          {keyword.word ? `Pictograma de “${keyword.word}”` : 'Adicionar imagem'}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className={buttonClass('ghost', 'sm', 'size-9 p-0')}
        >
          <Icon name="x" />
        </button>
      </header>
      <div className="px-6 py-5">
        <form
          className="mb-5 flex gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            search(draft);
          }}
        >
          <label className="sr-only" htmlFor="picker-query">
            Buscar outra palavra
          </label>
          <div className="relative min-w-0 flex-1">
            <Icon
              name="search"
              className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-slate-400"
            />
            <input
              id="picker-query"
              value={draft}
              maxLength={50}
              onChange={(event) => setDraft(event.target.value)}
              className={`${INPUT_CLASS} pl-11`}
            />
          </div>
          <button type="submit" className={buttonClass('primary', 'md')}>
            Buscar
          </button>
        </form>
        <div className="min-h-40">
          {status === 'idle' && (
            <p className="text-slate-600">
              Digite uma palavra e clique em Buscar. Ela aparece embaixo da imagem na folha.
            </p>
          )}
          {status === 'loading' && (
            <p className="flex items-center gap-2 text-slate-600">
              <Icon name="refresh" className="size-4 animate-spin" />
              Buscando “{query}”…
            </p>
          )}
          {status === 'error' && (
            <p role="alert" className="text-red-800">
              {error}
            </p>
          )}
          {status === 'done' && results.length === 0 && (
            <p>Nenhum pictograma para “{query}”. Tente outra palavra.</p>
          )}
          {status === 'done' && results.length > 0 && (
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              {results.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onChoose(id, query)}
                    aria-pressed={id === keyword.pictogramId}
                    className="relative w-full rounded-xl border-2 border-slate-200 bg-white p-1.5 transition-colors hover:border-brand-400 hover:bg-brand-50 aria-pressed:border-brand-600 aria-pressed:bg-brand-50"
                  >
                    <img
                      src={pictogramUrl(id, color)}
                      alt={`Opção ${id} para ${query}`}
                      className="aspect-square w-full object-contain"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <footer className="flex flex-wrap justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
        {onRemove ? (
          <button type="button" onClick={onRemove} className={buttonClass('dangerSoft', 'md')}>
            <Icon name="trash" className="size-4" />
            Remover pictograma
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onClose}
          className={buttonClass('secondary', 'md', 'bg-white ring-1 ring-slate-200')}
        >
          Cancelar
        </button>
      </footer>
    </dialog>
  );
}
