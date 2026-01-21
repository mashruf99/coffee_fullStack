import React, { useContext } from 'react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const CoffeCard = ({ coffee, coffees, setCoffees }) => {

    const { user } = useContext(AuthContext);

    const { photo, name, chef, details } = coffee;

    const handleDelete = (_id) => {
        if (!user) {
            Swal.fire("Unauthorized", "You must login first!", "warning");
            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "This coffee will be deleted permanently",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Coffee deleted", "success");
                            setCoffees(coffees.filter(c => c._id !== _id));
                        }
                    });
            }
        });
    };


    return (
        <div>
            <div className="bg-[#f5f4f1] p-6 rounded-lg flex items-center shadow-sm">
                <img
                    src={photo}
                    alt={name}
                    className="w-24 h-32 object-contain"
                    onError={(e) => {
                        e.target.src = "https://i.ibb.co/4YBN4mL/coffee-placeholder.png";
                    }}
                />

                <div className="ml-6 grow">
                    <p className="text-sm"><span className="font-bold">Name:</span> {name}</p>
                    <p className="text-sm"><span className="font-bold">Chef:</span> {chef}</p>
                    <p className="text-sm"><span className="font-bold">Price:</span> {details} tk</p>
                </div>

                <div className="flex flex-col gap-2">
                    <NavLink to={`/coffee/${coffee._id}`}>
                        <button className="p-2 bg-[#d2b48c] text-white rounded"><Eye size={16} /></button>
                    </NavLink>
                    <NavLink to={`/update-coffee/${coffee._id}`}>
                        <button className="p-2 bg-[#3c393b] text-white rounded"><Edit size={16} /></button>
                    </NavLink>

                    <button onClick={() => handleDelete(coffee._id)} className="p-2 bg-[#ea4744] text-white rounded"><Trash2 size={16} /></button>
                </div>
            </div>
        </div>

    );
};

export default CoffeCard;
