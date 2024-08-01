import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FaGithub, FaHtml5, FaPhp, FaReact, FaRegFolderOpen } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";
import { SiMysql, SiTypescript } from "react-icons/si";
import { IoOpenOutline } from "react-icons/io5";

export const ProyectosPersonales = () => {
  const { closeMenu } = useContext(AppContext);

    return (
        <div className="p-4 sm:ml-64 bg-gray-500" onClick={closeMenu}>
          <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">
                <div className="grid grid-cols-2 m-5">
                    <FaRegFolderOpen className="text-green-500" />
                    <div className="grid justify-items-end">
                        <a  href="https://gif-expert-fabian.netlify.app" target="_blank" rel="noreferrer">
                           <IoOpenOutline className="text-white" />
                        </a>
                    </div>
                </div>
                    <p className="text-2xl font-bold m-5">gif-expert-fabian</p>
                    <p className="text-lg m-5">Aplicación react web para buscar gifs</p>
                <div className="flex flex-row m-5 gap-2">
                    <FaReact className="text-blue-500"/>
                    <FaHtml5 className="text-orange-500" />
                    <SiTypescript className="text-blue-500"/>
                    <FaGithub className="text-gray-400"/>
                </div>
            </div>
            <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
                <div className="grid grid-cols-2 m-5">
                    <FaRegFolderOpen className="text-green-500" />
                    <div className="grid justify-items-end">
                        <a href="https://cajeroapp.netlify.app/#/login" target="_blank" rel="noreferrer">
                           <IoOpenOutline className="text-white" />
                        </a>
                    </div>
                </div>
                    <p className="text-2xl font-bold m-5">Cajero</p>
                    <p className="text-lg m-5">Aplicación que simula un cajero automático</p>
                    <p className="text-sm m-5">Datos de acceso<br/>
                      Usuario: <em> 1234567 </em><br/>
                      Clave:   <em> 1234567 </em>
                    </p>
                <div className="flex flex-row m-5 gap-2">
                    <IoLogoAngular className="text-red-500" />
                    <FaHtml5 className="text-orange-500" />
                    <FaPhp className="text-blue-500"/>
                    <SiMysql className="text-blue-400"/>
                    <FaGithub className="text-gray-400"/>
                </div>
            </div>
         </div>
        </div>
    </div>
  );
}