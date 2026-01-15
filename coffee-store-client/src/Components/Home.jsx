import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeCard from './CoffeCard';
import HomeFeatures from './HomeFeatures';
import HomeBanner from './HomeBanner';
import HomeSocialMedia from './HomeSocialMedia';

const CoffeeLandingPage = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className="bg-white font-sans text-gray-800">
            <HomeBanner />
            <HomeFeatures />

            <div className="container mx-auto py-8">
                <div className="text-center mb-12">
                    <p className="text-sm text-gray-500 italic">--- Sip & Savor ---</p>
                    <h2 className="text-4xl font-serif text-[#331a15]">
                        Our Popular Products
                    </h2>
                </div>
            </div>
            <div className="container mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                {coffees.map(coffee => (
                    <CoffeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                    />
                ))}
            </div>

            <HomeSocialMedia />
        </div>
    );
};

export default CoffeeLandingPage;
