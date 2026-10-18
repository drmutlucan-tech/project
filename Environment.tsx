import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import {
  Leaf,
  Trash2,
  Droplets,
  Wind,
  Building2,
} from 'lucide-react';

const itemKeys = [
  { key: 'env.item.1', icon: Leaf },
  { key: 'env.item.2', icon: Trash2 },
  { key: 'env.item.3', icon: Droplets },
  { key: 'env.item.4', icon: Wind },
  { key: 'env.item.5', icon: Building2 },
];

export function Environment() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="cevre-teknolojileri" className="relative py-40 lg:py-56 bg-liquid-deep overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-bioluminescent/8 blur-4xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-lavender-phosphor/6 blur-3xl pointer-events-none" />

      <div className="relative max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28 max-w-3xl`}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('env.eyebrow')}</p>
          <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
            {t('env.title1')}
            <br />
            <span className="aurora-text">{t('env.title2')}</span>
          </h2>
          <p className="text-silver-mist text-[16px] leading-[1.7] max-w-2xl">{t('env.desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itemKeys.map((item, i) => (
            <EnvCard
              key={i}
              icon={item.icon}
              title={t(`${item.key}.title`)}
              desc={t(`${item.key}.desc`)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EnvCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof Leaf;
  title: string;
  desc: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal ${visible ? 'visible' : ''} card-lift bg-liquid-kelp/40 hover:bg-liquid-kelp/70 border border-white/5 rounded-card p-8`}
    >
      <div className="w-12 h-12 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center mb-6">
        <Icon size={22} className="text-liquid-mist" />
      </div>
      <h3 className="text-[20px] font-medium text-platinum tracking-[-0.02em] mb-3 leading-[1.1]">{title}</h3>
      <p className="text-silver-mist text-[14px] leading-[1.6]">{desc}</p>
    </div>
  );
}
