'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { FC, PropsWithChildren } from 'react';

import { SnippetStateAtom } from '@/lib/atom';
import { useAtomValue } from 'jotai';
import { MoveLeft, MoveRight, ChevronLeft } from 'lucide-react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const snippetState = useAtomValue(SnippetStateAtom);

  const { snippets, nextSnippet, currentSnippetIndex } = snippetState;

  return (
    <section className="mt-10 space-y-10">
      <Button variant="link" className="pl-0 hover:underline-offset-4" asChild>
        <Link href="/snippet">
          <ChevronLeft className="mr-2 h-4 w-4" /> Go back
        </Link>
      </Button>
      {children}
      <div className="flex justify-between">
        {nextSnippet != null &&
          nextSnippet - 2 >= 0 &&
          nextSnippet - 2 != currentSnippetIndex && (
            <Button variant="ghost" className="mr-auto" asChild>
              <Link
                href={`/snippet?id=${snippets[nextSnippet - 2].id}`}
                as={`/snippet/${snippets[nextSnippet - 2].id}`}
                aria-disabled
              >
                <MoveLeft className="mr-2 h-4 w-4" /> Prev Snippet
              </Link>
            </Button>
          )}
        {nextSnippet != null && nextSnippet != currentSnippetIndex && (
          <Button variant="ghost" className="ml-auto" asChild>
            <Link
              href={`/snippet?id=${snippets[nextSnippet].id}`}
              as={`/snippet/${snippets[nextSnippet].id}`}
              aria-disabled
            >
              Next Snippet <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Layout;
