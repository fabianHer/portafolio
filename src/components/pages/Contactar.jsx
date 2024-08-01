import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";

export const Contactar = () => {

  const { closeMenu } = useContext(AppContext);

  return ( 
    <div className="p-4 sm:ml-64 bg-gray-500" onClick={closeMenu}>      
      <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">     
        <div className="p-4 lg:w-full text-center">
          <p className="sm:text-3xl md:text-5xl lg:text-7xl font-bold">Contactame.</p>
          <p className="sm:text-1xl md:text-3xl lg:text-4xl">Si quieres hablar conmigo no dudes en llamarme o enviarme un mensaje.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4">            
          <div className="flex items-center justify-center rounded-tr-lg bg-gray-800 h-48 text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">    
              <LuPhoneCall className="mr-2 mt-1 text-blue-500" />
              <a href="tel:+573116204093">(+57) 3116204093</a>        
          </div>
          <div className="flex items-center justify-center rounded-tr-lg bg-gray-800 h-48 text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl">              
             <TfiEmail className="mr-2 mt-1 text-red-500"/>         
              <a href="mailto:fabian.hernandez1908@gmail.com">fabian.hernandez1908@gmail.com</a>           
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="grid justify-items-end h-45">
              <a href="" target="_blank"  rel="noreferrer">
                <img src={linkedin} className="w-48 hover:w-52" alt="Linkedin" />
              </a>
          </div>
          <div className="grid justify-center h-45">
          <a href="" target="_blank"  rel="noreferrer">
            <img src={githubIcon} className="w-48 hover:w-52" alt="GitHub" />
          </a>
          </div>
          <div className="grid justify-star h-45">
          <a href="https://api.whatsapp.com/send/?phone=%573116204093&text=Hello+Fabian" target="_blank" rel="noreferrer">
            <img src={whatsapp} className="w-48 hover:w-52" alt="Whatsapp" />
          </a>
          </div>
         </div>
      </div>
    </div>
  );
}
