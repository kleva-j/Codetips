import { SnippetStateType, SnippetType } from '@/types';
import { snippetList } from '@/data';
import { atom } from 'jotai';

export const _blankSnippet: SnippetType = {
  id: '',
  title: '',
  createdAt: '',
  updatedAt: '',
  category: '',
  description: '',
  tags: [],
};

export const initialSnippetState: SnippetStateType = {
  currentSnippet: null,
  currentSnippetIndex: null,
  snippets: snippetList || [],
  isLoadingSnippets: false,
  searchQuery: '',
  prevSnippet: null,
  nextSnippet: null,
};

export const setSnippetState = (
  state: SnippetStateType,
  {
    currentSnippetIndex,
    isLoadingSnippets,
    currentSnippet,
    searchQuery,
    prevSnippet,
    nextSnippet,
    snippets,
  }: Partial<SnippetStateType>,
): SnippetStateType => ({
  currentSnippetIndex: currentSnippetIndex || state.currentSnippetIndex,
  isLoadingSnippets: isLoadingSnippets || state.isLoadingSnippets,
  currentSnippet: currentSnippet || state.currentSnippet,
  searchQuery: searchQuery || state.searchQuery,
  prevSnippet: prevSnippet || state.prevSnippet,
  nextSnippet: nextSnippet || state.nextSnippet,
  snippets: snippets || state.snippets,
});

export const SnippetStateAtom = atom(initialSnippetState);

export const updateSnippetsState = atom(
  () => initialSnippetState,
  (get, set, payload: Partial<SnippetStateType>) => {
    set(SnippetStateAtom, setSnippetState(get(SnippetStateAtom), payload));
  },
);
