import type { IconType } from "react-icons/lib";

import { MeSchema } from "@/domain/Auth";
import { BaseResponseType } from "@/domain/Response";

export interface AuthState {
  data: BaseResponseType<MeSchema> | null;
  getUser: () => void;
  logoutHandler: () => void;
}

export interface SidebarItems {
  title: string;
  icon: IconType;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
}

export type BreadCrumbType = {
  title: string;
  link: string;
};

export type BreadCrumbPropsType = {
  items: BreadCrumbType[];
};
