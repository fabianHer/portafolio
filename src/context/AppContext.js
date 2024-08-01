import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider =({children})=> {

  const [activo, setActivo] = useState(false);
  const [openMenu, setOpen] = useState(false);

  const toggleActivo = () => {
    setActivo(!activo);
  };
  const toggleMenu = () => {
    setOpen(!openMenu);
  };
  const closeMenu = () => {
    setOpen(false);
  };
    return(
        <AppContext.Provider value={{activo, toggleActivo, openMenu, toggleMenu, closeMenu}}>
          {children}
        </AppContext.Provider>
    )
}
export {AppContext, AppProvider}