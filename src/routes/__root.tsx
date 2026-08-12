import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useLocation,
} from '@tanstack/react-router';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { type AppLocale, localeMeta, message } from '@/lib/locale';
import appCss from '@/styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#ffd84a' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'manifest', href: '/manifest.webmanifest' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFound,
});

function currentLocale(pathname: string): AppLocale {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

function RootLayout() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const locale = currentLocale(pathname);
  return (
    <div className="isolate min-h-screen">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg border-2 border-ink bg-yellow px-4 py-2 font-black text-ink shadow-brutal focus:translate-y-0"
      >
        {message('skip_to_content', locale)}
      </a>
      <Header locale={locale} />
      <Outlet />
      <Footer locale={locale} />
    </div>
  );
}

function NotFound() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const locale = currentLocale(pathname);
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-[68vh] max-w-3xl flex-col items-start justify-center px-6 py-20"
    >
      <span className="rounded-full border-2 border-ink bg-orange px-4 py-1 font-black text-ink">
        404
      </span>
      <h1 className="mt-6 text-5xl font-black tracking-[-0.03em]">
        {message('not_found_title', locale)}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {message('not_found_description', locale)}
      </p>
      <a
        className="mt-8 rounded-lg border-2 border-ink bg-yellow px-5 py-3 font-black text-ink shadow-brutal"
        href={locale === 'zh' ? '/zh' : '/'}
      >
        {message('not_found_action', locale)}
      </a>
    </main>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname });
  const locale = currentLocale(pathname);
  const themeScript = `(()=>{try{const t=localStorage.getItem('mkfast-lite-theme')||'system';const d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=d?'dark':'light'}catch{}})()`;
  return (
    <html lang={localeMeta[locale].hreflang} suppressHydrationWarning>
      <head>
        <script>{themeScript}</script>
        <HeadContent />
      </head>
      <body>
        {/*
        THESIS: A complete simple-site foundation with every SaaS subsystem visibly absent.
        OWN-WORLD: Warm workshop paper, ink construction lines, offset color plates, rounded heavy type.
        STORY: Understand the smaller starter, inspect its honest scope, create it, and deploy.
        FIRST VIEWPORT: Asymmetric headline and CTA beside a layered build board that ends at Workers.
        FORM: Rebuilt from the approved Raft landing topology; seed key raft-topology-clean-room.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}
