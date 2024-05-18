import { useEffect, useState } from 'react'; // Import useEffect hook
import { WithAdminLayout } from '@/components/AdminLayout';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Page } from '@/types/Page';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CreateGenrePage: Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const genreSchema = z.object({
        genreName: z.string().min(1, "Genre name is required"),
    });

    const form = useForm<z.infer<typeof genreSchema>>({
        resolver: zodResolver(genreSchema),
        defaultValues: {
            genreName: "",
        }
    });

    useEffect(() => {
        if (formSubmitted && isModalOpen) {
            form.reset();
            setFormSubmitted(false);
        }
    }, [formSubmitted, isModalOpen, form]);

    const onSubmit = async (values: z.infer<typeof genreSchema>) => {
        const data = { ...values, ...admin };

        try {
            const response = await fetch('https://localhost:7001/api/genre', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response:', errorData);
                throw new Error('Network response was not ok');
            }

            setIsModalOpen(true);
            setFormSubmitted(true);

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error occurred during submission:', error);
        }
    }

    const admin = {
        createdBy: "Sam Malik",
        updatedBy: "Sam Malik"
    }

    const Modal = () => (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Success!</h2>
                <p className="text-gray-700">Your genre has been created successfully.</p>
                <button onClick={() => setIsModalOpen(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
                    Close
                </button>
            </div>
        </div>
    );

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg flex flex-col w-[600px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Genre</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="genreName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Genre Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Genre Name..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.genreName?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                            Create Genre
                        </Button>
                    </form>
                </Form>
            </div>
            {isModalOpen && <Modal />}
        </div>
    )
}

CreateGenrePage.layout = WithAdminLayout;
export default CreateGenrePage;
