import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ROUTES_PATH } from "@/constants/routes";
import type { BreadCrumbPropsType, BreadCrumbType } from "@/types";

export default function BreadCrumb({ items }: BreadCrumbPropsType) {
  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      <Link
        href={ROUTES_PATH.dashboard}
        className="overflow-hidden text-ellipsis whitespace-nowrap"
      >
        Dashboard
      </Link>
      {items?.map((item: BreadCrumbType, index: number) => (
        <React.Fragment key={item.title}>
          <ChevronRightIcon className="h-4 w-4" />
          <Link
            href={item.link}
            className={cn(
              "font-medium",
              index === items.length - 1
                ? "pointer-events-none text-foreground"
                : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
