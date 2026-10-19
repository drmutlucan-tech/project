import { useEffect } from 'react';

const CONSENT_KEY = 'bomer-cookie-consent';

/**
 * Returns the visitor's cookie consent state:
 *  - 'accepted'  → analytics tracking allowed
 *  - 'declined'  → no analytics tracking
 *  - null        → no choice yet (default: do not track)
 */
export function getConsent(): 'accepted' | 'declined' | null {
  if (typeof localStorage === 'undefined') return null;
  return (localStorage.getItem(CONSENT_KEY) as 'accepted' | 'declined' | null) ?? null;
}

/**
 * Fires a one-time ping to the track-visit edge function on first mount,
 * so the server can record the visitor's country (IP-based) and page.
 * Respects cookie consent: only fires when consent === 'accepted'.
 * Best-effort: failures are silently ignored to never disrupt the UI.
 */
export function useVisitTracking(page = 'home') {
  useEffect(() => {
    if (getConsent() !== 'accepted') return;

    const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-visit`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    };

    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        page,
        referrer: document.referrer || null,
      }),
      keepalive: true,
    }).catch(() => {
      // ignore — tracking is best-effort
    });
  }, [page]);
}
