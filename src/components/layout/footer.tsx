import { Logo } from '@/components/shared/logo';
import { Container } from '@/components/ui/primitives';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Footer({ locale }: { locale: AppLocale }) {
  return (
    <footer className="border-t-2 border-ink bg-ink py-12 text-paper">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <Logo />
            <span className="text-xl font-black">MkFast Lite</span>
          </div>
          <p className="text-paper/75">{message('footer_tagline', locale)}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
          <a
            className="text-paper decoration-orange hover:underline"
            href={websiteConfig.repository}
            target="_blank"
            rel="noreferrer"
          >
            {message('footer_source', locale)}
          </a>
          <a
            className="text-paper decoration-orange hover:underline"
            href={`${websiteConfig.repository}/blob/main/LICENSE`}
            target="_blank"
            rel="noreferrer"
          >
            {message('footer_license', locale)}
          </a>
          <span className="text-paper/65">
            © {new Date().getFullYear()} · {message('footer_rights', locale)}
          </span>
        </div>
      </Container>
    </footer>
  );
}
