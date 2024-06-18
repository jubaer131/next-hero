import React from 'react';
import Meals from '../component/Meals';


export const metadata = {
    title: "meals ",
    description: " chooose your meal",
};

const page = () => {

    return (
        <div className='p-12 '>
            <h1 className='text-3xl font-semibold'>choose your meals</h1>
            <p>choose meals of your choose by searching .......</p>
            <Meals></Meals>
        </div>
    );
};

export default page;