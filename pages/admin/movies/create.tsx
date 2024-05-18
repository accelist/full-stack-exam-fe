import { WithAdminLayout } from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Page } from '@/types/Page';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod";

interface genreResponse {
    genreId: string,
    genreName: string,
}
interface directorResponse {
    directorId: string,
    directorName: string
}

const MoviesAdminPage: Page = () => {
    const [directors, setDirectors] = useState<directorResponse[] | null>(null);
    const [genres, setGenres] = useState<genreResponse[] | null>(null);

    useEffect(() => {
        async function fetchDirectorAndGenre() {
            const dataDirector = await fetch('https://localhost:7001/api/Director');
            const responseDirector = await dataDirector.json();
            const dataGenre = await fetch('https://localhost:7001/api/Genre');
            const responseGenre = await dataGenre.json();
            console.log(responseGenre.genres);
            setDirectors(responseDirector.directorDatas);
            setGenres(responseGenre.genres);
        }
        fetchDirectorAndGenre();
    }, []);

    const movieSchema = z.object({
        movieTitle: z.string().min(1),
        directorId: z.string().min(1),
        genreId: z.string().min(1),
        censorRating: z.string().min(1),
        language: z.string().min(1),
        subtitle: z.string().min(1),
        duration: z.coerce.number().positive().min(1),
        synopsis: z.string().min(1),
        posterUrl: z.string().min(1),
        trailerUrl: z.string().min(1),
        isShowing: z.boolean(),
    });

    const form = useForm<z.infer<typeof movieSchema>>({
        resolver: zodResolver(movieSchema),
    });

    const onSubmit = async (values: z.infer<typeof movieSchema>) => {
        if (form.formState.isValid) {
            console.log(values);
        } else {
            console.error("Form validation failed:", form.formState.errors);
        }

        const data = { ...values, ...admin };

        try {
            const response = await fetch('https://localhost:7001/api/movie', {
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
    };

    const admin = {
        createdBy: "Sam Malik",
        updatedBy: "Sam Malik"
    }

    return (
        <div className="flex justify-center items-center bg-gray-50 w-full overflow-y-scroll h-full">
            <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-lg w-[600px]">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Movie</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name='directorId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Director</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a director" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {directors && directors.map(d => (
                                                <SelectItem key={d.directorId} value={d.directorId}>{d.directorName}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='genreId'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Genre</FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Genre" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {genres && genres.map(g => (
                                                <SelectItem key={g.genreId} value={g.genreId}>{g.genreName}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="movieTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Movie Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Movie Title..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.movieTitle?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="censorRating"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Censor Rating</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Censor Rating..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.censorRating?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="language"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Language</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Language..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.language?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subtitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Subtitle</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Subtitle..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.subtitle?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Duration (minutes)</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Duration..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.duration?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="synopsis"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Synopsis</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Synopsis..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.synopsis?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="posterUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Poster URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Poster URL..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.posterUrl?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="trailerUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-lg text-gray-600'>Trailer URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Trailer URL..."
                                            {...field}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                                        />
                                    </FormControl>
                                    <FormMessage className='text-red-500 text-sm mt-1'>{form.formState.errors.trailerUrl?.message}</FormMessage>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isShowing"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-3">
                                    <FormControl>
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className="text-md cursor-pointer select-none">Is Showing?</FormLabel>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <div className="col-span-1 sm:col-span-2">
                            <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                                Create Movie
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}

MoviesAdminPage.layout = WithAdminLayout;
export default MoviesAdminPage;

