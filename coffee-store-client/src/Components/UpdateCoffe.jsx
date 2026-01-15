import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData(); 
    const navigate = useNavigate();
    const [coffee, setCoffee] = useState({
        name: loadedCoffee.name || "",
        chef: loadedCoffee.chef || "",
        supplier: loadedCoffee.supplier || "",
        taste: loadedCoffee.taste || "",
        category: loadedCoffee.category || "",
        details: loadedCoffee.details || "",
        photo: loadedCoffee.photo || ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCoffee(prev => ({
            ...prev,
            [name]: value
        }));
    };



    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/coffees/${loadedCoffee._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Coffee updated successfully", "success");
                    navigate("/");
                }
            });
    };

    return (
        <div className="min-h-screen bg-[#f4f3f0] py-20 px-4 text-black">
            <div className="max-w-4xl mx-auto bg-[#f8f6f3] rounded-lg shadow-md p-12">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-semibold text-[#374151]">
                        Update Coffee
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Modify coffee details and save changes
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleUpdateCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Input label="Name" name="name" value={coffee.name} onChange={handleChange} />
                        <Input label="Chef" name="chef" value={coffee.chef} onChange={handleChange} />
                        <Input label="Supplier" name="supplier" value={coffee.supplier} onChange={handleChange} />
                        <Input label="Taste" name="taste" value={coffee.taste} onChange={handleChange} />
                        <Input label="Category" name="category" value={coffee.category} onChange={handleChange} />
                        <Input label="Details" name="details" value={coffee.details} onChange={handleChange} />
                    </div>


                    <Input
                        label="Photo URL"
                        name="photo"
                        value={coffee.photo}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#d2b48c] hover:bg-[#c19a6b] py-3 rounded-md border border-gray-700 font-medium"
                    >
                        Update Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

// 🔹 reusable input component (professional touch)
const Input = ({ label, name, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#caa27c]"
        />
    </div>
);

export default UpdateCoffee;
