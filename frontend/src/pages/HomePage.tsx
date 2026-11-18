import { Link } from 'react-router';

import Icon, { type IconName } from '@/shared/ui/Icon';
import { buttonClass, CARD_CLASS } from '@/shared/ui/styles';

import HeroPreview from './home/HeroPreview';

const STEPS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'camera',
    title: 'Envie o material',
    text: 'Foto da prova em branco ou texto colado.',
  },
  {
    icon: 'user',
    title: 'Diga o que ajuda o aluno',
    text: 'Marque as necessidades de apoio ou use um perfil salvo, sem o nome da criança.',
  },
  {
    icon: 'pencil',
    title: 'Revise e imprima',
    text: 'Corrija textos, troque pictogramas e imprima em A4 ou salve em PDF.',
  },
];

const PROMISES: { icon: IconName; text: string }[] = [
  { icon: 'check', text: 'Nenhuma questão ou alternativa some' },
  { icon: 'lock', text: 'O nome do aluno nunca é pedido' },
  { icon: 'heart', text: 'Gratuito, sem login e sem instalar' },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-6">
      <section className="grid items-center gap-12 pt-2 lg:grid-cols-[1.1fr_1fr] lg:pt-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-800 ring-1 ring-brand-200">
            <Icon name="sparkles" className="size-4" />
            Para professores de alunos com autismo (TEA)
          </p>
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl">
            Adapte a prova para o seu aluno <span className="text-brand-700">em minutos</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-relaxed text-slate-600">
            Envie a foto da prova em branco e receba uma folha adaptada, com linguagem simples, uma
            etapa por vez e pictogramas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/adaptar" className={buttonClass('primary', 'lg')}>
              Começar uma adaptação
              <Icon name="arrowRight" />
            </Link>
            <Link to="/historico" className={buttonClass('ghost', 'lg')}>
              <Icon name="clock" />
              Ver histórico
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-slate-600">
            {PROMISES.map((item) => (
              <li key={item.text} className="flex items-center gap-2">
                <Icon name={item.icon} className="size-[1.1rem] text-brand-600" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <HeroPreview />
      </section>

      <section aria-labelledby="how-title">
        <h2 id="how-title" className="mb-6 text-2xl font-bold tracking-tight">
          Como funciona
        </h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className={`${CARD_CLASS} p-6`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={step.icon} className="size-6" />
                </span>
                <span className="text-sm font-bold tracking-wider text-slate-400">
                  PASSO {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-1 text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl bg-brand-800 px-6 py-10 text-center text-white sm:px-12">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">O professor decide</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-brand-100">
          A IA propõe a adaptação, você revisa cada texto e cada pictograma antes de imprimir. A
          folha muda a forma, nunca o conteúdo cobrado.
        </p>
        <Link
          to="/adaptar"
          className={buttonClass(
            'secondary',
            'lg',
            'mt-6 bg-white text-brand-900 hover:bg-brand-50',
          )}
        >
          Adaptar agora
          <Icon name="arrowRight" />
        </Link>
      </section>
    </div>
  );
}
