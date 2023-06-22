'use client';

import { ContextProvider } from '@/lib/context';
import { PropsWithChildren } from 'react';

export default function ArticleLayout({ children }: PropsWithChildren) {
  return <ContextProvider>{children}</ContextProvider>;
}
