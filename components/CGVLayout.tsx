import React from "react";
import Link from "next/link";

const MyLayout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {

    const socialMediaIcons: string[] = [
        "https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3EAH4J8nweqt0g4mzEvWiZZyvSwZvGZYuKcYOYL5_A&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Threads_%28app%29_logo.svg/2048px-Threads_%28app%29_logo.svg.png",
        "https://static.vecteezy.com/system/resources/previews/006/057/996/original/tiktok-logo-on-transparent-background-free-vector.jpg",
        "https://assets-global.website-files.com/5d66bdc65e51a0d114d15891/64cebc6c19c2fe31de94c78e_X-vector-logo-download.png",
        "https://static.vecteezy.com/system/resources/previews/018/930/709/original/line-logo-line-icon-transparent-free-png.png",
        "https://img.freepik.com/premium-photo/round-youtube-logo-isolated-white-background_469489-1044.jpg",
    ];

    const socialMediaHrefs: string[] = [
        "https://www.facebook.com/CGV.ID",
        "https://www.instagram.com/cgv.id/",
        "https://www.threads.net/@cgv.id",
        "https://www.tiktok.com/@cgv.id",
        "https://x.com/CGV_ID",
        "https://linevoom.line.me/user/_dW6OoBCQpPPdkV6Qx1el0GoqVZJ9jG0QbR2W7iY",
        "https://www.youtube.com/channel/UC2vfMMUMoAZd-RBGwA0-9Nw",
    ];

    return (
        
        <div className="bg-yellow-50 min-h-screen">
            <header className="bg-orange-800 text-white p-4 relative">
                <div className="flex justify-between items-center relative z-10">
                    <div className="header-social-icons">
                        {/* Render social media icons
                        {socialMediaIcons.map((icon, index) => (
                            <Link href={socialMediaHrefs[index]} key={index}>
                                        <img
                                            src={icon}
                                            alt={`Social Media Icon ${index + 1}`}
                                            className="w-6 h-6 mr-2"
                                        />
                                </Link>
                        ))} */}
                    </div>
                    <div className="header-links space-x-4 mb-2">
                        <Link href="/news">
                            News
                        </Link>
                        <Link href="/user/login">
                            Login
                        </Link>
                        <Link href="/user/register">
                            Sign Up
                        </Link>
                    </div>
                </div>
                <div className="text-center relative z-10 mb-2">
                    <h1 className="text-5xl font-bold">
                        <Link href="/">
                            CULTUREPLEX
                        </Link>
                    </h1>
                </div>
                <nav className="text-center relative z-10">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <Link href="/movies/now_playing">
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link href="/cinema">
                                Cinemas
                            </Link>
                        </li>
                        <li>
                            <Link href="/promotion">
                                Promotion
                            </Link>
                        </li>
                        <li>
                            <Link href="/membership">
                                Membership
                            </Link>
                        </li>
                        <li>
                            <Link href="/snack">
                                Concession
                            </Link>
                        </li>
                        <li>
                            <Link href="/special">
                                Special
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <main>
                {children}
            </main>

            <footer className="bg-orange-800 p-4 mt-8 text-white">
                <div className="footer-images">
                </div>
                <div className="footer-links flex justify-center space-x-4">
                    <Link href="/content/about_us">
                        About Us
                    </Link>
                    <Link href="/content/legal_term">
                        Legal Terms
                    </Link>
                    <Link href="/content/careers">
                        Careers
                    </Link>
                    <Link href="/content/feedback">
                        Feedback
                    </Link>
                    <Link href="/content/contact_us">
                        Contact Us
                    </Link>
                    <Link href="/content/investor_relation">
                        Investor Relations
                    </Link>
                </div>
                <div className="w-full text-white p-4 mt-8">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 CGV. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export const CGVLayout = (page: React.ReactElement) => <MyLayout>{page}</MyLayout>;
