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
  id: string;
  title: string;
  createdAt: string;
  updatedAt?: string;
  category?: string;
  description?: string;
  tags?: string[];
  type?: 'blog' | 'snippet';
  content?: Array<Record<string, never>>;
};

export type SnippetStateType = {
  currentSnippet: SnippetType | null;
  currentSnippetIndex: number | null;
  snippets: SnippetType[];
  isLoadingSnippets: boolean;
  searchQuery?: string;
  prevSnippet: number | null;
  nextSnippet: number | null;
  // TODO: add more states here as needed.
};

export type AppState = {
  articles: ArticlesType;
  articleId: string | null;
  isLoadingArticle: boolean;
  searchQuery: string;
  prevArticle: SnippetType | null;
  nextArticle: SnippetType | null;
};

export type ArticlesType = {
  docs?: Array<SnippetType>;
  totalDocs?: number;
  limit?: number;
  totalPages?: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
};

export enum ViewType {
  grid = 'grid',
  list = 'list',
}
