import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { Droplets, ArrowUpRight } from 'lucide-react';
import { SmartCityViz } from '@/components/SmartCityViz';

export function SmartCity() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="akilli-sehir" className="relative py-40 lg:py-56 bg-liquid-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-bioluminescent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-lavender-phosphor/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28 max-w-3xl`}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('sc.eyebrow')}</p>
          <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
            {t('sc.title1')}
            <br />
            <span className="aurora-text">{t('sc.title2')}</span>
          </h2>
          <p className="text-silver-mist text-[16px] leading-[1.7] max-w-2xl">{t('sc.desc')}</p>
        </div>

        <SmartCityViz />

        {/* Water Technologies callout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-liquid-kelp/40 border border-white/5 rounded-card p-10 card-lift hover:bg-liquid-kelp/70">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center flex-shrink-0">
                <Droplets size={22} className="text-liquid-mist" />
              </div>
              <div>
                <h3 className="text-[20px] font-medium text-platinum tracking-[-0.02em] mb-3">{t('sc.water_title')}</h3>
                <p className="text-silver-mist text-[14px] leading-[1.6]">{t('sc.water_desc')}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-liquid-kelp/40 border border-white/5 rounded-card p-10 card-lift hover:bg-liquid-kelp/70">
            <h3 className="text-[24px] md:text-[28px] font-medium text-platinum tracking-[-0.03em] mb-2">
              {t('sc.cta_title')}
            </h3>
            <p className="text-silver-mist text-[15px] leading-[1.6] mb-6">{t('sc.cta_desc')}</p>
            <a
              href="#iletisim"
              className="aurora-bg text-liquid-abyss text-[13px] uppercase tracking-[0.1em] font-medium px-7 py-4 rounded-small hover:opacity-90 transition-opacity inline-flex items-center gap-2 whitespace-nowrap self-start"
            >
              {t('sc.cta_btn')}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
