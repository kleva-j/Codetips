import { use, PropsWithChildren, Fragment } from 'react';
import { UseAppContext } from '@/lib/context';
import { fetchArticles } from './api';

export const LoadArticles = ({ children }: PropsWithChildren) => {
  const { state, dispatch } = UseAppContext();

  if (!state.articles) {
    const content = use(fetchArticles());
    dispatch({ type: 'FETCH_ARTICLES', payload: content });
  }

  return <Fragment>{children}</Fragment>;
};
