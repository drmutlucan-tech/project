import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useI18n } from '@/i18n';
import type { LegalDoc } from '@/components/LegalLayer';
import { getLegalContent } from '@/components/legalContent';

type T = (key: string) => string;

export function LegalModal({ doc, onClose, t }: { doc: LegalDoc | null; onClose: () => void; t: T }) {
  const { lang } = useI18n();

  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [doc, onClose]);

  if (!doc) return null;

  const content = getLegalContent(doc, lang);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-liquid-abyss/80 backdrop-blur-md px-4 py-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="relative bg-liquid-deep border border-white/10 rounded-card max-w-2xl w-full p-8 md:p-12 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={t('legal.close')}
          className="absolute top-5 right-5 text-slate-deep hover:text-platinum transition-colors p-1"
        >
          <X size={20} />
        </button>
        <p className="text-[10px] uppercase tracking-[0.2em] text-silver-mist mb-3">{content.updated}</p>
        <h2 id="legal-modal-title" className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium text-platinum tracking-[-0.03em] mb-8 pr-10">
          {content.title}
        </h2>
        <div className="space-y-6">
          {content.sections.map((s, i) => (
            <div key={i}>
              <h3 className="text-[14px] font-medium text-liquid-mist mb-2">{s.h}</h3>
              <p className="text-silver-mist text-[14px] leading-[1.7]">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
