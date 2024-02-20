import { LoginSchema, QuoteSchema } from "@/domain/Auth";
import { BaseResponseType } from "@/domain/Response";
import { AuthServices } from "@/services/AuthServices";

const login = async (
  username: string,
  password: string,
): Promise<BaseResponseType<LoginSchema>> => {
  const res = await AuthServices.login(username, password);
  return res;
};

const randomQuotes = async (): Promise<QuoteSchema> => {
  const res = await AuthServices.randomQuotes();
  return res;
};

export const AuthUseCases = {
  login,
  randomQuotes,
};
