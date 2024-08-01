import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FaCss3Alt, FaGithub, FaHtml5, FaJava, FaPhp, FaRegFolderOpen } from "react-icons/fa";
import { IoLogoAngular, IoLogoSass } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { TbFileTypeSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiCucumber, SiJavascript, SiJunit5, SiMysql, SiTypescript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";

export const Proyectos = () => {

  const { closeMenu } = useContext(AppContext);

  return (
    <div className="p-4 sm:ml-64 bg-gray-500" onClick={closeMenu}>      
      <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">  
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
          <div className="grid grid-cols-2 m-5">
            <FaRegFolderOpen className="text-green-500" />   
            <div className="grid justify-items-end">
               {/* <IoMdClose className="text-white"/> */}
            </div>
          </div>             
              <p className="text-2xl font-bold m-5">DataTools</p>   
              <p className="text-lg m-5">Aplicación web ventana única de servicios, secretaria de movilidad</p>   
          <div className="flex flex-row m-5 gap-2">
            <IoLogoAngular className="text-red-500" />
            <FaHtml5 className="text-orange-500" />
            <IoLogoSass className="text-red-500"/>
            <SiTypescript className="text-blue-500"/>
            <FaGithub className="text-gray-400"/>
          </div>
         </div>
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
          <div className="grid grid-cols-2 m-5">
              <FaRegFolderOpen className="text-green-500" />   
              <div className="grid justify-items-end">
               {/*  <IoOpenOutline className="text-white"/> */}
              </div>
            </div> 
              <p className="text-2xl font-bold m-5">ComWare</p>      
              <p className="text-lg m-5">Aplicación web para recursos humanos</p>   
              <div className="flex flex-row m-5 gap-2">
                <IoLogoAngular className="text-red-500"/>
                <FaNodeJs className="text-green-500"/>
                <TbFileTypeSql className="text-blue-500"/>
                <SiJavascript className="text-yellow-500" />
                <BsBootstrapFill  className="text-violet-500"/>
                <FaCss3Alt className="text-blue-400"/>
                <FaGithub className="text-gray-400"/>
              </div>
          </div>
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
            <div className="grid grid-cols-2 m-5">
              <FaRegFolderOpen className="text-green-500" />   
              <div className="grid justify-items-end">
                {/* <IoMdClose className="text-white"/> */}
              </div>
            </div> 
              <p className="text-2xl font-bold m-5">Bersoft Solutions</p>    
              <p className="text-lg m-5">Aplicación web para deserción de estudiantes en las universidades</p>   
              <div className="flex flex-row m-5 gap-2">
                <FaPhp className="text-blue-500"/>
                <BiLogoPostgresql className="text-blue-500" />
                <SiJavascript className="text-yellow-500" />
                <BsBootstrapFill  className="text-violet-500"/>
                <FaCss3Alt className="text-blue-400"/>
                <FaGithub className="text-gray-400"/>
              </div>
          </div>  
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
            <div className="grid grid-cols-2 m-5">
              <FaRegFolderOpen className="text-green-500" />   
              <div className="grid justify-items-end">
               {/*  <IoMdClose className="text-white"/> */}
              </div>
            </div> 
              <p className="text-2xl font-bold m-5">Softesting</p>    
              <p className="text-lg m-5">Pruebas de desarrollo</p>   
              <div className="flex flex-row m-5 gap-2">
                <FaPhp className="text-blue-500"/>
                <FaJava className="text-red-400" />
                <SiJunit5 className="text-red-400"/>
                <SiCucumber className="text-green-400"/>
              </div>
          </div>   
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
            <div className="grid grid-cols-2 m-5">
              <FaRegFolderOpen className="text-green-500" />   
              <div className="grid justify-items-end">
                {/* <IoMdClose className="text-white"/> */}
              </div>
            </div> 
              <p className="text-2xl font-bold m-5">Quick Help</p>    
              <p className="text-lg m-5">Aplicaciones web de servicios logísticos</p>   
              <div className="flex flex-row m-5 gap-2">
                <FaPhp className="text-blue-500"/>
                <BiLogoPostgresql className="text-blue-500" />
                <FaHtml5 className="text-orange-500" />
                <FaCss3Alt className="text-blue-400"/>
                <SiJavascript className="text-yellow-500" />
              </div>
          </div>  
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
            <div className="grid grid-cols-2 m-5">
              <FaRegFolderOpen className="text-green-500" />   
              <div className="grid justify-items-end">
               {/*  <IoMdClose className="text-white"/> */}
              </div>
            </div> 
              <p className="text-2xl font-bold m-5">SmartQuick</p>    
              <p className="text-lg m-5">Aplicaciones web de servicios logísticos</p>   
              <div className="flex flex-row m-5 gap-2">
                <FaPhp className="text-blue-500"/>
                <BiLogoPostgresql className="text-blue-500" />
                <FaHtml5 className="text-orange-500" />
                <FaCss3Alt className="text-blue-400"/>
                <SiJavascript className="text-yellow-500" />
              </div>
          </div>    
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
            <div className="grid grid-cols-2 m-5">
              <FaRegFolderOpen className="text-green-500" />   
              <div className="grid justify-items-end">
               {/*  <IoMdClose className="text-white"/> */}
              </div>
            </div> 
              <p className="text-2xl font-bold m-5">Colcan</p>    
              <p className="text-lg m-5">Aplicación web para seguimiento de cuartos frios</p>   
              <div className="flex flex-row m-5 gap-2">
                <FaJava className="text-red-400" />
                <FaHtml5 className="text-orange-500" />
                <FaCss3Alt className="text-blue-400"/>
                <SiMysql className="text-blue-400"/>
                <SiJavascript className="text-yellow-500" />
                <DiJqueryLogo className="text-blue-400"/>
              </div>
          </div>
         </div> 
      </div>
    </div>
  );
}
