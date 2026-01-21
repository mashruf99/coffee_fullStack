import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../firebase/firebase.init";
const CompleteProfile = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [role, setRole] = useState("");


    const [userData, setUserData] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem("googleUser"));
        return storedUser || null;
    });

    useEffect(() => {
        const fetchUser = async () => {
            const user = auth.currentUser;
            if (!user) return navigate("/");

            const res = await fetch(`http://localhost:3000/users/uid/${user.uid}`);
            const data = await res.json();
            setUserData(data);
            setName(data.name || "");
        };
        fetchUser();
    }, [navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = { ...userData, role, name };

        await fetch(`http://localhost:3000/users/${userData._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedUser)
        });

        Swal.fire("Success", "Profile completed", "success");
        navigate("/");
    };



    if (!userData) return null;

    return (
        <div className="min-h-screen flex items-center justify-center text-black p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
                <h2 className="text-xl mb-4">Complete Profile</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 w-full mb-3"
                />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border p-2 w-full mb-4"
                    required
                >
                    <option value="">Select Role</option>
                    <option value="chef">Chef</option>
                    <option value="supplier">Supplier</option>
                </select>


                <button className="bg-amber-600 text-white px-4 py-2 rounded">
                    Complete Signup
                </button>
            </form>
        </div>
    );
};

export default CompleteProfile;
