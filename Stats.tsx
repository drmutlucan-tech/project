import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';

export function Stats() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const stats = [
    { value: '28', label: t('stats.yil') },
    { value: '5', label: t('stats.disiplin') },
    { value: '20+', label: t('stats.referans') },
    { value: '4', label: t('stats.ulke') },
  ];

  return (
    <section className="relative py-40 lg:py-56 bg-liquid-deep">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-page mx-auto px-6 lg:px-10`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-10 text-center md:text-left md:px-10">
              <div className="text-[clamp(3rem,7vw,5rem)] font-medium text-lavender-phosphor stat-glow leading-none tracking-[-0.04em] mb-4">
                {s.value}
              </div>
              <div className="text-[12px] uppercase tracking-[0.12em] text-liquid-mist">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
