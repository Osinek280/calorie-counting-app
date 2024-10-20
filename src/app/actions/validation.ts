import { registerSchema, userDetailsSchema } from "@/config/ZodSchema"
import { z } from "zod"

export type UserErrors = Partial<Record<keyof z.infer<typeof registerSchema>, string>>;
export type UserDetailsErrors = Partial<Record<keyof z.infer<typeof userDetailsSchema>, string>>;

export async function userValidation(formData: FormData) {
  const recalldDta = {
    name: formData.get("name") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const result = registerSchema.safeParse(recalldDta)

  if(!result.success) {
    return result.error.flatten().fieldErrors as UserErrors
  }
};

export async function userDetailsValidation(formData: FormData) {
  const recalldDta = {
    gender: formData.get("gender") as string,
    dateOfBirth: formData.get("dateOfBirth") as string,
    weight: formData.get("weight") as string,
    height: formData.get("height") as string,
  }
  const result = userDetailsSchema.safeParse(recalldDta)

  if(!result.success) {
    return result.error.flatten().fieldErrors as UserDetailsErrors
  }
};