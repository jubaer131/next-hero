import Link from 'next/link';
import React from 'react';
import { Oswald } from "next/font/google";


const oswald = Oswald({ weight: ["200", "300", "400", "500", "600", "700"], subsets: ["latin"] });
const getpost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
    return data
}

const page = async () => {

    const getdata = await getpost()
    console.log(getdata)
    return (
        <div className={`${oswald}.className} shadow-xl`}>
            <h1 className='text-center text-3xl text-red-500 my-12'>All post </h1>
            <div className='grid grid-cols-5 gap-8'>
                {
                    getdata?.slice(0, 50).map(post => <div className="card  bg-base-100 shadow-xl" key={post?.title}>
                        <div className="card-body p-7 shadow-lg">
                            <h1>{post.id}</h1>

                            <h2 className="">{post.title}</h2>
                            <p>{post.body}</p>
                            <button className='btn bg-sky-500 p-3 rounded-md mt-7'><Link href={`/posts/${post.id}`}>see details</Link></button>
                        </div>
                    </div>)

                }
            </div>

        </div>
    );
};

export default page;