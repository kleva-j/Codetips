import {
  PropsWithChildren,
  createContext,
  useReducer,
  useContext,
  use,
} from 'react';
import { AppState } from '@/types';

import { fetchArticles } from './api';
import { actions } from './contants';

export const initialState: AppState = {
  articles: {},
  articleId: null,
  isLoadingArticle: false,
  searchQuery: '',
  prevArticle: null,
  nextArticle: null,
};

type Action = { type: keyof typeof actions; payload?: any };
type State = typeof initialState;
type Dispatch = (action: Action) => void;
type Articles = Pick<State, 'articles'>;

const AppContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export function UseAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error(`useUserDispatch must be used within a UserProvider`);
  return context;
}

function AppReducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case 'FETCH_ARTICLES': {
      return { ...state, articles: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function ContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {
    state: { ...state, articles: use<Articles>(fetchArticles()) },
    dispatch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
