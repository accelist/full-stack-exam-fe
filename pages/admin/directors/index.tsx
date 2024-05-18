import { WithAdminLayout } from '@/components/AdminLayout'
import { Button } from '@/components/ui/button'
import { Page } from '@/types/Page'
import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'

const DirectorPage: Page = () => {
    const router = useRouter();

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full gap-6 relative'>
            <nav className="w-full px-8 py-4 bg-gray-100 border-b border-gray-300 absolute top-0 left-0">
                <ol className="flex space-x-4">
                    <li>
                        <Link href="/admin" className="text-blue-600 hover:text-blue-800">
                            Admin
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/admin/directors" className="text-blue-600 hover:text-blue-800">
                            Director
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className='flex justify-center items-center gap-4 mt-4'>
                <Button
                    onClick={() => router.push('/admin/directors/create')}
                    className='px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300 ease-in-out'
                >
                    Create
                </Button>
                <Button
                    onClick={() => router.push('/admin/directors/update')}
                    className='px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300 ease-in-out'
                >
                    Update
                </Button>
                <Button
                    onClick={() => router.push('/admin/directors/delete')}
                    className='px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-300 ease-in-out'
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

DirectorPage.layout = WithAdminLayout;
export default DirectorPage;
