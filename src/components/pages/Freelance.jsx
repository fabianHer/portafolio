import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { BsFillBuildingsFill } from "react-icons/bs";

export const Freelance = () => {

    const { closeMenu } = useContext(AppContext);
    const [ventana, setventana] = useState({
      div1: false,
      div2: false,
      div3: false,
      div4: false,
      div5: false,
      div6: false,
      div7: false
  
    });
    const abrirVentana = (divId) => {
      setventana({
        ...ventana,
        [divId]: !ventana[divId]
      });
    };
  
    return (
        <div className="p-4 sm:ml-64 bg-gray-500" onClick={closeMenu}>      
        <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">    
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl mb-3">    
            <div className="grid grid-cols-2 m-5">
              <BsFillBuildingsFill className="text-green-500" />   
              <div className="grid justify-items-end">
               <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div1')}> {ventana.div1 ? 'Ocultar funciones': 'Ver funciones' }</span>
              </div>
            </div>             
                <p className="text-2xl font-bold m-5">KITE, Freelance, USA.</p>
                <p className="text-sm m-5">Mar 2022 – Dic 2022.<br/>
                <em> Software Developer.<br/>
                Tecnologìas: Angular - Angular Material - JavaScript - Chart.js.</em></p>
                 {ventana.div1 && <ul className="text-sm list-disc m-7">
                    <li>Colaboré en una aplicación web desarrollada con Angular, Angular Material y JavaScript, cumpliendo con los requerimientos del cliente en términos de funcionalidad y usabilidad.</li>
                    <li>Diseñé e implementé soluciones utilizando Angular Material y otras tecnologías de vanguardia, permitiendo a los usuarios interactuar efectivamente con la aplicación.</li>
                    <li>Consumí microservicios externos para integrar funcionalidades adicionales como verificación de datos, generación de informes, para mejorar la funcionalidad y eficiencia de la aplicación.</li>
                    <li>Utilicé JavaScript para implementar funcionalidades interactivas y dinámicas en la aplicación.</li>
                </ul>}
          </div>  
          <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-blue-500 border-2 sm:text-1xl md:text-3xl mb-3">    
            <div className="grid grid-cols-2 m-5">
              <BsFillBuildingsFill className="text-blue-500" />   
              <div className="grid justify-items-end">
               <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div2')}> {ventana.div2 ? 'Ocultar funciones': 'Ver funciones' }</span>
              </div>
            </div>             
                <p className="text-2xl font-bold m-5">ANNAR DIAGNOSTICA IMPORT SAS, Freelance, Colombia</p>
                <p className="text-sm m-5">Mar 2022 – Dic 2022.<br/>
                <em> Software Developer.<br/>
                Tecnologìas: Angular - Angular Material - JavaScript - Chart.js.</em></p>
                 {ventana.div2 && <ul className="text-sm list-disc m-7">
                    <li>Colaboré en una aplicación web desarrollada con Angular, Angular Material y JavaScript, cumpliendo con los requerimientos del cliente en términos de funcionalidad y usabilidad.</li>
                    <li>Diseñé e implementé soluciones utilizando Angular Material y otras tecnologías de vanguardia, permitiendo a los usuarios interactuar efectivamente con la aplicación.</li>
                    <li>Consumí microservicios externos para integrar funcionalidades adicionales como verificación de datos, generación de informes, para mejorar la funcionalidad y eficiencia de la aplicación.</li>
                    <li>Utilicé JavaScript para implementar funcionalidades interactivas y dinámicas en la aplicación.</li>
                </ul>}
           </div>       
        </div>
        </div>
    );
  }