import { z } from "zod";

export const RegisterFormSchema = z.object({
    city: z.string().nonempty({ message: 'Preferred Cinema city is required.' }),
    cinema: z.string().nonempty({ message: 'Preferred Cinema is required.' }),
    fullname: z.string().nonempty({ message: 'Full Name is required.' }),
    username: z.string().nonempty({ message: 'Username is required.' }),
    gender: z.string().nonempty({ message: 'Gender is required.' }),
    birthday: z.string().nonempty({ message: 'Birthday is required.' }),
    phone: z.string().nonempty({ message: 'Phone Number is required.' }),
    email: z.string().email({ message: 'Email Address is invalid.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
    pin: z.string().length(6, { message: 'Pin must be exactly 6 digits.' }),
    cgvCard: z.string().optional()
});

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;
