import * as z from "zod";

export const baseResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: dataSchema.nullable(),
    message: z.string().optional(),
  });

export type BaseResponseType<T = unknown> = z.infer<
  ReturnType<typeof baseResponseSchema<z.ZodType<T>>>
>;
