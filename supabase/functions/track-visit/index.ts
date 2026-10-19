import { createClient } from "npm:@supabase/supabase-js@2.45.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = forwarded ? forwarded.split(",")[0].trim() : realIp || "";

    let body: { page?: string; referrer?: string } = {};
    try {
      body = await req.json();
    } catch {
      body = {};
    }

    const page = body.page || "home";
    const referrer = body.referrer || null;

    // Geolocation lookup (free, no API key required)
    let country: string | null = null;
    let countryCode: string | null = null;
    let city: string | null = null;

    if (clientIp) {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${clientIp}?fields=status,country,countryCode,city`,
          { headers: { Accept: "application/json" } }
        );
        if (geoRes.ok) {
          const geo = await geoRes.json();
          if (geo.status === "success") {
            country = geo.country || null;
            countryCode = geo.countryCode || null;
            city = geo.city || null;
          }
        }
      } catch {
        // Geolocation is best-effort; ignore failures
      }
    }

    const { error } = await supabase.from("page_visits").insert({
      country,
      country_code: countryCode,
      city,
      page,
      referrer,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, country }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
