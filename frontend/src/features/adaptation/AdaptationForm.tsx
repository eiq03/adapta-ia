import { useState } from 'react';

import { EMPTY_PROFILE } from '@/shared/profile/supportOptions';
import type { Adaptation, MaterialType, StudentProfile } from '@/shared/types/contract';
import type { OriginalMaterial } from '@/shared/types/original';
import FormSection from '@/shared/ui/FormSection';
import SupportOptionsFields from '@/shared/ui/SupportOptionsFields';

import MaterialInput from './MaterialInput';
import MaterialTypePicker from './MaterialTypePicker';
import ProfileSelect from './ProfileSelect';
import SubmitPanel from './SubmitPanel';
import { useAdaptationRequest } from './useAdaptationRequest';

function materialFields(material: OriginalMaterial) {
  if (material.kind === 'image') return { image: material.image };
  if (material.kind === 'slides') return { slides: material.slides };
  return { text: material.text };
}

interface AdaptationFormProps {
  onDone: (adaptation: Adaptation, original: OriginalMaterial, profile: StudentProfile) => void;
}

/** Specs 001 and 002: type of material, support options, photo, text or slides, progress
 * and errors. */
export default function AdaptationForm({ onDone }: AdaptationFormProps) {
  const [materialType, setMaterialType] = useState<MaterialType>('test');
  const [profile, setProfile] = useState<StudentProfile>(EMPTY_PROFILE);
  const [material, setMaterial] = useState<OriginalMaterial | null>(null);
  const { status, error, seconds, submit, showError } = useAdaptationRequest();
  const loading = status === 'loading';

  const send = async () => {
    if (!material) {
      showError('Envie a foto da prova ou cole o texto.');
      return;
    }
    const adaptation = await submit({
      materialType,
      profile,
      ...materialFields(material),
    });
    if (adaptation) onDone(adaptation, material, profile);
  };

  return (
    <form
      className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]"
      onSubmit={(event) => {
        event.preventDefault();
        void send();
      }}
    >
      {/* Disabled while waiting, so nothing changes under the AI. */}
      <fieldset disabled={loading} className="min-w-0 space-y-6 disabled:opacity-70">
        <FormSection step={1} title="Que material é?">
          <MaterialTypePicker value={materialType} onChange={setMaterialType} />
        </FormSection>
        <FormSection
          step={2}
          title="Para quem é?"
          hint="Escolha um perfil salvo ou marque o que ajuda o aluno. Nunca o nome."
        >
          <div className="space-y-6">
            <ProfileSelect onChoose={setProfile} />
            <SupportOptionsFields profile={profile} onChange={setProfile} />
          </div>
        </FormSection>
        <FormSection step={3} title="Envie o material">
          <MaterialInput value={material} onChange={setMaterial} onError={showError} />
        </FormSection>
      </fieldset>
      <SubmitPanel
        materialType={materialType}
        profile={profile}
        material={material}
        loading={loading}
        seconds={seconds}
        error={error}
      />
    </form>
  );
}
