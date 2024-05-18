import { useForm, Controller } from "react-hook-form";
import { Page } from "@/types/Page";
import { CGVLayout } from "@/components/CGVLayout";
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import { useRouter } from 'next/router';
import { RegisterFormSchema, RegisterFormType } from "@/schemas/RegisterFormSchema";
import { RegisterFormData } from "@/types/RegisterFormData";
import { cinemaData } from "@/data/cinemaData"; 

const RegisterPage: Page = () => {
    const { handleSubmit, control, formState: { errors }, watch } = useForm<RegisterFormType>({
        resolver: zodResolver(RegisterFormSchema),
    });

    const router = useRouter();
    const selectedCity = watch("city"); 

    const onFormSubmit = (data: RegisterFormData) => {
        alert(`Username: ${data.username}\nEmail: ${data.email}\nPassword: ${data.password}`);
    };

    const cities = Object.keys(cinemaData); 

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <main className="flex flex-1 flex-col items-center justify-center w-full p-4">
                <div className="w-full max-w-4xl bg-white p-8 rounded shadow-md">
                    <div className="flex justify-between mb-4">
                        <Link href="/user/login" className={`text-lg ${router.pathname === "/login" ? "text-red-600" : "text-gray-700"}`}>
                            Login
                        </Link>
                        <Link href="/user/register" className={`text-lg ${router.pathname === "/register" ? "text-red-600" : "text-gray-700"}`}>
                            Sign Up
                        </Link>
                    </div>
                    <h2 className="text-2xl font-bold text-red-600">Create New Account</h2>
                    <p className="text-gray-700 text-sm mb-4">Please provide accurate information so we may identify you at the Box Office.</p>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-4 flex flex-col">
                                <label htmlFor="city" className="block text-gray-700">Preferred Cinema</label>
                                <div className="flex">
                                    <Controller name="city" control={control} render={({ field }) => (
                                        <select {...field} className="w-1/2 p-2 border border-gray-300 rounded mr-2">
                                            {cities.map(city => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    )} />
                                    <Controller name="cinema" control={control} render={({ field }) => (
                                        <select {...field} className="w-1/2 p-2 border border-gray-300 rounded">
                                            {selectedCity && cinemaData[selectedCity].map(cinema => (
                                                <option key={cinema} value={cinema}>{cinema}</option>
                                            ))}
                                        </select>
                                    )} />
                                </div>
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block text-gray-700">Full Name</label>
                                <Controller name="fullname" control={control} render={({ field }) => <input id="fullname" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-gray-700">Username</label>
                                <Controller name="username" control={control} render={({ field }) => <input id="username" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="gender" className="block text-gray-700">Gender</label>
                                <Controller name="gender" control={control} render={({ field }) => (
                                    <select {...field} className="w-full p-2 border border-gray-300 rounded">
                                        <option value="none">None</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                    </select>
                                )} />
                                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="birthday" className="block text-gray-700">Birthdate</label>
                                <Controller name="birthday" control={control} render={({ field }) => <input id="birthday" type="date" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                                <Controller name="phone" control={control} render={({ field }) => <input id="phone" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700">City</label>
                                <Controller name="city" control={control} render={({ field }) => (
                                    <select {...field} className="w-full p-2 border border-gray-300 rounded">
                                        {cities.map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                )} />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                <Controller name="email" control={control} render={({ field }) => <input id="email" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">New Password</label>
                                <Controller name="password" control={control} render={({ field }) => <input id="password" type="password" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="pin" className="block text-gray-700">New Pin (6 digits number)</label>
                                <Controller name="pin" control={control} render={({ field }) => <input id="pin" type="number" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                                {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cgvCard" className="block text-gray-700">CGV Card Number (not required)</label>
                                <Controller name="cgvCard" control={control} render={({ field }) => <input id="cgvCard" {...field} className="w-full p-2 border border-gray-300 rounded" />} />
                            </div>
                        </div>
                    </form>
                    <p className="text-gray-700 text-sm mb-2">By clicking the create account button, you agree to CGV cinema’s terms of use and privacy policy and approve to receive any information.</p>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-red-600 text-white p-2 rounded">Create Account</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

RegisterPage.layout = CGVLayout;
export default RegisterPage;
