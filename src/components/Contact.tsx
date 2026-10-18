import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Check, AlertCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useI18n } from '@/i18n';
import { supabase } from '@/lib/supabase';

export function Contact() {
  const { t } = useI18n();
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const { error: insertError } = await supabase.from('contact_messages').insert({
      name: form.name,
      email: form.email,
      company: form.company || null,
      message: form.message,
    });

    setLoading(false);

    if (insertError) {
      setError(true);
      return;
    }

    setSent(true);
    setForm({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="iletisim" className="relative py-40 lg:py-56 bg-liquid-deep">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} max-w-page mx-auto px-6 lg:px-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-silver-mist mb-6">{t('contact.eyebrow')}</p>
            <h2 className="text-[clamp(2.1rem,5vw,3.5rem)] font-medium text-platinum tracking-[-0.04em] mb-8">
              {t('contact.title1')}
              <br />
              <span className="aurora-text">{t('contact.title2')}</span>
            </h2>
            <p className="text-silver-mist text-[15px] leading-[1.7] max-w-md mb-12">{t('contact.desc')}</p>

            <div className="space-y-6">
              <ContactRow icon={<Mail size={18} />} label={t('contact.email_label')} value="info@bomergrup.com" />
              <ContactRow icon={<Phone size={18} />} label={t('contact.phone_label')} value="+90 549 156 9000" />
              <ContactRow icon={<MapPin size={18} />} label={t('contact.office_label')} value="Çankaya, Ankara, Türkiye" />
            </div>
          </div>

          <div className="bg-liquid-kelp/40 border border-white/5 rounded-card p-8 md:p-10">
            {sent ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bioluminescent-bg flex items-center justify-center">
                  <Check size={24} className="text-liquid-abyss" />
                </div>
                <h3 className="text-[24px] font-medium text-platinum">{t('contact.sent_title')}</h3>
                <p className="text-silver-mist text-[14px] max-w-xs">{t('contact.sent_desc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {error && (
                  <div className="flex items-center gap-3 rounded-small border border-red-400/30 bg-red-400/10 px-4 py-3">
                    <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
                    <p className="text-[13px] text-red-300">{t('contact.error')}</p>
                  </div>
                )}
                <Field label={t('contact.name')} value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label={t('contact.email')} type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Field label={t('contact.company')} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.12em] text-silver-mist mb-3">{t('contact.message')}</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-liquid-abyss/60 border border-white/10 rounded-small px-4 py-3 text-platinum text-[14px] placeholder-slate-deep focus:border-bioluminescent focus:outline-none transition-colors resize-none"
                    placeholder={t('contact.placeholder')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="aurora-bg text-liquid-abyss text-[13px] uppercase tracking-[0.1em] font-medium px-7 py-4 rounded-small hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? t('contact.sending') : t('contact.send')}
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-small bg-liquid-kelp/60 border border-white/5 flex items-center justify-center text-liquid-mist">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.15em] text-slate-deep mb-1">{label}</div>
        <div className="text-platinum text-[15px]">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.12em] text-silver-mist mb-3">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-liquid-abyss/60 border border-white/10 rounded-small px-4 py-3 text-platinum text-[14px] placeholder-slate-deep focus:border-bioluminescent focus:outline-none transition-colors"
      />
    </div>
  );
}
