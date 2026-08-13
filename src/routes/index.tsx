import { createFileRoute } from '@tanstack/react-router';
import { createIsomorphicFn } from '@tanstack/react-start';
import { getRequestUrl } from '@tanstack/react-start/server';
import { HomePage } from '@/components/home/home-page';
import { homeHead } from '@/lib/seo';

const getRequestOrigin = createIsomorphicFn()
  .server(() => getRequestUrl().origin)
  .client(() => window.location.origin);

export const Route = createFileRoute('/')({
  head: () => homeHead('en', getRequestOrigin()),
  component: () => <HomePage locale="en" />,
});
