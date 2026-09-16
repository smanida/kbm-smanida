// Ganti dengan URL dan Anon Key dari dashboard Supabase Anda
const SUPABASE_URL = "https://rhwceclmhyzadocjqxvl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_m3qo3CoQHQcW8jrlwORPAQ_5i_y0kjw";

// Inisialisasi library Supabase Client dari window global CDN
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});