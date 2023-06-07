export type NonNullable<T> = Exclude<T, null | undefined>;
export enum colorScheme {
  light = 'light',
  dark = 'dark',
}
export type ProjectType = {
  name: string;
  date: string;
  slug: string;
  tagline: string;
  url?: string;
  writeup?: string;
  highlight?: boolean;
  github_url?: string;
};

export type SnippetType = {
  title: string;
  createdAt: string;
  updatedAt?: string;
  category?: string;
  description?: string;
  tags?: string[];
};
