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
