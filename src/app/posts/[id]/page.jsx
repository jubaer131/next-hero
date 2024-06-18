import React from 'react';




const getpost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

const page = async ({ params }) => {

    const { title, body } = await getpost(params.id)


    return (

        <div className='h-screen'>
            <h1>{title}</h1>
            <h1>{body}</h1>
        </div>
    );
};

export default page;