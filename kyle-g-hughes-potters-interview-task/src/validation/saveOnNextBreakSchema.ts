import { z } from "zod";

export const saveOnNextBreakSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Name can only contain letters and spaces"),

  email: z
    .string()
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  mobile: z
    .string()
    .trim()
    .refine((value) => value === "" || /^[0-9+\s()-]{7,}$/.test(value), {
      message: "Please enter a valid mobile number",
    }),
});

export type SaveOnNextBreakForm = z.infer<typeof saveOnNextBreakSchema>;
