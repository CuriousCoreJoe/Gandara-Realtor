export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The <html>/<body> tags live in the [locale] layout, which owns the lang
  // attribute. This root layout just passes children through so the static
  // export root redirect (app/page.tsx) can share the same shell.
  return children;
}
