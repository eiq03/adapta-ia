// R-004-01: every edit changes the Adaptation held by the screen and returns a new object.
// The server keeps nothing.
import type { Adaptation, AdaptationWarning, Step } from '@/shared/types/contract';

/** Where a keyword is in the sheet: the step and its position in that step. */
export interface KeywordRef {
  stepId: string;
  index: number;
}

/** What the sheet can ask the result screen to change. */
export interface SheetActions {
  pickPictogram: (ref: KeywordRef) => void;
  editText: (stepId: string, text: string) => void;
  editOption: (stepId: string, index: number, text: string) => void;
  removeFigure: (stepId: string) => void;
}

function updateStep(
  adaptation: Adaptation,
  stepId: string,
  change: (step: Step) => Step,
): Adaptation {
  return {
    ...adaptation,
    steps: adaptation.steps.map((step) => (step.id === stepId ? change(step) : step)),
  };
}

/** CA-004-21..23: a new pictogram, or null to remove it (the word stays in the text). */
export function setPictogram(
  adaptation: Adaptation,
  ref: KeywordRef,
  pictogramId: number | null,
): Adaptation {
  return updateStep(adaptation, ref.stepId, (step) => ({
    ...step,
    keywords: step.keywords.map((keyword, index) =>
      index === ref.index ? { ...keyword, pictogramId } : keyword,
    ),
  }));
}

/** Most pictograms a step can have, counting the ones the teacher adds (CA-004-28). */
export const MAX_STEP_PICTOGRAMS = 3;

/** CA-004-28: the teacher adds a pictogram to a step; the caption is the word searched. */
export function addPictogram(
  adaptation: Adaptation,
  stepId: string,
  word: string,
  pictogramId: number,
): Adaptation {
  return updateStep(adaptation, stepId, (step) =>
    step.keywords.length >= MAX_STEP_PICTOGRAMS
      ? step
      : { ...step, keywords: [...step.keywords, { word, searchTerm: word, pictogramId }] },
  );
}

/** CA-004-20: new text for a step. R-004-03: pictograms stay until the teacher removes them. */
export function setStepText(adaptation: Adaptation, stepId: string, text: string): Adaptation {
  return updateStep(adaptation, stepId, (step) => ({ ...step, text }));
}

/** CA-004-20: new text for one option of a question. */
export function setOptionText(
  adaptation: Adaptation,
  stepId: string,
  index: number,
  text: string,
): Adaptation {
  return updateStep(adaptation, stepId, (step) => ({
    ...step,
    options: step.options.map((option, current) => (current === index ? text : option)),
  }));
}

/** Same wording as the server's NEEDS_FIGURE warning (post_processing.figure_message). */
function figureWarning(step: Step): AdaptationWarning {
  const subject = step.sourceNumber ? `A questão ${step.sourceNumber}` : 'Uma etapa';
  return {
    code: 'NEEDS_FIGURE',
    message: `${subject} depende de uma figura do original. Cole ou desenhe a figura na folha impressa.`,
  };
}

/** CA-004-26: the question stays without the figure, and the NEEDS_FIGURE warning appears. */
export function removeFigure(adaptation: Adaptation, stepId: string): Adaptation {
  const step = adaptation.steps.find((current) => current.id === stepId);
  if (!step || step.figureBox === null) return adaptation;
  const warning = figureWarning(step);
  const updated = updateStep(adaptation, stepId, (current) => ({
    ...current,
    needsFigure: true,
    figureBox: null,
  }));
  const known = adaptation.warnings.some((current) => current.message === warning.message);
  return known ? updated : { ...updated, warnings: [...updated.warnings, warning] };
}
