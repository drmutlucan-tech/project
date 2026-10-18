import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { Train, Radar, Info, CheckCircle2 } from 'lucide-react';

const railKeys = ['ref.rail.1', 'ref.rail.2', 'ref.rail.3', 'ref.rail.4', 'ref.rail.5', 'ref.rail.6'];
const aviationKeys = ['ref.aviation.1', 'ref.aviation.2', 'ref.aviation.3'];
const intlKeys = ['ref.intl.1', 'ref.intl.2', 'ref.intl.3', 'ref.intl.4', 'ref.intl.5'];

export function References() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="projeler" className="relative py-40 lg:py-56">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28 max-w-2xl`}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('ref.eyebrow')}</p>
          <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
            {t('ref.title1')}
            <br />
            <span className="text-silver-mist">{t('ref.title2')}</span>
          </h2>
          <p className="text-silver-mist text-[15px] leading-[1.7]">{t('ref.desc')}</p>
        </div>

        <RailProjects items={railKeys.map((k) => t(k))} />
        <AviationProjects items={aviationKeys.map((k) => t(k))} />
        <IntlPartners items={intlKeys.map((k) => t(k))} />

        <div className="mt-16 bg-liquid-deep/60 border border-white/5 rounded-card p-8 flex items-start gap-4">
          <Info size={20} className="text-slate-deep flex-shrink-0 mt-1" />
          <p className="text-slate-deep text-[13px] leading-[1.6] max-w-4xl">{t('ref.note')}</p>
        </div>
      </div>
    </section>
  );
}

function RailProjects({ items }: { items: string[] }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-20`}>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-11 h-11 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
          <Train size={20} className="text-liquid-mist" />
        </div>
        <h3 className="text-[22px] font-medium text-platinum tracking-[-0.02em]">{t('ref.rail_title')}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((p, i) => (
          <ProjectItem key={i} text={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function AviationProjects({ items }: { items: string[] }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-20`}>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-11 h-11 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
          <Radar size={20} className="text-liquid-mist" />
        </div>
        <h3 className="text-[22px] font-medium text-platinum tracking-[-0.02em]">{t('ref.aviation_title')}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((p, i) => (
          <ProjectItem key={i} text={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function IntlPartners({ items }: { items: string[] }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-12`}>
      <div className="flex items-center gap-4 mb-10">
        <div className="w-11 h-11 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
          <CheckCircle2 size={20} className="text-liquid-mist" />
        </div>
        <h3 className="text-[22px] font-medium text-platinum tracking-[-0.02em]">{t('ref.intl_title')}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((p, i) => (
          <ProjectItem key={i} text={p} index={i} />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ text, index }: { text: string; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`reveal ${visible ? 'visible' : ''} flex items-start gap-4 bg-liquid-kelp/30 border border-white/5 rounded-card p-6 card-lift hover:bg-liquid-kelp/60`}
    >
      <div className="w-2 h-2 rounded-full bg-bioluminescent flex-shrink-0 mt-2" />
      <p className="text-silver-mist text-[14px] leading-[1.6]">{text}</p>
    </div>
  );
}
