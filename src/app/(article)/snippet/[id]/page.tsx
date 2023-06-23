'use client';

import * as React from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { UseAppContext } from '@/lib/context';
import { Text } from '@/components/ui/text';

export default function Snippet({ params }: { params: { id: string } }) {
  const { id } = params;
  const { articles } = UseAppContext().state;

  const snippet = (articles?.docs || []).find((snippet) => snippet.id === id);

  if (!snippet) throw new Error(`Snippet with id ${id} not found`);

  const { title, description, category, createdAt, tags, content } = snippet;

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
          <ul className="my-2 space-y-4">
            {content?.map((item, index) => (
              <li key={index}>{JSON.stringify(item, null, 2)}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
}
