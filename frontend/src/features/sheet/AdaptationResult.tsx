import { type ReactNode, useState } from 'react';

import type { Adaptation, StudentProfile } from '@/shared/types/contract';
import type { OriginalMaterial } from '@/shared/types/original';

import {
  addPictogram,
  type KeywordRef,
  removeFigure,
  type SheetActions,
  setOptionText,
  setPictogram,
  setStepText,
} from './editAdaptation';
import OriginalPanel from './OriginalPanel';
import PictogramPicker from './PictogramPicker';
import ResultToolbar from './ResultToolbar';
import RevisePanel from './RevisePanel';
import ReviewNotes from './ReviewNotes';
import Sheet from './Sheet';

interface AdaptationResultProps {
  adaptation: Adaptation;
  original: OriginalMaterial;
  /** The profile used, sent again with a new version (spec 005). */
  profile: StudentProfile;
  /** Profile option "se distrai fácil" (CA-006-06). */
  onePerPage: boolean;
  onChange: (adaptation: Adaptation) => void;
  onNew: () => void;
  /** Shown at the start of the toolbar, like the name in the history. */
  title?: ReactNode;
}

/** Spec 001, RF-09: original and adapted sheet side by side, with the notes outside it.
 * Spec 004: the teacher fixes the sheet here; every edit goes up through `onChange`. */
export default function AdaptationResult({
  adaptation,
  original,
  profile,
  onePerPage,
  onChange,
  onNew,
  title,
}: AdaptationResultProps) {
  const [picking, setPicking] = useState<KeywordRef | null>(null);
  const imageUrl = original.kind === 'image' ? original.url : null;
  const [color, setColor] = useState(true);
  const pickedStep = picking
    ? adaptation.steps.find((step) => step.id === picking.stepId)
    : undefined;
  // CA-004-28: an index past the last keyword means "add a new pictogram".
  const adding =
    picking !== null && pickedStep !== undefined && picking.index >= pickedStep.keywords.length;
  const pickedKeyword = adding
    ? { word: '', searchTerm: '', pictogramId: null }
    : picking && pickedStep?.keywords[picking.index];

  const actions: SheetActions = {
    pickPictogram: setPicking,
    editText: (stepId, text) => onChange(setStepText(adaptation, stepId, text)),
    editOption: (stepId, index, text) => onChange(setOptionText(adaptation, stepId, index, text)),
    removeFigure: (stepId) => onChange(removeFigure(adaptation, stepId)),
  };

  function choose(pictogramId: number | null, word = '') {
    if (picking && adding && pictogramId !== null) {
      onChange(addPictogram(adaptation, picking.stepId, word, pictogramId));
    } else if (picking) {
      onChange(setPictogram(adaptation, picking, pictogramId));
    }
    setPicking(null);
  }

  return (
    <div className="space-y-6">
      <ResultToolbar title={title} color={color} onColorChange={setColor} onNew={onNew} />
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] print:block">
        <div className="space-y-4 print:hidden lg:sticky lg:top-56 lg:max-h-[calc(100vh-15rem)] lg:overflow-y-auto lg:pr-1 lg:pb-2 [scrollbar-width:thin]">
          <ReviewNotes adaptation={adaptation} />
          <OriginalPanel original={original} transcription={adaptation.transcription} />
          <RevisePanel adaptation={adaptation} profile={profile} onRevised={onChange} />
        </div>
        <div className="min-w-0">
          <p className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 print:hidden">
            <span className="font-bold tracking-wider text-slate-500 uppercase">
              Folha do aluno
            </span>
            <span>Clique num texto para reescrever ou num pictograma para trocar.</span>
          </p>
          <Sheet
            adaptation={adaptation}
            imageUrl={imageUrl}
            color={color}
            onePerPage={onePerPage}
            actions={actions}
          />
        </div>
      </div>
      {pickedKeyword && (
        <PictogramPicker
          keyword={pickedKeyword}
          color={color}
          onChoose={choose}
          onRemove={adding ? undefined : () => choose(null)}
          onClose={() => setPicking(null)}
        />
      )}
    </div>
  );
}
