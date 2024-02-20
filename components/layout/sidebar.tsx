"use client";

import React from "react";
import { cn } from "@/lib/utils";
import DashboardNav from "./dashboard-nav";
import { SIDEBAR_ITEMS } from "@/constants/routes";

const Sidebar = () => {
  return (
    <nav
      className={cn(`relative hidden h-screen w-72 border-r pt-16 lg:block`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Overview
            </h2>
            <DashboardNav items={SIDEBAR_ITEMS} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
