import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';

const AdminSidebar = () => {
    return (
        <div className='w-56 bg-slate-800 h-screen flex flex-col items-center py-6'>
            <div className='mb-6'>
                <img src='/images/cgv-logo.png' alt='Admin Panel Logo' className='w-32 h-auto' />
            </div>
            <Avatar className='mb-4'>
                <AvatarImage src="https://github.com/shadcn.png" className='w-24 h-24 rounded-full border-2 border-white' />
            </Avatar>
            <ul className='flex flex-col text-white font-medium text-lg gap-4 w-full px-4'>
                <li>
                    <Link className='block p-2 rounded hover:bg-slate-600 cursor-pointer' href='/admin/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className='block p-2 rounded hover:bg-slate-600 cursor-pointer' href='/admin/movies'>
                        Movies
                    </Link>
                </li>
                <li>
                    <Link className='block p-2 rounded hover:bg-slate-600 cursor-pointer' href='/admin/directors'>
                        Director
                    </Link>
                </li>
                <li>
                    <Link className='block p-2 rounded hover:bg-slate-600 cursor-pointer' href='/admin/starrings'>
                        Starring
                    </Link>
                </li>
                <li>
                    <Link className='block p-2 rounded hover:bg-slate-600 cursor-pointer' href='/admin/genres'>
                        Genre
                    </Link>
                </li>
                <li>
                    <Link className='block p-2 rounded hover:bg-slate-600 cursor-pointer' href='/admin/regions'>
                        Region
                    </Link>
                </li>
                <li className='mt-auto'>
                    <button
                        className='block w-full p-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded transition duration-300 ease-in-out'
                        onClick={() => alert('Logout')}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;
