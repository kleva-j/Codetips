"use client";

import React, { FC } from "react";
import Link from "next/link";

import { Card, CardHeader, CardContent, CardFooter, Button, Text } from "ui";

import { ProjectType } from "@/types";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectCardProps = ProjectType & {
  onClick?: () => void;
};

export const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { title, url, tagline, github_url } = props;

  return (
    <Card className="flex flex-col bg-light_bg cursor-pointer">
      <CardHeader className={cn("pb-5 font-semibold")}>{title}</CardHeader>

      <CardContent className="mb-auto">
        <Text variant="span" className="text-[14px] m-0 clamp clamp-3">{tagline}</Text>
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
