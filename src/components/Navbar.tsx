import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n, type Lang } from '@/i18n';
import { BrandLogo } from '@/components/BrandLogo';

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: t('nav.kurumsal'), href: '#kurumsal' },
    { label: t('nav.faaliyetler'), href: '#hizmetler' },
    { label: t('nav.muhendislik'), href: '#muhendislik' },
    { label: t('nav.projeler'), href: '#projeler' },
    { label: t('nav.isbirligi'), href: '#isbirligi' },
  ];

  const langs: { code: Lang; label: string }[] = [
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'zh', label: '中文' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-lang-switcher]')) setLangOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [langOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-liquid-abyss/85 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-page mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <BrandLogo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link text-[11px] uppercase tracking-[0.12em] text-silver-mist hover:text-platinum transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: language */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div className="relative hidden md:block" data-lang-switcher>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-silver-mist hover:text-platinum transition-colors"
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-liquid-deep border border-white/10 rounded-small py-2 min-w-[64px]">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-1.5 text-[11px] uppercase tracking-[0.1em] text-left transition-colors ${
                      lang === l.code ? 'text-platinum' : 'text-slate-deep hover:text-silver-mist'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-platinum p-2"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-liquid-deep border-t border-white/5">
          <ul className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[13px] uppercase tracking-[0.12em] text-silver-mist hover:text-platinum transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Mobile language switcher */}
            <li className="flex items-center gap-3 pt-2">
              <Globe size={16} className="text-slate-deep" />
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-small ${
                    lang === l.code ? 'bg-liquid-kelp text-platinum' : 'text-slate-deep'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
