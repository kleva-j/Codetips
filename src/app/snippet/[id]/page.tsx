'use client';

import * as React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { updateSnippetsState, SnippetStateAtom } from '@/lib/atom';
import { Heading } from '@/components/ui/heading';
import { useAtomValue, useAtom } from 'jotai';
import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';

export default function Snippet({ params }: { params: { id: string } }) {
  const { id } = params;

  const snippetState = useAtomValue(SnippetStateAtom);
  const [, updateSnippetState] = useAtom(updateSnippetsState);

  const { prevSnippet, snippets, nextSnippet } = snippetState;

  const snippetIndex = snippets.findIndex((snippet) => snippet.id === id);

  if (snippetIndex < 0) throw new Error(`Snippet with id ${id} not found`);

  const snippet = snippets[snippetIndex];

  const update = {
    nextSnippet: Math.min(snippetIndex + 1, snippets.length - 1),
    prevSnippet: Math.max(snippetIndex - 1, 0),
    currentSnippetIndex: snippetIndex,
    isLoadingSnippets: false,
    currentSnippet: snippet,
  };

  console.log({ prevSnippet, snippetIndex, nextSnippet });

  React.useEffect(() => {
    if (snippet) updateSnippetState(update);
  }, []);

  const { title, description, category, createdAt, tags } = snippet;

  return (
    <aside>
      <Heading variant="h2" className="font-semibold">
        {title}
      </Heading>
      <Card className="mt-10">
        <CardHeader>
          <Text className="text-lg capitalize">{description}</Text>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-start space-y-2 rounded-md border p-3 flex-col">
            <Text className="text-sm">Category: {category}</Text>
            <Text className="text-sm">Published: {createdAt}</Text>
            <div className="flex gap-x-4">
              <Text className="text-sm">Tags:</Text>
              <ul className="flex space-x-4 items-center">
                {tags?.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </ul>
            </div>
          </div>
          <div className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non
            doloremque minus eligendi ab ipsam sapiente perferendis vel earum
            dicta. Quis dignissimos culpa ab dolorem dolor rerum animi cum ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non
            doloremque minus eligendi ab ipsam sapiente perferendis vel earum
            dicta. Quis dignissimos culpa ab dolorem dolor rerum animi cum ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non
            doloremque minus eligendi ab ipsam sapiente perferendis vel earum
            dicta. Quis dignissimos culpa ab dolorem dolor rerum animi cum ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non
            doloremque minus eligendi ab ipsam sapiente perferendis vel earum
            dicta. Quis dignissimos culpa ab dolorem dolor rerum animi cum ipsa.
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
