import React from 'react';
import Card from '../components/Card';
import HomeHeader from '../components/HomeHeader';
import CardLayout from '../components/CardLayout';

const house = [{
    id: 1,
    price: 300000,
    rooms: 3,
    area: 100,
    street: 'Trg Heroja',
    streetNumber: 34,
    postalCode: 71000,
    city: 'Sarajevo',
    images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg',
        'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?cs=srgb&dl=pexels-pixabay-1237119.jpg&fm=jpg',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg']
},
{
    id: 2,
    price: 300000,
    rooms: 3,
    area: 100,
    street: 'Trg Heroja',
    streetNumber: 34,
    postalCode: 71000,
    city: 'Sarajevo',
    images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg',
        'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?cs=srgb&dl=pexels-pixabay-1237119.jpg&fm=jpg',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg']
},
{
    id: 3,
    price: 300000,
    rooms: 3,
    area: 100,
    street: 'Trg Heroja',
    streetNumber: 34,
    postalCode: 71000,
    city: 'Sarajevo',
    images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg',
        'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?cs=srgb&dl=pexels-pixabay-1237119.jpg&fm=jpg',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg']
},
{
    id: 4,
    price: 300000,
    rooms: 3,
    area: 100,
    street: 'Trg Heroja',
    streetNumber: 34,
    postalCode: 71000,
    city: 'Sarajevo',
    images: ['https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?cs=srgb&dl=pexels-pixabay-276724.jpg&fm=jpg',
        'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?cs=srgb&dl=pexels-pixabay-1237119.jpg&fm=jpg',
        'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg']
}
]
const Home = () => {
    return (
        <div className="container">
            <HomeHeader />
            <CardLayout >
                {house.map(item => {
                    return <Card house={item} key={item.id} />
                })}
            </CardLayout>
        </div>
    );
};

export default Home;