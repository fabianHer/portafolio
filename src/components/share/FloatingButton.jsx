import { FaBeer } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import { useContext } from "react";
export const FloatingButton = () => {

  const {activo, toggleActivo, toggleMenu} = useContext(AppContext); 

 
  return (
    <>
    <button className={`${activo ? "floating-button bg-dark-gray": "floating-button bg-dark-purple"}`} onClick={toggleActivo}>       
    <div className="flex justify-center">
      <FaBeer />
    </div>
  </button>  
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"  type="button"  className="inline-flex items-center p-2 ms-3 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 bg-gray-700 focus:ring-gray-600 z-50 mt-1 ml-56 fixed"
    onClick={toggleMenu}  >
    <span className="sr-only">Open sidebar</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
  </button>
  </>
  );
}

