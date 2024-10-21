import { registerSchema, userDetailsSchema } from "@/config/ZodSchema"
import { z } from "zod"

export type UserErrors = Partial<Record<keyof z.infer<typeof registerSchema>, string>>;
export type UserDetailsErrors = Partial<Record<keyof z.infer<typeof userDetailsSchema>, string>>;

export async function userValidation(formData: FormData) {
  const recalldDta = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const result = registerSchema.safeParse(recalldDta)

  if(!result.success) {
    return result.error.flatten().fieldErrors as UserErrors
  }
};

export async function userDetailsValidation(formData: FormData) {
  const recalldDta = {
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),
    weight: formData.get("weight"),
    height: formData.get("height"),
  }
  const result = userDetailsSchema.safeParse(recalldDta)

  if(!result.success) {
    return result.error.flatten().fieldErrors as UserDetailsErrors
  }
};