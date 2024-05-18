import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar: React.FC = () => {
    return (
        <nav style={{ display: 'flex', alignItems: 'center' }}>
            {/* Logo Section */}
            <div style={{ marginRight: '20px' }}>
                <Link href="/">
                    <Image src="/CGVLogo.png" alt="Logo" width={137} height={137} />
                </Link>
            </div>
            
            {/* Navigation Links */}
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginRight: '15px' }}><Link href="/moviespage">Movies</Link></li>
                <li style={{ marginRight: '15px' }}><Link href="/cinemas">Cinemas</Link></li>
                <li style={{ marginRight: '15px' }}><Link href="/promotions">Promotion</Link></li>
                <li style={{ marginRight: '15px' }}><Link href="/membershipOut">Membership</Link></li>
                <li style={{ marginRight: '15px' }}><Link href="/login">Concession</Link></li>
                <li style={{ marginRight: '15px' }}><Link href="/special">Special</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
