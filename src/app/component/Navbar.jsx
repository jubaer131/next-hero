"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Login',
            path: '/login'
        },
        {
            title: 'Blog',
            path: '/Blog'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Post',
            path: '/posts'
        },
        {
            title: 'Meals',
            path: '/meals'
        },

    ];

    const pathName = usePathname();
    const router = useRouter()

    const handleregistation = () => {
        router.push('/registation')
    }

    if (pathName.includes('dashboard'))
        return <div className='bg-pink-500 text-3xl p-5 text-center'>this is new navbar for dashboard</div>

    return (

        <nav className="flex justify-between items-center bg-red-500 px-5">
            <h1 className='text-3xl p-5 font-semibold'>Next Hero</h1>
            <ul className="flex gap-5">
                {links.map(link => (

                    <Link className={pathName === link.path ? 'text-green-200' : ''} href={link.path} key={link.path}>
                        {link.title}
                    </Link>

                ))}
            </ul>
            <button onClick={handleregistation}>Registration</button>
        </nav>

    );
};

export default Navbar;
