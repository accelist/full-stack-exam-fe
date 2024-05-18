import { WithAdminLayout } from '@/components/AdminLayout'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Page } from '@/types/Page'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const CreateRegionPage: Page = () => {
    const regionSchema = z.object({
        regionName: z.string().min(1, "Region name is required"),
    });

    const form = useForm<z.infer<typeof regionSchema>>({
        resolver: zodResolver(regionSchema),
        defaultValues: {
            regionName: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof regionSchema>) => {
        const data = { ...values, ...admin };

        try {
            const response = await fetch('https://localhost:7001/api/region', {
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

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg flex flex-col w-[600px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Region</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="regionName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Region Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Region Name..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.regionName?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                            Create Region
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

CreateRegionPage.layout = WithAdminLayout;
export default CreateRegionPage;
