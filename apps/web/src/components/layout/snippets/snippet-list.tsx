import NextLink from 'next/link';

import { UseAppContext } from '@/components/context/provider';
import { SnippetType } from '@/types';
import { FC } from 'react';
import { Text } from 'ui';

type Props = {
  snippets?: SnippetType[];
  setCurrentSnippet?: (id: string) => void;
};

export const SnippetListView: FC<Props> = ({ snippets }) => {
  const { dispatch } = UseAppContext();

  return (
    <table className="table-auto flex flex-col space-y-4 my-2">
      <tbody className="flex flex-col divide-y divide-slate-500">
        {snippets &&
          snippets.map(({ id, title, createdAt }) => (
            <NextLink
              key={title}
              href={`/snippet?id=${id}`}
              as={`/snippet/${id}`}
              title={title}
              legacyBehavior
            >
              <tr
                className="flex justify-between items-center py-4"
                onClick={() =>
                  dispatch({ type: 'SET_ARTICLE_ID', payload: id })
                }
              >
                <td>
                  <Text className="text-rose-500 hover:underline cursor-pointer underline-offset-4 text-ellipsis line-clamp-1 text-lg">
                    {title}
                  </Text>
                </td>
                <td>
                  {new Date(createdAt).toLocaleDateString('en-GB', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </td>
              </tr>
            </NextLink>
          ))}
      </tbody>
    </table>
  );
};
