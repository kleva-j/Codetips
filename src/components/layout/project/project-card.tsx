import React, { FC } from 'react';
import Link from 'next/link';

import {
  CardContent,
  CardFooter,
  CardHeader,
  Card,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { ProjectType } from '@/types';
import { Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProjectCardProps = ProjectType & {
  onClick?: () => void;
};

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { name, url, tagline, github_url } = props;

  return (
    <Card className="flex flex-col bg-light_bg cursor-pointer">
      <CardHeader className={cn('pb-5 font-semibold')}>{name}</CardHeader>

      <CardContent className="mb-auto">
        <Text className="text-[14.4px] m-0 line-clamp-2">{tagline}</Text>
      </CardContent>

      <CardFooter className="pb-5">
        <div className="flex gap-x-2">
          {url && (
            <Button
              size="sm"
              variant="outline"
              className="bg-background"
              asChild
            >
              <Link href={`${url}`} target="_blank" rel="noreferrer noopener">
                <span className="text-sm">Link</span>
                <Link2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {github_url && (
            <Button
              size="sm"
              variant="outline"
              className="bg-background"
              asChild
            >
              <Link
                href={`${github_url}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="text-sm">Github</span>
                <Link2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
