import React from 'react';

const HomeSocialMedia = () => {
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="text-center mb-10">
                    <p className="text-sm text-gray-500">Follow Us Now</p>
                    <h2 className="text-4xl font-serif text-[#331a15]">Follow on Instagram</h2>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
                        <div key={img} className="aspect-square overflow-hidden rounded-lg">
                            <img
                                src={`/api/placeholder/300/300`}
                                alt="Instagram"
                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeSocialMedia;