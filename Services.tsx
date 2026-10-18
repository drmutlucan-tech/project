import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { ArrowUpRight } from 'lucide-react';

const serviceKeys = [
  { no: '01', key: 'srv.01' },
  { no: '02', key: 'srv.02' },
  { no: '03', key: 'srv.03' },
  { no: '04', key: 'srv.04' },
  { no: '05', key: 'srv.05' },
];

export function Services() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const services = serviceKeys.map((s) => ({
    no: s.no,
    title: t(`${s.key}.title`),
    desc: t(`${s.key}.desc`),
    tags: t(`${s.key}.tags`).split('|'),
  }));

  return (
    <section id="hizmetler" className="relative py-40 lg:py-56">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28`}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('srv.eyebrow')}</p>
          <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] max-w-2xl">
            {t('srv.title1')}
            <br />
            <span className="text-silver-mist">{t('srv.title2')}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-px">
          {services.map((s, i) => (
            <ServiceRow key={s.no} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index }: { service: { no: string; title: string; desc: string; tags: string[] }; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group card-lift grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start py-12 px-8 md:px-12 rounded-card bg-liquid-kelp/40 hover:bg-liquid-kelp/70 border border-white/5`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="md:col-span-1 text-[14px] text-slate-deep font-medium">{service.no}</div>
      <div className="md:col-span-4">
        <h3 className="text-[24px] md:text-[28px] font-medium text-platinum tracking-[-0.03em] mb-1 leading-[1.1]">
          {service.title}
        </h3>
      </div>
      <div className="md:col-span-5">
        <p className="text-silver-mist text-[15px] leading-[1.6] mb-5">{service.desc}</p>
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-[0.12em] text-liquid-mist border border-white/10 rounded-small px-3 py-1.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 flex md:justify-end">
        <a
          href="#iletisim"
          className="arrow-btn w-9 h-9 rounded-small bg-[rgba(79,127,245,0.5)] flex items-center justify-center"
          aria-label={`${service.title}`}
        >
          <ArrowUpRight size={16} className="text-platinum" />
        </a>
      </div>
    </div>
  );
}
