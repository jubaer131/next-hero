import React from 'react';




export const generateMetadata = async ({ params }) => {

    const { description, name, price, picture, slug } = cars.find(car => car.slug === params.slug)
    return {
        title: `blog details : ${slug}`,
        description: description,
        keyword: description.split('')

    }
}

const page = ({ params }) => {
    console.log(params.slug)

    const { description, name, price, picture } = cars.find(car => car.slug === params.slug)
    return (

        <div className="flex gap-5 bg-base-100 shadow-xl h-screen mt-8">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="space-y-5 mt-8 p-10">
                <h2 className="card-title">Car Name: {name}</h2>
                <p>Description : {description}.</p>
                <p>Carprice : {price}.</p>

            </div>
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