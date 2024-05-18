import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary w-full">
            <div className="border-y border-black py-2">
                <ul className="flex justify-center gap-4">
                    {['4DX', 'SCREENX', 'SPHEREX', 'STARIUM', 'DOLBY ATMOS', 'VELVET', 'GOLD CLASS', 'SATIN SUITE', 'SWEET BOX', 'PRIVATE BOX'].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="container mx-auto flex flex-col gap-10 py-5">
                <div>
                    <ul className="flex divide-x-2 divide-red-600 text-red-600">
                        {['About Us', 'Legal Term', 'Careers', 'Feedback', 'Contact Us', 'Investor Relation'].map((text, index) => (
                            <li key={index} className="px-2">
                                <Link href={`/content/${text.toLowerCase().replace(' ', '-')}`}>{text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-4 items-center justify-between w-full mx-auto">
                    <div className="flex items-center gap-4">
                        <img className="w-16" src="/images/cgv-logo.png" alt="CGV Logo" />
                        <p className="text-sm">COPYRIGHT 2024 CJ CGV ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="flex items-center">
                        <Link href='https://play.google.com/store/apps/details?id=com.cgv.cinema.vn&hl=id&gl=US'>
                            <img className='w-32' src="https://cdn.cgv.id/assets/global/img/en_badge_web_generic.png" alt="" />
                        </Link>
                        <Link href='https://apps.apple.com/id/app/cgv-cinemas-indonesia/id781405923'>
                            <img className='w-26' src="https://cdn.cgv.id/assets/global/img/itunes-badge.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <img className="w-full" src="/images/brick-pattern.jpg" alt="Footer Image Pattern" />
        </footer>
    );
};

export default Footer;
