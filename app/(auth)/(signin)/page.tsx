import React from "react";
import type { Metadata } from "next";
import AuthenticationFeature from "@/features/Auth";

export const metadata: Metadata = {
  title: "Authentication | Ulinnaja Aldi CMS",
  description: "Authentication page for Ulinnaja Aldi CMS",
};

const AuthenticationPage: React.FC = () => {
  return <AuthenticationFeature />;
};

export default AuthenticationPage;
