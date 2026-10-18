import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { ArrowUpRight } from 'lucide-react';

const projectMeta = [
  { no: '01', year: '2024' },
  { no: '02', year: '2023' },
  { no: '03', year: '2023' },
  { no: '04', year: '2022' },
  { no: '05', year: '2022' },
  { no: '06', year: '2021' },
  { no: '07', year: '2024' },
  { no: '08', year: '2023' },
];

export function Projects() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const projects = projectMeta.map((p) => ({
    name: t(`proj.${p.no}.name`),
    type: t(`proj.${p.no}.type`),
    year: p.year,
    desc: t(`proj.${p.no}.desc`),
    tag: t(`proj.${p.no}.tag`),
  }));

  return (
    <section className="relative py-40 lg:py-56">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6`}>
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('proj.eyebrow')}</p>
            <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] max-w-2xl">
              {t('proj.title')}
            </h2>
          </div>
          <a
            href="#iletisim"
            className="text-[12px] uppercase tracking-[0.12em] text-silver-mist hover:text-platinum transition-colors inline-flex items-center gap-2"
          >
            {t('proj.all')} <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} detailLabel={t('proj.detail')} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, detailLabel }: { project: { name: string; type: string; year: string; desc: string; tag: string }; index: number; detailLabel: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`reveal ${visible ? 'visible' : ''} card-lift group bg-liquid-kelp/40 hover:bg-liquid-kelp/70 border border-white/5 rounded-card p-8 lg:p-10 flex flex-col`}
    >
      <div className="flex items-start justify-between mb-10">
        <span className="text-[10px] uppercase tracking-[0.15em] text-liquid-mist border border-white/10 rounded-small px-3 py-1.5">
          {project.tag}
        </span>
        <span className="text-[13px] text-slate-deep">{project.year}</span>
      </div>
      <h3 className="text-[22px] md:text-[26px] font-medium text-platinum tracking-[-0.03em] mb-2 leading-[1.1]">
        {project.name}
      </h3>
      <p className="text-[11px] uppercase tracking-[0.12em] text-silver-mist mb-5">{project.type}</p>
      <p className="text-silver-mist text-[14px] leading-[1.6] flex-grow">{project.desc}</p>
      <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.12em] text-slate-deep">{detailLabel}</span>
        <span className="arrow-btn w-8 h-8 rounded-small bg-[rgba(79,127,245,0.5)] flex items-center justify-center">
          <ArrowUpRight size={14} className="text-platinum" />
        </span>
      </div>
    </article>
  );
}
