import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-950 bg-opacity-20 absolute z-10 w-screen h-16 flex justify-normal">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-2xl font-bold pr-20">FlowRoad</div>
            <ul className="flex space-x-4">
                <li>
                <a href="#" className="text-white hover:text-gray-300">Create</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-gray-300">Collecctions</a>
                </li>
                <li>
                <a href="#" className="text-white hover:text-gray-300">Profile</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};
