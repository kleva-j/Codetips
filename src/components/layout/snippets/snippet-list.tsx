import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { snippetList } from '@/data';

export const SnippetListView = () => {
  return (
    <ul className="flex flex-col gap-y-4">
      {snippetList.map((snippet) => (
        <li
          className="flex flex-col gap-y-2 border border-transparent hover:border-accent p-3 rounded cursor-pointer"
          key={snippet.title}
        >
          <div className="flex justify-between">
            <Heading
              variant="h4"
              className="text-rose-500 hover:underline cursor-pointer"
            >
              {snippet.title}
            </Heading>
            <Text>{snippet.createdAt}</Text>
          </div>
          <div className="flex space-x-3 items-center">
            {snippet.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:border-rose-500"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
