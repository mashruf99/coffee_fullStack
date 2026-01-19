import React from 'react';
import Input from './Input';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import { use } from 'react';
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
const SignUp = () => {

    const { createUser } = use(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());
        createUser(email, password)
            .then(res => {
                const user = res.user;
                
                fetch('http://localhost:3000/users',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({email: user.email, ...rest, creationTime: user.metadata.creationTime})
                })
                .then( res => res.json())
                .then( data => {
                    Swal.fire("Added!", "User added", "success");
                    console.log(data);
                })
                form.reset();
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="min-h-screen bg-[#f4f3f0] py-20 px-4 text-black">
            <div className="w-full max-w-md sm:max-w-lg mx-auto bg-[#f8f6f3] rounded-lg shadow-md p-8 sm:p-12">


                <div className="text-center mb-10">
                    <h1 className="text-4xl font-semibold text-[#374151]">
                        Create Account
                    </h1>
                    <p className="text-gray-500 mt-4">
                        Add coffee to your collection by signing up
                    </p>
                </div>

                <form onSubmit={handleSignUp} className="space-y-6">
                    <Input label="Full Name" name="name" />
                    <Input label="Role" name="role" />
                    <Input label="Email" name="email" type="email" />
                    <Input label="Password" name="password" type="password" />

                    <button type="submit" className="w-full bg-[#d2b48c] hover:bg-[#c19a6b] py-3 rounded-md border border-gray-700 font-medium">
                        Sign Up
                    </button>
                   
                    <div className="flex items-center gap-3 my-4">
                        <div className="grow h-px bg-gray-300" />
                        <span className="text-sm text-gray-500">OR</span>
                        <div className="grow h-px bg-gray-300" />
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            type="button"
                            className="group btn w-[60%] flex items-center gap-2 bg-white mb-2 text-black border border-black justify-center"
                        >
                            <span className="block group-hover:hidden">
                                <svg
                                    aria-label="Google logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <g>
                                        <path d="m0 0H512V512H0" fill="#fff"></path>
                                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                    </g>
                                </svg>
                            </span>

                            <span className="hidden group-hover:block">
                                <FaGoogle size={14} />
                            </span>

                            <p className="font-light group-hover:text-blue-600 transition">
                                Sign up with Google
                            </p>
                        </button>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <NavLink
                            to="/signin"
                            className="text-[#c19a6b] font-medium hover:underline"
                        >
                            Sign in
                        </NavLink>
                    </p>

                </form>
            </div>
        </div>
    );

};

export default SignUp;
