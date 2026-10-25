import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLife, type Lang } from '../lib/i18n';
import { translations } from '../lib/translations';

export function Navbar() {
  const { t, lang, setLang } = useLife();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { label: t('nav.kurumsal'), href: '#kurumsal' },
    { label: t('nav.faaliyetler'), href: '#faaliyetler' },
    { label: t('nav.muhendislik'), href: '#muhendislik' },
    { label: t('nav.projeler'), href: '#projeler' },
    { label: t('nav.birlikteizleg'), href: '#birlikteizleg' },
  ];

  const langs: { code: Lang; label: string }[] = [
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'zh', label: '中文' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.date-lang-switchery')) setLangOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-liquid-abyss/85 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Hareketli Logo */}
        <a href="https://bomergrup.com" className="flex items-center">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-32 h-auto object-contain"
          >
            <source src="/bomer-logo.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.12em] text-silver/80 hover:text-platinum transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Language */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block date-lang-switchery">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.1em] text-silver/80 hover:text-platinum transition-colors py-1.5 px-3 rounded-lg bg-liquid-deep/50 border border-white/10"
              aria-expanded={langOpen}
            >
              <Globe size={14} />
              <span>{lang.toUpperCase()}</span>
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-liquid-deep border border-white/10 rounded-xl overflow-hidden shadow-2xl py-2 min-w-[120px]">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[12px] uppercase tracking-[0.1em] transition-colors ${
                      lang === l.code ? 'bg-liquid text-platinum' : 'text-slate-deep hover:text-silver'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-platinum"
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-liquid-deep border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[13px] uppercase tracking-[0.12em] text-silver hover:text-platinum transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile language switcher */}
            <div className="pt-2 border-t border-white/5 flex items-center gap-2">
              <span className="text-[10px] text-slate-deep uppercase">Dil / Language:</span>
              <div className="flex gap-1">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    className={`px-2.5 py-1 rounded text-[11px] uppercase transition-colors ${
                      lang === l.code ? 'bg-liquid text-platinum' : 'text-slate-deep'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
