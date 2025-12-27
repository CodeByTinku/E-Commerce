import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>

      <div className="bg-gray-900 text-white">
        
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 mt-3">
            {/* Logo Section */}
           <img src="https://clipart-library.com/2023/grocery-store-clipart-xl.png" alt="image cann't loading!!" className="w-16 h-16 p-1"/>

            {/* Links Section */}
            
            <div className="hidden md:flex space-x-6 shrink-0 text-xl font-bold text-white">
             
              <Menu to={'/'} title={'Home'}/>
              <Menu to={'/products'} title={'Products'}/>
           
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none">
                ☰
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
    
  );
};
const Menu = ({ to, title }) => (
  <NavLink to={to}>{title}</NavLink>
)

export default Navbar;
