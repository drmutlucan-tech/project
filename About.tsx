import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { Target, Shield, Leaf, Eye, Compass, Award } from 'lucide-react';

export function About() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const principles = [
    { icon: Target, title: t('principle.1.title'), desc: t('principle.1.desc') },
    { icon: Shield, title: t('principle.2.title'), desc: t('principle.2.desc') },
    { icon: Leaf, title: t('principle.3.title'), desc: t('principle.3.desc') },
  ];

  const milestones = [
    { year: '1996', text: t('timeline.1996') },
    { year: '2002', text: t('timeline.2002') },
    { year: '2008', text: t('timeline.2008') },
    { year: '2014', text: t('timeline.2014') },
    { year: '2020', text: t('timeline.2020') },
  ];

  const certifications = [
    { code: 'ISO 9001', name: t('cert.iso9001') },
    { code: 'ISO 27001', name: t('cert.iso27001') },
  ];

  return (
    <section id="kurumsal" className="relative py-40 lg:py-56">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-40">
          <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
            <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('about.eyebrow')}</p>
            <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
              {t('about.title1')}
              <br />
              <span className="text-silver-mist">{t('about.title2')}</span>
            </h2>
            <div className="space-y-5 text-silver-mist text-[15px] leading-[1.7]">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p className="text-liquid-mist">{t('about.p3')}</p>
            </div>
          </div>

          <div className="relative">
            <Molecule className="absolute -top-10 -right-10 w-64 h-64 opacity-30 hidden lg:block" />
            <div className="grid grid-cols-1 gap-5 relative">
              {principles.map((p, i) => (
                <PrincipleCard key={i} principle={p} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <VisionMission />

        {/* Timeline */}
        <Timeline milestones={milestones} />

        {/* Certifications */}
        <Certifications certifications={certifications} />
      </div>
    </section>
  );
}

function VisionMission() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-40`}>
      <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('vm.eyebrow')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-liquid-kelp/40 border border-white/5 rounded-card p-10 card-lift hover:bg-liquid-kelp/70">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
              <Eye size={22} className="text-liquid-mist" />
            </div>
            <h3 className="text-[24px] font-medium text-platinum tracking-[-0.02em]">{t('vm.vision_title')}</h3>
          </div>
          <p className="text-silver-mist text-[15px] leading-[1.7]">{t('vm.vision_desc')}</p>
        </div>
        <div className="bg-liquid-kelp/40 border border-white/5 rounded-card p-10 card-lift hover:bg-liquid-kelp/70">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center">
              <Compass size={22} className="text-liquid-mist" />
            </div>
            <h3 className="text-[24px] font-medium text-platinum tracking-[-0.02em]">{t('vm.mission_title')}</h3>
          </div>
          <p className="text-silver-mist text-[15px] leading-[1.7]">{t('vm.mission_desc')}</p>
        </div>
      </div>
    </div>
  );
}

function Timeline({ milestones }: { milestones: { year: string; text: string }[] }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-40`}>
      <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('timeline.eyebrow')}</p>
      <h3 className="text-[clamp(1.8rem,4vw,2.5rem)] font-medium text-platinum tracking-[-0.04em] mb-16">
        {t('timeline.title1')} <span className="text-silver-mist">{t('timeline.title2')}</span>
      </h3>
      <div className="relative">
        <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bioluminescent/40 via-white/10 to-transparent" />
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <MilestoneItem key={m.year} milestone={m} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MilestoneItem({ milestone, index }: { milestone: { year: string; text: string }; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`reveal ${visible ? 'visible' : ''} relative flex items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-bioluminescent border-2 border-liquid-abyss z-10" />
      <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
        <div className="bg-liquid-kelp/40 border border-white/5 rounded-card p-6 card-lift hover:bg-liquid-kelp/70">
          <div className="text-[28px] font-medium text-lavender-phosphor stat-glow leading-none tracking-[-0.03em] mb-3">
            {milestone.year}
          </div>
          <p className="text-silver-mist text-[14px] leading-[1.6]">{milestone.text}</p>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}

function Certifications({ certifications }: { certifications: { code: string; name: string }[] }) {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
      <div className="flex items-center gap-3 mb-10">
        <Award size={18} className="text-liquid-mist" />
        <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist">{t('cert.eyebrow')}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-md">
        {certifications.map((c) => (
          <div key={c.code} className="bg-liquid-kelp/30 border border-white/5 rounded-card p-6 text-center card-lift hover:bg-liquid-kelp/60">
            <div className="text-[18px] font-medium text-platinum tracking-[-0.02em] mb-2">{c.code}</div>
            <div className="text-[11px] uppercase tracking-[0.1em] text-slate-deep leading-[1.4]">{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrincipleCard({ principle, index }: { principle: { icon: typeof Target; title: string; desc: string }; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = principle.icon;
  return (
    <div ref={ref} style={{ transitionDelay: `${index * 100}ms` }} className={`reveal ${visible ? 'visible' : ''} bg-liquid-kelp/50 border border-white/5 rounded-card p-8 card-lift hover:bg-liquid-kelp/80`}>
      <div className="flex items-start gap-5">
        <div className="w-11 h-11 rounded-small bg-[rgba(79,127,245,0.6)] border border-white/5 flex items-center justify-center flex-shrink-0">
          <Icon size={20} className="text-liquid-mist" />
        </div>
        <div>
          <h3 className="text-[20px] font-medium text-platinum tracking-[-0.02em] mb-2">{principle.title}</h3>
          <p className="text-silver-mist text-[14px] leading-[1.6]">{principle.desc}</p>
        </div>
      </div>
    </div>
  );
}

function Molecule({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" aria-hidden="true">
      <line x1="120" y1="40" x2="60" y2="100" />
      <line x1="60" y1="100" x2="90" y2="170" />
      <line x1="90" y1="170" x2="180" y2="140" />
      <line x1="180" y1="140" x2="120" y2="40" />
      <line x1="120" y1="40" x2="90" y2="170" />
      <line x1="60" y1="100" x2="180" y2="140" />
      <line x1="120" y1="40" x2="180" y2="140" />
      <line x1="60" y1="100" x2="120" y2="120" />
      <line x1="120" y1="120" x2="180" y2="140" />
      <circle cx="120" cy="40" r="6" fill="rgba(203,255,252,0.6)" stroke="none" />
      <circle cx="60" cy="100" r="5" fill="rgba(255,255,255,0.5)" stroke="none" />
      <circle cx="180" cy="140" r="5" fill="rgba(253,233,255,0.6)" stroke="none" />
      <circle cx="90" cy="170" r="4" fill="rgba(255,255,255,0.4)" stroke="none" />
      <circle cx="120" cy="120" r="3" fill="rgba(203,255,252,0.5)" stroke="none" />
    </svg>
  );
}
