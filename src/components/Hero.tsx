import { lazy, Suspense } from 'react';
import { useI18n } from '@/i18n';

const EarthGlobe = lazy(() => import('@/components/EarthGlobe').then((m) => ({ default: m.EarthGlobe })));

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <Suspense fallback={null}>
        <EarthGlobe />
      </Suspense>
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-liquid-abyss/40 via-transparent to-liquid-abyss pointer-events-none" />

      {/* Text block pinned to the very bottom so it never covers the globe/moon */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-liquid-abyss via-liquid-abyss/85 to-transparent pt-16 pb-8 px-6 lg:px-10">
        <div className="max-w-page mx-auto">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-silver-mist mb-4 animate-fade-in">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-[clamp(1.6rem,5vw,3rem)] font-medium text-platinum leading-[1.05] tracking-[-0.04em] mb-5 animate-fade-up">
              {t('hero.title1')}
              <br />
              <span className="aurora-text">{t('hero.title2')}</span>
            </h1>
            <p className="text-sm text-silver-mist max-w-lg mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              {t('hero.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
