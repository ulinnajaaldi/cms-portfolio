"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/hook/useAuth";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

export function UserNav() {
  const [data, getUser, logoutHandler] = useAuthStore(
    useShallow((state) => [state.data, state.getUser, state.logoutHandler]),
  );

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 border">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${data?.data?.username}`}
              alt={data?.data?.username}
            />
            <AvatarFallback>{data?.data?.username}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {data?.data?.username}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutHandler}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
