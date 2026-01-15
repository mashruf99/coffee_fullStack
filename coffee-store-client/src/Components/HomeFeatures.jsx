import React from 'react';
import { Coffee, Award, Bean, Flame } from 'lucide-react';
const HomeFeatures = () => {
    return (
        <div>
            <section className="py-16 bg-[#f4f3f0]">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Coffee />, title: "Awesome Aroma", desc: "You will love our coffee aroma." },
                        { icon: <Award />, title: "High Quality", desc: "We use the best beans in the world." },
                        { icon: <Bean />, title: "Pure Grades", desc: "Selection of premium roasted beans." },
                        { icon: <Flame />, title: "Proper Roasting", desc: "Beans are roasted to perfection." },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="text-[#331a15] mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomeFeatures;