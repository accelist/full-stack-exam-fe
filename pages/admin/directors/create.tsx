import { WithAdminLayout } from '@/components/AdminLayout';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Page } from '@/types/Page';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CreateDirectorPage: Page = () => {
    const directorSchema = z.object({
        directorName: z.string().min(1, { message: "Name is required" }).max(32, { message: "Name must be less than 32 characters" }),
    });


    const onSubmit = async (values: z.infer<typeof directorSchema>) => {
        const data = { ...values, ...admin };

        try {
            const response = await fetch('https://localhost:7001/api/director', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                // Handle non-2xx HTTP responses
                const errorData = await response.json();
                console.error('Error response:', errorData);
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error occurred during submission:', error);
        }
    };


    const form = useForm<z.infer<typeof directorSchema>>({
        resolver: zodResolver(directorSchema),
        defaultValues: {
            directorName: "",
        },
    });

    const admin = {
        createdBy: "Hisyam Malik",
        updatedBy: "Sam Malik"
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 w-full'>
            <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-xl'>
                <h1 className='text-3xl font-bold text-center mb-8 text-gray-700'>Create Director</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="directorName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Director Name..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1' />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

CreateDirectorPage.layout = WithAdminLayout;
export default CreateDirectorPage;
