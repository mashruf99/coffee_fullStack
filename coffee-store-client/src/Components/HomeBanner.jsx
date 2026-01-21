import React, { useContext } from 'react';
import banner from '../assets/banner.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const HomeBanner = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddCoffeeClick = () => {
        if (!user) {
            Swal.fire({
                icon: 'info',
                title: 'Login Required',
                text: 'You must sign in to add coffee.',
            });
            navigate('/signin'); // redirect to login
        } else {
            navigate('/add-coffee'); // redirect to Add Coffee page
        }
    };

    return (
        <section className="relative h-125 flex items-center bg-[#1a1a1a] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-50">
                <img
                    src={banner}
                    alt="Coffee Beans"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:ml-40">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">
                    Would you like a Cup of Delicious Coffee?
                </h1>
                <p className="max-w-xl mb-6 text-gray-300">
                    It's coffee time - Sip & Savor - Relaxation in every cup! Get the nostalgic scent of coffee
                    anytime! Check out the best coffee for you and enjoy these moments.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <button
                        onClick={handleAddCoffeeClick}
                        className="bg-[#e3b577] hover:bg-[#d4a366] text-black px-6 py-2 rounded transition font-medium"
                    >
                        Add Coffee
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
