import NextLink from 'next/link';

import { SnippetType } from '@/types';
import { Card, Text } from 'ui';
import { FC } from 'react';

type Props = {
  snippets?: SnippetType[];
  setCurrentSnippet?: (id: string) => void;
};

export const SnippetCardView: FC<Props> = ({ snippets }) => {
  return (
    <ul className="grid justify-center lg:grid-cols-[repeat(2,_1fr)] gap-5 my-4">
      {snippets &&
        snippets.map(({ id, title, createdAt }) => (
          <NextLink
            key={title}
            href={`/snippet?id=${id}`}
            as={`/snippet/${id}`}
            title={title}
          >
            <Card className="p-4 flex flex-col">
              <Text className="text-rose-500 hover:underline cursor-pointer underline-offset-4 text-ellipsis line-clamp-1 text-lg">
                {title}
              </Text>
              <Text className="mt-1 ml-auto">
                {new Date(createdAt).toLocaleDateString('en-GB', {
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
            </Card>
          </NextLink>
        ))}
    </ul>
  );
};
