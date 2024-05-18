import { WithDefaultLayout } from '@/components/DefautLayout'
import { Button } from '@/components/ui/button'
import { Page } from '@/types/Page'
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { loginSchema } from '@/schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link'
import { registerSchema } from '@/schemas/registerSchema'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'

const RegisterPage: Page = () => {
    const [date, setDate] = React.useState<Date>()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        console.log(values);
    }

    return (
        <div className='mt-10 w-[980px] min-h-[450px] mx-auto'>
            <div className='relative flex flex-col bg-[#f0f0e1] p-8 rounded-tl-none rounded-md'>
                <div className='absolute left-0 top-0 -translate-y-[100%] flex gap-2'>
                    <div className='bg-red-600 p-1 px-3 rounded-t-md border-t'>
                        <Link href='/user/login' className='text-white font-bold text-md'>Login</Link>
                    </div>
                    <div className='bg-primary p-1 px-3 rounded-t-md border-t'>
                        <Link href='/user/register' className='text-red-600 font-bold text-md'>Sign Up</Link>
                    </div>
                </div>
                <h1 className='font-bold text-xl text-red-600'>Create New Account</h1>
                <p className='text-sm'>
                    Please provide accurate information so we may identify you at the Box Office.
                </p>
                <div className='w-full mt-10'>
                    <Form {...form}>
                        <form className='space-y-3 w-full' onSubmit={form.handleSubmit(onSubmit)} >
                            <div className='w-full flex gap-4'>
                                <div className='w-[45%]'>
                                    <FormField
                                        control={form.control}
                                        name='preferredCinema'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className=' text-gray-600'>Preferred Cinema</FormLabel>
                                                <Select onValueChange={field.onChange}>
                                                    <FormControl className='bg-[#f0f0e1] border-stone-300'>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select a preferred cinema" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className='bg-[#f0f0e1] border-stone-300'>
                                                        <SelectItem value="jakarta">Jakarta</SelectItem>
                                                        <SelectItem value="tangerang">Tangerang</SelectItem>
                                                        <SelectItem value="bandung">Bandung</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input className='bg-[#f0f0e1] border-stone-300'  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input className='bg-[#f0f0e1] border-stone-300'  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='gender'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className=' text-gray-600'>Gender</FormLabel>
                                                <Select onValueChange={field.onChange}>
                                                    <FormControl className='bg-[#f0f0e1] border-stone-300'>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Gender" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className='bg-[#f0f0e1] border-stone-300'>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                        <SelectItem value="none">None</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='birthdate'
                                        render={({ field }) => (
                                            <FormItem className='flex flex-col'>
                                                <FormLabel>Birthdate</FormLabel>
                                                <FormControl>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full justify-start text-left font-normal",
                                                                    !date && "text-muted-foreground"
                                                                )}
                                                            >
                                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                            </Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-auto p-0">
                                                            <Calendar
                                                                mode="single"
                                                                selected={date}
                                                                onSelect={setDate}
                                                                initialFocus
                                                            />
                                                        </PopoverContent>
                                                    </Popover>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name='city'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className=' text-gray-600'>City</FormLabel>
                                                <Select onValueChange={field.onChange}>
                                                    <FormControl className='bg-[#f0f0e1] border-stone-300'>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select City" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent className='bg-[#f0f0e1] border-stone-300'>
                                                        <SelectItem value="tangerang">Tangerang</SelectItem>
                                                        <SelectItem value="jakarta">Jakarta</SelectItem>
                                                        <SelectItem value="surabaya">surabaya</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                <div className='w-[45%]'>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input className='bg-[#f0f0e1] border-stone-300' placeholder="Email..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>New Password</FormLabel>
                                                <FormControl>
                                                    <Input className='bg-[#f0f0e1] border-stone-300' type='password' pattern="[a-zA-Z0-9\s]+" placeholder="8 Characters alphanumeric" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="newPin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>New Pin</FormLabel>
                                                <FormControl>
                                                    <Input className='bg-[#f0f0e1] border-stone-300' type='number' placeholder="6 Digits number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="cgvCardNo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>CGV Card</FormLabel>
                                                <FormControl>
                                                    <Input className='bg-[#f0f0e1]' type='number' placeholder="Your CGV Card No. (No space or dash)" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>
                            <hr />
                            <p>By clicking the create account button, you agree to CGV cinema’s <span className='text-red-500'>terms of use and privacy policy</span> and approve to receive any information</p>
                            <Button className='bg-red-600 w-full mt-2 text-white' type="submit">Register</Button>
                        </form>
                    </Form>
                    <div className='w-[45%]'>
                    </div>
                </div>
            </div>
        </div>
    )
}

RegisterPage.layout = WithDefaultLayout;
export default RegisterPage