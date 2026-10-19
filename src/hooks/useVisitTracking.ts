import { useEffect } from 'react';

/**
 * Fires a one-time ping to the track-visit edge function on first mount,
 * so the server can record the visitor's country (IP-based) and page.
 * Best-effort: failures are silently ignored to never disrupt the UI.
 */
export function useVisitTracking(page = 'home') {
  useEffect(() => {
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
