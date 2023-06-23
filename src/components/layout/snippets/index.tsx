'use client';

import React, { useState } from 'react';

import { SnippetListView as ListView } from '@/components/layout/snippets/snippet-list';
import { SnippetCardView as CardView } from '@/components/layout/snippets/snippet-grid';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Taglist } from '@/components/layout/snippets/taglist';
import { Heading } from '@/components/ui/heading';
import { SnippetType, ViewType } from '@/types';
import { List, LayoutGrid } from 'lucide-react';
import { UseAppContext } from '@/lib/context';
import { Text } from '@/components/ui/text';

export const Snippets = () => {
  const [view, setView] = useState<ViewType>(ViewType.list);
  const { articles } = UseAppContext().state;

  const snippets = (articles.docs || []).filter(
    (article: SnippetType) => article.type === 'snippet',
  );

  return (
    <section>
      <Heading variant="h1" className="mt-20 font-bold">
        Snippets.
      </Heading>
      <Text className="mt-4">
        Short solutions to discrete problems which can be copied and pasted.
      </Text>
      <aside className="flex justify-between mt-5 gap-x-10">
        <div className="flex flex-col flex-1 gap-y-4">
          <ToggleGroup
            type="single"
            className="ml-auto"
            value={view}
            onValueChange={(value: ViewType) => value && setView(value)}
          >
            <ToggleGroupItem
              value={ViewType.list}
              aria-label="List view"
              variant="outline"
            >
              <List size={18} />
            </ToggleGroupItem>
            <ToggleGroupItem
              value={ViewType.grid}
              aria-label="Grid view"
              variant="outline"
            >
              <LayoutGrid size={18} />
            </ToggleGroupItem>
          </ToggleGroup>
          {view === ViewType.list && <ListView snippets={snippets} />}
          {view === ViewType.grid && <CardView snippets={snippets} />}
        </div>
        <Taglist />
      </aside>
    </section>
  );
};
