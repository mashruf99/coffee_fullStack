import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="w-full">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
