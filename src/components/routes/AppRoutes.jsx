import { Route, Routes } from "react-router-dom"
import { Proyectos, SobreMi,Experiencia, Contactar, Esqueleto, Freelance, Educacion, ProyectosPersonales }   from "../pages"


export const AppRoutes = () => {
    return (
        <Routes>           
            <Route path="/" element={<SobreMi/>} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/Esqueleto" element={<Esqueleto />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectospersonales" element={<ProyectosPersonales />} />
            <Route path="/Experiencia" element={<Experiencia />} />   
            <Route path="/Freelance" element={<Freelance />} />
            <Route path="/Educacion" element={<Educacion />} />
            <Route path="/Contactar" element={<Contactar />} />
        </Routes>
    )
}