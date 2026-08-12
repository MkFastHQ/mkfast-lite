import { Logo } from '@/components/shared/logo';
import { Container } from '@/components/ui/primitives';
import { type AppLocale, message } from '@/lib/locale';

export function Footer({ locale }: { locale: AppLocale }) {
  return (
    <footer className="border-t-2 border-ink bg-ink py-12 text-paper">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-lg">
          <div className="mb-4 flex items-center gap-3">
            <Logo />
            <span className="text-xl font-black">MkFast Lite</span>
          </div>
          <p className="text-paper/75">{message('footer_tagline', locale)}</p>
        </div>
        <p className="border-t-2 border-paper/20 pt-5 text-sm font-bold text-paper/65 sm:border-t-0 sm:pt-0 sm:text-right">
          © MkFast Lite {new Date().getFullYear()}
          {locale === 'zh' ? '。' : '. '}
          {message('footer_rights', locale)}
        </p>
      </Container>
    </footer>
  );
}
