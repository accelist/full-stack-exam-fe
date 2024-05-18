import { z } from "zod";

export const registerSchema = z.object({
    preferredCinema: z.string().nonempty("Please select your preferred cinema"),
    name: z.string().nonempty("Full name is required"),
    username: z.string().nonempty("Username is required"),
    gender: z.string().nonempty("Gender is required"),
    birthdate: z.string().nonempty("Birthdate is required"),
    phoneNumber: z.string().nonempty("Phone number is required"),
    city: z.string().nonempty("Please select your city"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    newPin: z.string().length(6, "PIN must be 6 digits"),
    cgvCardNo: z.string().optional(),
});
