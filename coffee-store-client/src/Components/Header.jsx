import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dbUser, setDbUser] = useState(null);

    useEffect(() => {
        if (user?.uid) {
            fetch(`http://localhost:3000/users/uid/${user.uid}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("keno");
                    }
                    return res.json();
                })
                .then(data => setDbUser(data))
                .catch(err => {
                    console.log(err.message);
                    setDbUser(null);
                });
        }
    }, [user]);

    return (
        <header className="bg-amber-950 text-white shadow-md">
            <div className="relative flex items-center justify-between px-4 py-5">
                <div>
                    {user ? (
                        <button
                            onClick={logOut}
                            className="bg-[#e3b577] hover:bg-[#d4a366] text-black px-4 py-2 rounded font-medium transition"
                        >
                            Log Out
                        </button>
                    ) : (
                        <NavLink to="/signin">
                            <button className="bg-[#e3b577] hover:bg-[#d4a366] text-black px-4 py-2 rounded font-medium transition">
                                Sign In
                            </button>
                        </NavLink>
                    )}
                </div>
                <h2 className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-semibold">
                    Expresso Emporium
                </h2>
                {user && (
                    <div className="text-sm text-gray-200">
                        <span className="hidden md:block">
                            {dbUser?.name || user.displayName}
                        </span>
                    </div>
                )}

            </div>
        </header>
    );
};

export default Header;
