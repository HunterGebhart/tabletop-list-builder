import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const imageStyle = {
    margin: "10px 0px 30px 0px" 
}

export default function SideNav()
{
    return (
    <nav className="w-30 bg-gray-100 h-screen fixed">
        <ul className="flex flex-col p-4">
            <li className="bg-red-400">
                <Link href="/warhammer_40k" title="Warhammer 40,000">
                    <Image src="/Warhammer-Logo.png" alt="Warhammer 40,000 Logo" width={500} height={500} style={imageStyle}/>
                </Link>
            </li>
            <li className="bg-blue-400">
                <Link href="/warhammer_aos" title="Warhammer Age of Sigmar">
                    <Image src="/age-of-sigmar-logo.png" alt="Warhammer Age of Sigmar Logo" width={500} height={500} style={imageStyle}/>
                </Link>
            </li>
        </ul>
    </nav>
  );
}