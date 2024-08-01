import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { saveAs } from 'file-saver';
import perfil from '../../assets/perfil.jpeg';
import Chat from '../../assets/Chat.png';
import User from '../../assets/User.png';
import Search from '../../assets/Search.png';
import Chart from '../../assets/Chart.png';
import Folder from '../../assets/Folder.png';
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Setting from '../../assets/Setting.png';
import githubIcon from "../../assets/github.svg";
import { NavLink } from 'react-router-dom';
import { PiTreeStructureBold } from 'react-icons/pi';
import { FaDownload } from 'react-icons/fa';

export const Sidebar = () => {

  const {  openMenu  } = useContext(AppContext);
  const [rutaActiva, setRutaActiva] = useState(0);
  const selectRuta = (id) => {
    setRutaActiva(id);
  };

  const Menus = [
    { title: "Sobre mi", src: User, url: "/sobre-mi" },
    { title: "Proyectos Laborales", src: Chat, url: "/proyectos" },
    { title: "Proyectos Personales", src: Chat, url: "/proyectospersonales" },
    { title: "Experiencia", src: Setting, gap: true, url: "/experiencia" },
    { title: "Freelance", src: Chart, url: "/freelance" },
    { title: "Educación ", src: Search, url: "/educacion" },
    { title: "Contactar ", src: Folder, gap: true, url: "/contactar" },
  ];

    const downloadPDF = async () => {
      try {
        // Ruta relativa al archivo PDF en los activos
        const pdfUrl = process.env.PUBLIC_URL + '/FabianHernandezHV.pdf';
        // Descargar el archivo PDF
        const response = await fetch(pdfUrl);
        const blob = await response.blob();

        // Guardar el archivo PDF como una descarga
        saveAs(blob, 'FabianHernandezHV.pdf');
      } catch (error) {
        console.error('Error al descargar el PDF:', error);
      }
    };

  return (
    <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${openMenu ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`} aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
      <div className="left-0 w-full bg-gray-800 py-4 px-3 text-white text-center">
          <div className="flex items-center justify-center ps-2.5 mb-5">
            <img src={perfil} className="rounded-full me-3 h-40" alt="Perfil" />
          </div>
          <div className="flex items-center ps-2.5 mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Fabián Hernández</span>
          </div>
          <a href="https://www.linkedin.com/in/yilber-fabián-hernández-rincón-442618248" target="_blank"  rel="noreferrer" className="flex justify-start h-45">
            <img src={linkedin} className="w-7" alt="Linkedln" />
            <p>Linkedln</p>
          </a>
          <div className="flex justify-start h-45">
            <img src={whatsapp} className="w-7" alt="WhatsApp" />
            <p>3116204093</p>
          </div>
          <a rel="noreferrer" target="_blank" href="https://github.com/fabianHer" className="flex justify-start h-45">
            <img src={githubIcon} className="w-7" alt="GitHub" />
            <p>GitHub</p>
          </a>
        </div>

          <ul className="pt-6 pl-0">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${menu.gap ? "mt-9" : "mt-2"} ${index === rutaActiva && "bg-light-white"} `}>
                 {menu.icon ? (
                  <PiTreeStructureBold className='text-2xl'/>
                 ) :(
                  <img src={menu.src} alt="Icono menu"/>
                 )}
              <NavLink  to={menu.url}><span className={`origin-left duration-200 text-white no-underline`} onClick={() => selectRuta(index)} >{menu.title}</span></NavLink>
            </li>

          ))}
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-10" onClick={downloadPDF}>
          <FaDownload className="text-red-500 text-lg" />
            <span className='origin-left duration-200 text-white no-underline'>Descargar HV</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
