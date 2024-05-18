import { useState } from 'react';
import { WithAdminLayout } from '@/components/AdminLayout';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Page } from '@/types/Page';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const CreateDirectorPage: Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [, setFormSubmitted] = useState(false);

    const directorSchema = z.object({
        directorName: z.string().min(1, { message: "Name is required" }).max(32, { message: "Name must be less than 32 characters" }),
    });

    const form = useForm<z.infer<typeof directorSchema>>({
        resolver: zodResolver(directorSchema),
        defaultValues: {
            directorName: "",
        },
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

            setIsModalOpen(true);
            setFormSubmitted(true);

            const result = await response.json();
            console.log('Success:', result);

            // Reset the form after successful submission
            form.reset();
        } catch (error) {
            console.error('Error occurred during submission:', error);
        }
    };

    const admin = {
        createdBy: "Hisyam Malik",
        updatedBy: "Sam Malik"
    }

    const Modal = () => (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Success!</h2>
                <p className="text-gray-700">Director has been created successfully.</p>
                <button onClick={() => setIsModalOpen(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                    Close
                </button>
            </div>
        </div>
    );

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
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.directorName?.message}</FormMessage>
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
            {isModalOpen && <Modal />}
        </div>
    );
};

CreateDirectorPage.layout = WithAdminLayout;
export default CreateDirectorPage;

