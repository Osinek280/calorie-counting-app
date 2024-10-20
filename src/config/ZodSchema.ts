import {z} from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .regex(/^[a-zA-Z\s-]*$/, "Name can only contain letters, spaces, and dashes"),
  lastName: z
    .string()
    .min(3, "Last Name must be at least 3 characters long")
    .regex(/^[a-zA-Z\s-]*$/, "Last Name can only contain letters, spaces, and dashes"),
  
  email: z
    .string()
    .email("Invalid email address format"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"),
});

export const userDetailsSchema = z.object({
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Gender is required',
  }),
  dateOfBirth: z.string().refine(
    (val) => !isNaN(Date.parse(val)),
    {
      message: 'Invalid date format',
    }
  ),
  weight: z
    .string()
    .nonempty({ message: 'Weight is required' })
    .refine((val) => {
      const weight = parseFloat(val);
      return !isNaN(weight) && weight > 0;
    }, {
      message: 'Weight must be a positive number',
    }),
  height: z
    .string()
    .nonempty({ message: 'Height is required' })
    .refine((val) => {
      const height = parseFloat(val);
      return !isNaN(height) && height > 0;
    }, {
      message: 'Height must be a positive number',
    }),
});