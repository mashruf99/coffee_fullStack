import React from 'react';
import Swal from 'sweetalert2'
const AddCoffee = () => {



    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log('Coffee added with ID:', data.insertedId);

                    let timerInterval;
                    Swal.fire({
                        title: "Data Added Successfully.",
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log("I was closed by the timer");
                        }
                    });
                }
                form.reset();
            })
            .catch((error) => {
                console.error('Error adding coffee:', error);
            });
    };


    return (
        <div className="min-h-screen bg-[#f4f3f0] text-black py-20 px-4">
            <div className="max-w-4xl mx-auto bg-[#f8f6f3] rounded-lg shadow-md p-12">
                <div className="text-center mb-10 space-y-4">
                    <h1 className="text-5xl font-semibold text-[#374151]">
                        Add New Coffee
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Fill in the details to add a new coffee.
                        Make sure all required fields are completed.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleAddCoffee}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter coffee name"
                                className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Chef
                            </label>
                            <input
                                type="text"
                                name="chef"
                                placeholder="Enter coffee chef"
                                className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Supplier
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                placeholder="Enter coffee supplier"
                                className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Taste
                            </label>
                            <input
                                type="text"
                                name="taste"
                                placeholder="Enter coffee taste"
                                className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Enter coffee category"
                                className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Details
                            </label>
                            <input
                                type="text"
                                name="details"
                                placeholder="Enter coffee details"
                                className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="w-full placeholder-gray-400 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#caa27c]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#d2b48c] hover:bg-[#c19a6b] text-gray-800 font-medium py-3 rounded-md border border-gray-700 transition"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
