import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
