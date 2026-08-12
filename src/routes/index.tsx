import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/home/home-page';
import { homeHead } from '@/lib/seo';

export const Route = createFileRoute('/')({
  head: () => homeHead('en'),
  component: () => <HomePage locale="en" />,
});
