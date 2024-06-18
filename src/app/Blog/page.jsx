
import Link from 'next/link';
import React from 'react';

const page = () => {



    return (
        <div className='grid grid-cols-3 gap-5'>
            {cars.map(car => <div className="card p-6 bg-base-100 shadow-xl" key={car?.slug}>
                <figure><img src={car.picture} alt="Shoes" /></figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title">Car name : {car.name}</h2>
                    <p> Price : {car.price}</p>
                    <p>Description :  {car.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-600 p-4 rounded-xl">
                            <Link href={`/Blog/${car.slug}`}>View details</Link>
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    );
};





const cars = [
    {
        "name": "Tesla Model S",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Tesla Model S is an all-electric five-door liftback sedan produced by Tesla, Inc. It offers impressive range and performance.",
        "price": 79999,
        "slug": "tesla-model-s"
    },
    {
        "name": "BMW 3 Series",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The BMW 3 Series is a compact executive car manufactured by the German automaker BMW. It is known for its sporty handling and luxury features.",
        "price": 41250,
        "slug": "bmw-3-series"
    },
    {
        "name": "Audi A6",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Audi A6 is an executive car made by the German automaker Audi. It offers a blend of performance, technology, and comfort.",
        "price": 54900,
        "slug": "audi-a6"
    },
    {
        "name": "Mercedes-Benz C-Class",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Mercedes-Benz C-Class is a line of compact executive cars produced by Daimler AG. It features luxurious interiors and advanced technology.",
        "price": 41900,
        "slug": "mercedes-benz-c-class"
    },
    {
        "name": "Ford Mustang",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Ford Mustang is an American car manufactured by Ford. It is one of the most iconic muscle cars with a rich history of performance.",
        "price": 55995,
        "slug": "ford-mustang"
    },
    {
        "name": "Chevrolet Camaro",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Chevrolet Camaro is a mid-size American automobile manufactured by Chevrolet, classified as a pony car and some versions also as a muscle car.",
        "price": 42995,
        "slug": "chevrolet-camaro"
    },
    {
        "name": "Porsche 911",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Porsche 911 is a high-performance sports car made by Porsche AG of Stuttgart, Germany. The 911 has been known for its distinctive design and performance.",
        "price": 99950,
        "slug": "porsche-911"
    },
    {
        "name": "Lexus ES",
        "picture": "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
        "description": "The Lexus ES is a series of mid-size luxury executive cars sold by Lexus, the luxury division of Toyota. It is known for its comfort and reliability.",
        "price": 39900,
        "slug": "lexus-es"
    }
]

export default page;


