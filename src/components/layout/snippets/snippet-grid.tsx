import NextLink from 'next/link';

import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { snippetList } from '@/data';

export const SnippetCardView = () => {
  return (
    <ul className="grid justify-center md:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(3,_1fr)] gap-5 my-4">
      {snippetList.map((snippet) => (
        <NextLink
          key={snippet.title}
          href={`/snippet?id=${snippet.id}`}
          as={`/snippet/${snippet.id}`}
        >
          <Card className="p-4">
            <Heading
              variant="h4"
              className="text-rose-500 hover:underline cursor-pointer underline-offset-4"
            >
              {snippet.title}
            </Heading>
            <Text className="mt-1">{snippet.createdAt}</Text>
          </Card>
        </NextLink>
      ))}
    </ul>
  );
};
