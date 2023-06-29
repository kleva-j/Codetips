import { cache } from 'react';

const api_url =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL_PROD
    : process.env.NEXT_PUBLIC_API_URL_DEV;

export const fetchArticle = cache((id: string) =>
  fetch(`${api_url}/api/articles/${id}`).then((res) => res.json()),
);

export const fetchArticles = cache(() =>
  fetch(`${api_url}/api/articles`).then((res) => {
    console.log(api_url);
    return res.json()
  }).catch((err) => console.log(api_url)),
);
