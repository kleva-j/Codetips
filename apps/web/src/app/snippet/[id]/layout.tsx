"use client";

import Link from "next/link";

import { FC, PropsWithChildren } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "ui";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="mt-10 space-y-10">
      <Button variant="link" className="pl-0 hover:underline-offset-4" asChild>
        <Link href="/snippet">
          <ChevronLeft className="mr-2 h-4 w-4" /> Go back
        </Link>
      </Button>
      {children}
    </section>
  );
};

export default Layout;
