import { WithDefaultLayout } from "@/components/DefautLayout";
import { Button } from "@/components/ui/button";
import { Page } from "@/types/Page";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage: Page = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
  };

  const router = useRouter();

  return (
    <div className="mt-10 w-[980px] min-h-[450px] mx-auto">
      <div className="relative flex flex-col justify-center items-center bg-[#f0f0e1] p-8 rounded-tl-none rounded-md">
        <div className="absolute left-0 top-0 -translate-y-[100%] flex gap-2">
          <div className="bg-[#f0f0e1] p-1 px-3 rounded-t-md border-t">
            <Link href="/user/login" className="text-red-600 font-bold text-md">
              Login
            </Link>
          </div>
          <div className="bg-red-600 p-1 px-3 rounded-t-md border-t">
            <Link
              href="/user/register"
              className="text-white font-bold text-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <h1 className="font-bold">Login with your web profile</h1>
        <div className="w-[45%]">
          <Form {...form}>
            <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#f0f0e1]"
                        placeholder="Email..."
                        {...field}
                      />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#f0f0e1]"
                        type="password"
                        placeholder="password..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-red-600 w-full mt-2 text-white"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>
          <Button onClick={() => router.push('/admin/dashboard')}>Go To Admin Page</Button>
        </div>
      </div>
    </div>
  );
};

LoginPage.layout = WithDefaultLayout;
export default LoginPage;
