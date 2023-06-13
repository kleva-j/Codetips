export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Codetips',
  description:
    'Beautifully designed personal portfolio site built with Next.js, Radix UI and Tailwind CSS.',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'Snippets', href: '/snippets' },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
