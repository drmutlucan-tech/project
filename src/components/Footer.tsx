import { ArrowUp } from 'lucide-react';
import { useI18n } from '@/i18n';
import { BrandLogo } from '@/components/BrandLogo';
import { LegalLink } from '@/components/LegalLayer';

export function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { label: t('nav.kurumsal'), href: '#kurumsal' },
    { label: t('nav.faaliyetler'), href: '#hizmetler' },
    { label: t('nav.muhendislik'), href: '#muhendislik' },
    { label: t('nav.projeler'), href: '#projeler' },
    { label: t('nav.isbirligi'), href: '#isbirligi' },
    { label: t('nav.iletisim'), href: '#iletisim' },
  ];

  return (
    <footer className="relative bg-liquid-deep border-t border-white/5">
      <div className="max-w-page mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <BrandLogo compact />
            </div>
            <p className="text-silver-mist text-[14px] leading-[1.7] max-w-sm">
              {t('footer.brand_desc')}
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-slate-deep mb-5">{t('footer.sitemap')}</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-silver-mist text-[14px] hover:text-platinum transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.15em] text-slate-deep mb-5">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-[14px] text-silver-mist">
              <li>info@bomergrup.com</li>
              <li><a href="tel:+905491569000" className="hover:text-platinum transition-colors">+90 549 156 9000</a></li>
              <li>Çankaya, Ankara, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-[12px] text-slate-deep">
              © {new Date().getFullYear()} BOMERGRUP {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4">
              <LegalLink
                doc="privacy"
                className="text-[11px] uppercase tracking-[0.1em] text-slate-deep hover:text-silver-mist transition-colors"
              >
                {t('legal.privacy')}
              </LegalLink>
              <LegalLink
                doc="terms"
                className="text-[11px] uppercase tracking-[0.1em] text-slate-deep hover:text-silver-mist transition-colors"
              >
                {t('legal.terms')}
              </LegalLink>
              <LegalLink
                doc="cookies"
                className="text-[11px] uppercase tracking-[0.1em] text-slate-deep hover:text-silver-mist transition-colors"
              >
                {t('legal.cookies')}
              </LegalLink>
            </div>
          </div>
          <a
            href="#top"
            className="text-[11px] uppercase tracking-[0.12em] text-silver-mist hover:text-platinum transition-colors inline-flex items-center gap-2"
          >
            {t('footer.top')} <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
