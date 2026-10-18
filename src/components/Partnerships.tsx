import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import {
  Globe,
  Share2,
  Handshake,
  Wrench,
  Target,
  ArrowUpRight,
} from 'lucide-react';

const itemKeys = [
  { key: 'part.item.1', icon: Globe },
  { key: 'part.item.2', icon: Share2 },
  { key: 'part.item.3', icon: Handshake },
  { key: 'part.item.4', icon: Wrench },
  { key: 'part.item.5', icon: Target },
];

const partnerCompanies = [
  { name: 'THALES', href: 'https://www.thalesgroup.com', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thales_Logo.svg' },
  { name: 'INDRA', href: 'https://www.indracompany.com', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indra-Sistemas-Logo.svg' },
  { name: 'SICE', href: 'https://www.sice.com', logo: 'https://www.sice.com/favicon.ico' },
  { name: 'MITSUI', href: 'https://www.mitsui.com', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mitsui_Group_logo.svg' },
  { name: 'CNR Dalian', href: 'https://www.crrcgc.cc', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/CNR_logo.svg' },
  { name: 'Technivial', href: 'https://www.technivial.com', logo: '' },
];

export function Partnerships() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="isbirligi" className="relative py-40 lg:py-56">
      <div className="max-w-page mx-auto px-6 lg:px-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-28 max-w-3xl`}>
          <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('part.eyebrow')}</p>
          <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
            {t('part.title1')}
            <br />
            <span className="aurora-text">{t('part.title2')}</span>
          </h2>
          <p className="text-silver-mist text-[16px] leading-[1.7] max-w-2xl">{t('part.desc')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {itemKeys.map((item, i) => (
            <PartCard
              key={i}
              icon={item.icon}
              title={t(`${item.key}.title`)}
              desc={t(`${item.key}.desc`)}
              index={i}
            />
          ))}
        </div>

        <PartnerLogoStrip />

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

function PartnerLogoStrip() {
  const { t } = useI18n();
  const items = [...partnerCompanies, ...partnerCompanies];

  return (
    <div className="mb-4 overflow-hidden rounded-card border border-white/5 bg-liquid-deep/45 py-7">
      <div className="mb-6 px-7 text-[11px] uppercase tracking-[0.18em] text-slate-deep">{t('part.companies')}</div>
      <div className="partner-marquee">
        <div className="partner-track flex w-max items-center gap-4 px-4">
          {items.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-24 w-48 flex-shrink-0 items-center justify-center rounded-card border border-white/8 bg-liquid-kelp/55 px-6 transition-all duration-300 hover:-translate-y-1 hover:border-bioluminescent/50 hover:bg-liquid-kelp"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-10 max-w-[132px] object-contain grayscale brightness-0 invert opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                onError={(event) => {
                  event.currentTarget.classList.add('hidden');
                  event.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-center text-[15px] font-semibold tracking-[0.08em] text-platinum">{partner.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function PartCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: typeof Globe;
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
