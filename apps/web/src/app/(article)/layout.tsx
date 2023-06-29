'use client';

import { ContextProvider } from '@/components/context/provider';
import { PropsWithChildren } from 'react';

export default function ArticleLayout({ children }: PropsWithChildren) {
  return <ContextProvider>{children}</ContextProvider>;
}
