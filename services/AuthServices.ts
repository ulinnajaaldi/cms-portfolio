import axios from "axios";
import { axiosInstance } from "@/lib/axios";
import type { BaseResponseType } from "@/domain/Response";
import type { LoginSchema, QuoteSchema } from "@/domain/Auth";

const login = async (
  username: string,
  password: string,
): Promise<BaseResponseType<LoginSchema>> => {
  const res = await axiosInstance.post("/auth/login", {
    username,
    password,
  });
  return res.data;
};

const randomQuotes = async (): Promise<QuoteSchema> => {
  const res = await axios.get("https://api.quotable.io/random");
  return res.data;
};

export const AuthServices = {
  login,
  randomQuotes,
};
