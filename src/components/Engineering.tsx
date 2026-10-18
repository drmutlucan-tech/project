import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { Train, Radar, CheckCircle2, ArrowUpRight } from 'lucide-react';

export function Engineering() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const features = [
    t('eng.feat.1'),
    t('eng.feat.2'),
    t('eng.feat.3'),
    t('eng.feat.4'),
    t('eng.feat.5'),
    t('eng.feat.6'),
  ];

  return (
    <section id="muhendislik" className="relative py-40 lg:py-56">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28 max-w-3xl`}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('eng.eyebrow')}</p>
          <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
            {t('eng.title1')}
            <br />
            <span className="text-silver-mist">{t('eng.title2')}</span>
          </h2>
          <p className="text-silver-mist text-[16px] leading-[1.7] max-w-2xl">{t('eng.desc')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Rail Systems */}
          <div className="bg-liquid-kelp/40 border border-white/5 rounded-card p-10 card-lift hover:bg-liquid-kelp/70">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
                <Train size={22} className="text-liquid-mist" />
              </div>
              <h3 className="text-[22px] font-medium text-platinum tracking-[-0.02em]">{t('eng.rail.title')}</h3>
            </div>
            <p className="text-silver-mist text-[15px] leading-[1.7]">{t('eng.rail.desc')}</p>
          </div>

          {/* Aviation & Radar */}
          <div className="bg-liquid-kelp/40 border border-white/5 rounded-card p-10 card-lift hover:bg-liquid-kelp/70">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
                <Radar size={22} className="text-liquid-mist" />
              </div>
              <h3 className="text-[22px] font-medium text-platinum tracking-[-0.02em]">{t('eng.aviation.title')}</h3>
            </div>
            <p className="text-silver-mist text-[15px] leading-[1.7]">{t('eng.aviation.desc')}</p>
          </div>
        </div>

        {/* DHMI Project Highlight */}
        <div className="mb-16 bg-gradient-to-r from-liquid-deep to-liquid-kelp/40 border border-bioluminescent/15 rounded-card p-10 lg:p-12">
          <p className="text-[12px] uppercase tracking-[0.18em] text-bioluminescent mb-4">{t('eng.dhmi.title')}</p>
          <p className="text-silver-mist text-[15px] leading-[1.7] max-w-3xl">{t('eng.dhmi.desc')}</p>
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            <div className="text-center">
              <div className="text-[clamp(2rem,4vw,3rem)] font-medium text-lavender-phosphor stat-glow leading-none mb-2">23</div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-liquid-mist">Radar</div>
            </div>
            <div className="text-center">
              <div className="text-[clamp(2rem,4vw,3rem)] font-medium text-lavender-phosphor stat-glow leading-none mb-2">18</div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-liquid-mist">SSR</div>
            </div>
            <div className="text-center">
              <div className="text-[clamp(2rem,4vw,3rem)] font-medium text-lavender-phosphor stat-glow leading-none mb-2">5</div>
              <div className="text-[10px] uppercase tracking-[0.1em] text-liquid-mist">PSR</div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div>
          <h3 className="text-[20px] font-medium text-platinum tracking-[-0.02em] mb-8">{t('eng.capabilities.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <FeatureItem key={i} text={f} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-liquid-kelp/40 border border-white/5 rounded-card p-10 lg:p-12">
          <div>
            <h3 className="text-[24px] md:text-[28px] font-medium text-platinum tracking-[-0.03em] mb-2">
              {t('sc.cta_title')}
            </h3>
            <p className="text-silver-mist text-[15px] leading-[1.6] max-w-xl">{t('sc.cta_desc')}</p>
          </div>
          <a
            href="#iletisim"
            className="aurora-bg text-liquid-abyss text-[13px] uppercase tracking-[0.1em] font-medium px-7 py-4 rounded-small hover:opacity-90 transition-opacity inline-flex items-center gap-2 whitespace-nowrap"
          >
            {t('sc.cta_btn')}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text, index }: { text: string; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`reveal ${visible ? 'visible' : ''} flex items-start gap-3 bg-liquid-kelp/30 border border-white/5 rounded-card p-5 card-lift hover:bg-liquid-kelp/60`}
    >
      <CheckCircle2 size={18} className="text-bioluminescent flex-shrink-0 mt-0.5" />
      <p className="text-silver-mist text-[14px] leading-[1.5]">{text}</p>
    </div>
  );
}
