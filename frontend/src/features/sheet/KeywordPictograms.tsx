import { pictogramUrl } from '@/shared/pictograms';
import type { Keyword } from '@/shared/types/contract';

import { type KeywordRef, MAX_STEP_PICTOGRAMS } from './editAdaptation';

interface KeywordPictogramsProps {
  stepId: string;
  keywords: Keyword[];
  color: boolean;
  onPick: (ref: KeywordRef) => void;
}

const BUTTON_CLASS =
  'w-20 rounded-xl p-0.5 text-center transition-colors hover:bg-brand-50 hover:ring-2 hover:ring-brand-200';

const EMPTY_SLOT_CLASS = `${BUTTON_CLASS} flex size-20 flex-col items-center justify-center border-2 border-dashed border-slate-300 text-slate-500 hover:border-brand-400 hover:text-brand-800 print:hidden`;

/** Pictograms with their word as caption (RF-06). Each one is a button that opens the swap
 * window (CA-004-21). A word left without a picture (R-001-10: wrong or ambiguous, or removed by
 * the teacher) shows on screen only, as "+ word", so the teacher can choose one (CA-004-27).
 * While the step has fewer than 3, "+ imagem" lets the teacher add one (CA-004-28). Neither
 * dashed button is printed. */
export default function KeywordPictograms({
  stepId,
  keywords,
  color,
  onPick,
}: KeywordPictogramsProps) {
  const canAdd = keywords.length < MAX_STEP_PICTOGRAMS;
  const noImage = keywords.every((keyword) => keyword.pictogramId === null);
  return (
    <div className={`flex shrink-0 gap-3 ${noImage ? 'print:hidden' : ''}`}>
      {keywords.map((keyword, index) =>
        keyword.pictogramId === null ? (
          <button
            key={`${keyword.word}-${index}`}
            type="button"
            onClick={() => onPick({ stepId, index })}
            title="Escolher um pictograma"
            className={EMPTY_SLOT_CLASS}
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              +
            </span>
            <span className="block text-sm">{keyword.word}</span>
          </button>
        ) : (
          <button
            key={`${keyword.word}-${index}`}
            type="button"
            onClick={() => onPick({ stepId, index })}
            title="Trocar ou remover o pictograma"
            className={BUTTON_CLASS}
          >
            <img
              src={pictogramUrl(keyword.pictogramId, color)}
              alt={keyword.word}
              className="mx-auto size-20 object-contain"
              loading="eager"
            />
            <span className="block text-sm">{keyword.word}</span>
          </button>
        ),
      )}
      {canAdd && (
        <button
          type="button"
          onClick={() => onPick({ stepId, index: keywords.length })}
          title="Adicionar uma imagem do ARASAAC"
          className={EMPTY_SLOT_CLASS}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            +
          </span>
          <span className="block text-sm">imagem</span>
        </button>
      )}
    </div>
  );
}
