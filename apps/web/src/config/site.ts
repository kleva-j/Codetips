export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Codetips',
  title: "Web - Codetips Example",
  description:
    'Beautifully designed personal portfolio site built with Next.js, Radix UI and Tailwind CSS.',
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Projects', href: '/projects' },
    { label: 'Snippets', href: '/snippet' },
  ],
  links: {
    twitter: 'https://twitter.com/kasmickleva',
    github: 'https://github.com/kleva-j/codetips',
    docs: 'https://ui.shadcn.com',
  },
};
