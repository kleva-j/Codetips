'use client';

import React, { useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { SnippetListView } from '@/components/layout/snippets/snippet-list';
import { SnippetCardView } from '@/components/layout/snippets/snippet-grid';
import { Taglist } from '@/components/layout/snippets/taglist';
import { Heading } from '@/components/ui/heading';
import { List, LayoutGrid } from 'lucide-react';
import { UseAppContext } from '@/lib/context';
import { Text } from '@/components/ui/text';
import { ViewType } from '@/types';

export const Snippets = () => {
  const [view, setView] = useState<ViewType>(ViewType.list);
  const { state } = UseAppContext();

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
          {view === ViewType.list && (
            <SnippetListView snippets={state.articles.docs} />
          )}
          {view === ViewType.grid && (
            <SnippetCardView snippets={state.articles.docs} />
          )}
        </div>
        <Taglist />
      </aside>
    </section>
  );
};
