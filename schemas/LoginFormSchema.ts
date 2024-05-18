import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().nonempty({ message: 'Email is required.' }).email({ message: 'Email is invalid.' }),
    password: z.string().nonempty({ message: 'Password is required.' }).min(8, { message: 'Password must be at least 8 characters.' })
});

export type LoginFormType = z.infer<typeof LoginFormSchema>;
