import * as z from "zod";

const loginSchema = z.object({
  username: z.string(),
  token: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

const meSchema = z.object({
  username: z.string(),
});

export type MeSchema = z.infer<typeof meSchema>;

const QuoteSchema = z.object({
  _id: z.string(),
  content: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  authorSlug: z.string(),
  length: z.number(),
  dateAdded: z.string(),
  dateModified: z.string(),
});

export type QuoteSchema = z.infer<typeof QuoteSchema>;

export const authSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type AuthFormValue = z.infer<typeof authSchema>;
