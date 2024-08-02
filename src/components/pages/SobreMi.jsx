import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { FaRegFolderOpen } from 'react-icons/fa';

export const SobreMi = () => {

  const { closeMenu } = useContext(AppContext);

  return (
    <div className="p-4 sm:ml-64 bg-gray-500" onClick={closeMenu}>
      <div className="p-4 border-2 border-dashed rounded-lg border-gray-700">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mb-4">
          <div className="rounded-lg mb-5 bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 text-center sm:text-1xl md:text-3xl">
              <FaRegFolderOpen className="text-green-500 text-5xl cursor-none m-5" />
              <p className='lg:text-5xl sm:text-3xl md:text-base font-bold mb-3 text-green-500'>Acerca de mí</p>
              <p className='lg:text-4xl sm:text-sm md:text-base m-10'>Ingeniero en sistemas con más de 7 años de experiencia desarrollando aplicaciones web utilizando tecnologías, principalmente Angular, y otras como JavaScript, PHP, Java, CSS, HTML y Bootstrap. Competente en el desarrollo y mantenimiento de API REST utilizando tecnologías como Node.js, PHP, SQL y MySQL. Soy una persona activa, apasionada por la investigación y el desarrollo para aprender y crecer personal y profesionalmente. Disfruto el análisis y resolución de problemas que enfrento como desafíos personales. Me gusta trabajar en equipo para resolver y desarrollar todas las tareas asignadas de manera responsable y eficiente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
