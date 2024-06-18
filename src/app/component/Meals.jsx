'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Meals = () => {
    const [search, setSearch] = useState('apple');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState('');

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();

            if (data.meals) {
                setMeals(data.meals);
                setError('');
            }
        } catch (error) {
            setError('No data found');
        }
    };

    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    useEffect(() => {
        loadData();
    }, [search]);

    return (
        <div className="mt-8">
            <input
                type="text"
                onChange={handler}
                className="input input-bordered join-item bg-slate-100 text-black p-4"
                placeholder="Search"
            />
            <button
                onClick={loadData}
                className="btn join-item rounded-r-full bg-sky-600 p-4"
            >
                Search
            </button>
            <div className="mt-12 grid grid-cols-3 gap-6">
                {meals?.length > 0 && !error && meals.map((meal) => (
                    <div className='p-5 shadow-lg' key={meal.idMeal}>
                        <Image src={meal.strMealThumb}
                            alt={meal.strMeal}
                            width={500}
                            height={500}></Image>

                        <h3>{meal.strMeal}</h3>
                        <p>{meal.strInstructions}</p>
                    </div>
                ))}
                {error && <h1>No data found</h1>}
            </div>
        </div>
    );
};

export default Meals;
