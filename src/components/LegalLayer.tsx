import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useI18n } from '@/i18n';
import { LegalModal } from '@/components/LegalModal';
import { CookieConsent } from '@/components/CookieConsent';

export type LegalDoc = 'privacy' | 'terms' | 'cookies';

const LegalContext = createContext<(doc: LegalDoc) => void>(() => {});

export function useLegal() {
  return useContext(LegalContext);
}

export function LegalLink({ doc, children, className }: { doc: LegalDoc; children: ReactNode; className?: string }) {
  const open = useLegal();
  return (
    <button type="button" onClick={() => open(doc)} className={className}>
      {children}
    </button>
  );
}

export function LegalLayer({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const [open, setOpen] = useState<LegalDoc | null>(null);

  const openDoc = (doc: LegalDoc) => setOpen(doc);
  const close = () => setOpen(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <LegalContext.Provider value={openDoc}>
      {children}
      <LegalModal doc={open} onClose={close} t={t} />
      <CookieConsent onOpenCookies={() => openDoc('cookies')} />
    </LegalContext.Provider>
  );
}
