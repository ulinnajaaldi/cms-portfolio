"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "@tanstack/react-query";

import type { AuthFormValue } from "@/domain/Auth";
import { COOKIE_KEYS } from "@/constants/config";
import { ROUTES_PATH } from "@/constants/routes";
import { AuthUseCases } from "@/useCases/AuthUseCases";
import { toast } from "@/components/ui/use-toast";

export const useAuthLoginMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: AuthFormValue) => {
      return AuthUseCases.login(data.username, data.password);
    },
    onSuccess: (data) => {
      router.push(ROUTES_PATH.dashboard);
      Cookies.set(COOKIE_KEYS.token, data?.data?.token as string);
      toast({
        description: data?.message,
      });
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        description: error?.response?.data?.message,
      });
    },
  });
};

export const useRandomQuotesQuery = () => {
  return useQuery({
    queryKey: ["randomQuotes"],
    queryFn: AuthUseCases.randomQuotes,
  });
};
