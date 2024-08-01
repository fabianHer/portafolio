import React from 'react';

export const  Footer  = () => {

    return (     
      <div className="bg-gray-900 fixed w-full bottom-0">
        <div className="mx-auto text-white py-3">
          <div className="text-center">
              <h3 className="text-3xl mb-3">  © {new Date().getFullYear()} Tu Marca | Todos los derechos reservados </h3>                 
          </div>
        </div>
      </div>
  );
}