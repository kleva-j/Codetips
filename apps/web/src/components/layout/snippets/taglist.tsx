import { Badge, CardHeader, Card, CardContent, CardTitle } from "ui";

import { popularTags } from "@/lib/constants";

export const Taglist = () => {
  return (
    <Card className="w-[250px] h-min sticky top-20">
      <CardHeader>
        <CardTitle>Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 -mx-2">
          {popularTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:border-rose-500"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
