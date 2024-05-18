import { useForm, Controller } from "react-hook-form";
import {CGVLayout} from "@/components/CGVLayout";
import { Page } from "@/types/Page";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import { useRouter } from 'next/router';
import { LoginFormSchema, LoginFormType } from "@/schemas/LoginFormSchema";
import { LoginFormData } from "@/types/LoginFormData";


const LoginPage: Page = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(LoginFormSchema),
    });

    const router = useRouter();

    const onFormSubmit = (data: LoginFormData) => {
        alert(`Email: ${data.email}\nPassword: ${data.password}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <main className="flex flex-1 flex-col items-center justify-center w-full p-4">
                <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
                    <div className="flex justify-between mb-4">
                        <Link href="/user/login" className={`text-lg ${router.pathname === "/login" ? "text-red-600" : "text-gray-700"}`}>
                            Login
                        </Link>
                        <Link href="/user/register" className={`text-lg ${router.pathname === "/register" ? "text-red-600" : "text-gray-700"}`}>
                            Sign Up
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <h2 className="text-2xl font-bold mb-6">Login with your web profile</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <Controller name="email" control={control} render={({ field }) => <input id="email" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <Controller name="password" control={control} render={({ field }) => <input id="password" type="password" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="w-full bg-red-600 text-white p-2 rounded">Login</button>
                        <Link href="/forgotPassword" className="text-slate-500 mt-4 block text-center">Forgot Password?</Link>
                    </form>
                </div>
            </main>
        </div>
    );
};

LoginPage.layout = CGVLayout;
export default LoginPage;
