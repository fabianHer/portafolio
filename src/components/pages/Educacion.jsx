import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { BsFillBuildingsFill } from "react-icons/bs";
import { FaMedal, FaUniregistry } from "react-icons/fa";

export const Educacion = () => {

    const { closeMenu } = useContext(AppContext);

    return (
        <div className="p-4 sm:ml-64 bg-gray-500" onClick={closeMenu}>
        <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-red-500 border-2 sm:text-1xl md:text-3xl mb-3">    
            <div className="grid grid-cols-2 m-5">
              <FaUniregistry  className="text-red-500" />
            </div>
                <p className="text-4xl font-bold m-5">Universidad ECCI, Bogotá, Colombia.</p>
                <p className="text-2xl ml-5">Ingeniero de Sistemas.</p>
                <p className="text-sm ml-5 mb-5"><em>Jan. 2016 – May. 2020.</em></p>
          </div>  
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl mb-3">    
            <div className="grid grid-cols-2 m-5">
              <BsFillBuildingsFill className="text-green-500" /> 
            </div>             
                <p className="text-4xl font-bold m-5">SENA, Bogotá, Colombia.</p>
                <p className="text-2xl ml-5">Tecnólogo en Análisis y Desarrollo de Sistemas de Información.</p>
                <p className="text-sm ml-5 mb-5"><em>Jan. 2014 – Oct .2016.</em></p>
           </div>   
           <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">Seminario de investigación</p>
                <p className="text-2xl ml-5 mb-5"><em>Universidad ECCI.</em></p>
              </div>
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">Calidad en el desarrollo de software.</p>
                <p className="text-2xl ml-5 mb-5"><em>SENA.</em></p>
              </div>
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">Modelos de calidad de software.</p>
                <p className="text-2xl ml-5 mb-5"><em>SENA.</em></p>
              </div>
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">Angular de cero a experto.</p>
                <p className="text-2xl ml-5 mb-5"><em>Udemy.</em></p>
              </div>
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">Angular Avanzado.</p>
                <p className="text-2xl ml-5 mb-5"><em>Udemy.</em></p>
              </div>
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">Node js de cero a experto.</p>
                <p className="text-2xl ml-5 mb-5"><em>Udemy.</em></p>
              </div>
              <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
                <div className="grid grid-cols-2 m-5">
                    <FaMedal  className="text-yellow-500" /> 
                </div> 
                <p className="text-3xl font-bold ml-5">React de cero a experto (Hooks y MERN).</p>
                <p className="text-2xl ml-5 mb-5"><em>Udemy (en progreso).</em></p>
              </div>
           </div>    
        </div>        
        </div>
    );
  }