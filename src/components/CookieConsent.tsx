import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { useI18n } from '@/i18n';

const STORAGE_KEY = 'bomer-cookie-consent';

export function CookieConsent({ onOpenCookies }: { onOpenCookies: () => void }) {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] px-4 pb-4 animate-fade-up"
      role="region"
      aria-label={t('cookie.banner_label')}
    >
      <div className="max-w-page mx-auto bg-liquid-deep border border-white/10 rounded-card p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 shadow-2xl">
        <div className="flex items-start gap-3 flex-1">
          <Cookie size={20} className="text-liquid-mist flex-shrink-0 mt-0.5" />
          <p className="text-silver-mist text-[13px] leading-[1.6]">
            {t('cookie.text')}{' '}
            <button
              type="button"
              onClick={onOpenCookies}
              className="text-liquid-mist underline underline-offset-2 hover:text-platinum transition-colors"
            >
              {t('cookie.link')}
            </button>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-[12px] uppercase tracking-[0.1em] text-slate-deep hover:text-silver-mist transition-colors px-4 py-2.5"
          >
            {t('cookie.decline')}
          </button>
          <button
            onClick={accept}
            className="aurora-bg text-liquid-abyss text-[12px] uppercase tracking-[0.1em] font-medium px-6 py-2.5 rounded-small hover:opacity-90 transition-opacity"
          >
            {t('cookie.accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
