import React from "react";

const Header = () => {
  return (
    <div>
      <header className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tight text-yellow-500">
          Chowdeck
        </h1>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-yellow-500">
            Groceries
          </a>
          <a href="#" className="hover:text-yellow-500">
            Ride
          </a>
          <a href="#" className="hover:text-yellow-500">
            Care
          </a>
        </nav>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors">
          Download App
        </button>
      </header>
    </div>
  );
};

export default Header;
