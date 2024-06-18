import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <Link href={'/about/history'}> History</Link>
            <Link className='ml-3' href={'/about/items'}>items</Link>
        </div>
    );
};

export default page;