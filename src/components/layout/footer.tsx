import { Container } from '@/components/layout/container';
import { Logo } from '@/components/shared/logo';
import { websiteConfig } from '@/config/website';
import { type AppLocale, message } from '@/lib/locale';

export function Footer({ locale }: { locale: AppLocale }) {
  return (
    <footer className="border-t border-ink/20 bg-surface py-12 text-foreground">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <div className="mb-4 flex items-center gap-3">
            <Logo />
            <span className="text-xl font-black">{websiteConfig.name}</span>
          </div>
          <p className="text-muted-foreground">
            {message('footer_tagline', locale)}
          </p>
        </div>
        <p className="border-t-2 border-ink/20 pt-5 text-sm text-muted-foreground sm:border-t-0 sm:pt-0 sm:text-right">
          © {websiteConfig.name} {new Date().getFullYear()}
          {locale === 'zh' ? '。' : '. '}
          {message('footer_rights', locale)}
        </p>
      </Container>
    </footer>
  );
}
