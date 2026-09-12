import { redirect } from 'next/navigation';

// Static export has no server to negotiate the locale, so `/` redirects to the
// default locale. Netlify also issues a 301 for `/` → `/en/` (see netlify.toml).
export default function RootPage() {
  redirect('/en');
}
