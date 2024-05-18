import React from 'react';
import Link from 'next/link';

const SocSignBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">news</Link></li>
                <li><Link href="/login">login</Link></li>
                <li><Link href="/register">sign up</Link></li>
            </ul>
        </nav>
    );
};

export default SocSignBar;
