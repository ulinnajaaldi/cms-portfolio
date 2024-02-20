import { LuLayoutDashboard } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";

import type { SidebarItems } from "@/types";

export const ROUTES_PATH = {
  home: "/",
  dashboard: "/dashboard",
  techstack: "/dashboard/techstack",
};

export const SIDEBAR_ITEMS: SidebarItems[] = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
    href: ROUTES_PATH.dashboard,
  },
  {
    title: "Techstack",
    icon: GrTechnology,
    href: ROUTES_PATH.techstack,
  },
];
