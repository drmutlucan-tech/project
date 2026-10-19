/*
# Create page_visits table for country-level visit tracking

1. New Tables
- `page_visits`
  - `id` (uuid, primary key)
  - `country` (text, visitors country from IP geolocation; null if unknown)
  - `country_code` (text, ISO 2-letter code; null if unknown)
  - `city` (text, city name; null if unknown)
  - `page` (text, which page/section was viewed; default 'home')
  - `referrer` (text, Referer header; null if none)
  - `created_at` (timestamptz, when the visit happened)

2. Security
- Enable RLS on `page_visits`.
- Allow anon + authenticated INSERT only (so the edge function can write,
  and no one can read or modify visits from the anon-key client).
- No SELECT/UPDATE/DELETE policies: only the service-role key (used by the
  edge function) can read/manage rows. The owner reads reports directly
  from the Supabase dashboard or via the service-role client.

3. Important notes
- This table is intentionally write-only from the anon perspective.
- Country data is approximate (IP-based) and not personally identifiable.
*/

CREATE TABLE IF NOT EXISTS page_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country text,
  country_code text,
  city text,
  page text NOT NULL DEFAULT 'home',
  referrer text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_page_visits" ON page_visits;
CREATE POLICY "anon_insert_page_visits"
  ON page_visits FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE INDEX IF NOT EXISTS page_visits_created_at_idx ON page_visits (created_at DESC);
CREATE INDEX IF NOT EXISTS page_visits_country_idx ON page_visits (country);
