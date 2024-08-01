import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { BsFillBuildingsFill } from "react-icons/bs";

export const Experiencia = () => {

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
            <p className="text-2xl font-bold m-5">DataTools, Remoto, Colombia</p>
            <p className="text-sm m-5">Nov. 2022 – Actualmente <br/>
            <em> Senior Software Developer (fronted)<br/>
             Tecnologìas: Angular - Angular Material - JavaScript - Git – DevOps – Bootstrap - HTML – CSS.</em></p>
             {ventana.div1 && <ul className="text-sm list-disc m-7">
              <li>Desarrollo y colaboro en una aplicación web para la gestión, modificaciones, matricula, licencias, traspasos etc, para la secretaría de movilidad de la ciudad de Bogotá utilizando Angular, Angular Material y JavaScript, atendiendo a las necesidades del cliente, requisitos en términos de funcionalidad y usabilidad.</li>
              <li>Colaboro con los líderes de equipo y colegas para comprender y analizar requisitos específicos del sistema, incluida la capacidad de realizar modificaciones funcionales a la aplicación web.</li>
              <li>Diseño e implementé interfaces de usuario intuitivas y responsivas utilizando Angular Material y otras tecnologías de vanguardia, permitiendo a los usuarios interactuar efectivamente con la aplicación</li>
              <li>Consumo microservicios externos para integrar funcionalidad adicional, procesamiento de informes, para mejorar la funcionalidad y eficiencia de la aplicación.</li>
              <li>Utilizo JavaScript para implementar funcionalidades interactivas y dinámicas en la aplicación, mejorando la experiencia del usuario y la usabilidad general.</li>
              <li>Participo en reuniones diarias de seguimiento (diarias) con el equipo para discutir avances, desafíos y tareas futuras, manteniendo una comunicación efectiva y colaborativa.</li>
              <li>Utilizo Git como sistema de control de versiones para gestionar el código fuente de la aplicación, colaborando con otros desarrolladores y garantizando una integración fluida del código.</li>
              <li>Utilizo prácticas de DevOps para monitoreo e implementación, mejorando la eficiencia del equipo y la calidad del software.</li>
            </ul>}
       </div>
       <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-blue-500 border-2 sm:text-1xl md:text-3xl mb-3">
        <div className="grid grid-cols-2 m-5">
          <BsFillBuildingsFill className="text-blue-500" />
          <div className="grid justify-items-end">
            <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div2')}> {ventana.div2 ? 'Ocultar funciones': 'Ver funciones' }</span>
          </div>
        </div>
            <p className="text-2xl font-bold m-5">ComWare, Hìbrido, Colombia</p>
            <p className="text-sm m-5">Ago. 2020 – Nov. 2022 <br/>
            <em> Fullstack developer<br/>
            Tecnologìas: Angular - Angular Material - JavaScript - Git – Node Js - JWT - Express.js - Chart.js – SQL - HTML – CSS.</em></p>
            {ventana.div2 &&  <ul className="text-sm list-disc m-7">
              <li>Lideré el desarrollo de una aplicación web para la evaluación, contratación y seguimiento de empleados utilizando tecnologías como Angular, Angular Material, Node.js y Bootstrap, cumpliendo con los estrictos requisitos del cliente en términos de funcionalidad, seguridad y usabilidad.</li>
              <li>Colaboré con el equipo de gestión de proyectos y las partes interesadas para recopilar y analizar los requisitos del cliente, asegurando una comprensión clara y completa de las necesidades funcionales y comerciales.</li>
              <li>Implementé un sistema de autenticación robusto utilizando JWT (JSON Web Tokens) y Node.js para garantizar la seguridad de las aplicaciones y la protección de los datos confidenciales de los empleados.</li>
              <li>Utilicé SQL Server como base de datos relacional para almacenar y administrar de manera eficiente información crítica de los empleados, como datos personales, historiales de evaluación y detalles de contratación.</li>
              <li>Diseñé y optimicé consultas SQL para recuperar y manipular datos de manera eficiente, asegurando un rendimiento óptimo de la aplicación.</li>
              <li>Utilicé vistas de SQL Server para simplificar consultas complejas y proporcionar una vista consistente y simplificada del esquema de la base de datos, mejorando la accesibilidad y el mantenimiento de los datos.Utilicé vistas de SQL Server para simplificar consultas complejas y proporcionar una vista consistente y simplificada del esquema de la base de datos, mejorando la accesibilidad y el mantenimiento de los datos.</li>
              <li>Desarrollé e implementé microservicios utilizando Node.js y Express.js, integrándolos con la aplicación principal para proporcionar funcionalidades adicionales como gestión de calendario, informes e integración con sistemas externos de RRHH.</li>
              <li>Implementé gráficos e informes interactivos utilizando bibliotecas especializadas como Chart.js, lo que permite a los usuarios visualizar y analizar de manera efectiva datos de rendimiento y métricas clave.</li>
              <li>Diseñé y desarrollé interfaces de usuario modernas y altamente intuitivas utilizando Angular Material y Bootstrap, brindando una experiencia de usuario fluida y atractiva en todos los dispositivos.</li>
              <li>Implementé capacidades de alerta y notificación para mantener a los gerentes y empleados informados sobre fechas límite importantes, revisiones de desempeño y eventos de contratación.</li>
              <li>Realicé pruebas exhaustivas y evaluaciones de usabilidad para garantizar la calidad y usabilidad de la aplicación, trabajando estrechamente con el cliente para realizar ajustes y mejoras según sea necesario.</li>
              <li>Proporcioné documentación detallada del sistema, incluidos manuales de usuario y guías de administración, para facilitar la adopción y el mantenimiento de la aplicación por parte del cliente y los usuarios finales.</li>
              <li>Utilicé Git como sistema de control de versiones para gestionar el código fuente de la aplicación, colaborando con otros desarrolladores y asegurando una integración fluida del código.</li>
            </ul>}
       </div>
       <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">    
        <div className="grid grid-cols-2 m-5">
          <BsFillBuildingsFill className="text-yellow-500" />
          <div className="grid justify-items-end">
            <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div3')}> {ventana.div3 ? 'Ocultar funciones': 'Ver funciones' }</span>
          </div>
        </div>
            <p className="text-2xl font-bold m-5">Bersoft Solutions, Presencial, Colombia</p>
            <p className="text-sm m-5">Jun. 2019 – Aug. 2020<br/>
            <em>Software Developer<br/>
            Tecnologìas: PHP - JavaScript - PostgreSQL- HTML - CSS </em></p>
            {ventana.div3 &&  <ul className="text-sm list-disc m-7">
              <li>Colaboré en el mantenimiento de una aplicación web para el seguimiento de deserción estudiantil utilizando PHP, JavaScript y PostgreSQL.</li>
              <li>Colaboré con el cliente para definir y comprender los requisitos específicos del sistema, incluida la capacidad de identificar patrones de deserción y generar informes predictivos.</li>
              <li>Implementé un sistema de administración de usuarios y roles usando PHP y PostgreSQL para garantizar la seguridad y el acceso adecuado a la información confidencial.</li>
              <li>Diseñé y desarrollé interfaces de usuario interactivas y fáciles de usar utilizando JavaScript y bibliotecas como jQuery, lo que permite a los usuarios visualizar y analizar de manera efectiva los datos de abandono.</li>
              <li>Desarrollé algoritmos de análisis de datos utilizando PHP y SQL para identificar tendencias y factores de riesgo que contribuyen a la deserción estudiantil.</li>
              <li>Implementé funcionalidades de notificación y alerta para identificar a los estudiantes en riesgo de abandonar los estudios y proporcionar intervenciones tempranas por parte de los administradores universitarios.</li>
              <li>Realicé pruebas exhaustivas y colaboré con el cliente para realizar ajustes y mejoras basadas en los comentarios de los usuarios y las evaluaciones de usabilidad.</li>
            </ul>}
       </div>
       <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-red-500 border-2 sm:text-1xl md:text-3xl mb-3">
        <div className="grid grid-cols-2 m-5">
          <BsFillBuildingsFill className="text-red-500" />
          <div className="grid justify-items-end">
            <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div4')}> {ventana.div4 ? 'Ocultar funciones': 'Ver funciones' }</span>
          </div>
        </div>
            <p className="text-2xl font-bold m-5">Softesting, Presencial, Colombia</p>
            <p className="text-sm m-5">Mar 2019 – May 2019<br/>
            <em>Automation Analyst.<br/>
            Tecnologìas: Java – PHP - Junit - Cucumber</em></p>
            {ventana.div4 &&  <ul className="text-sm list-disc m-7">
             <li>Documentar casos de prueba y planificar fechas de entrega.</li>
             <li>Analizar y desarrollar casos de prueba con java, Junit, cucumber.</li>
             <li>Soporte y mantenimiento de aplicaciones.</li>
             </ul>}
       </div>
       <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-green-500 border-2 sm:text-1xl md:text-3xl mb-3">
        <div className="grid grid-cols-2 m-5">
          <BsFillBuildingsFill className="text-green-500" />
          <div className="grid justify-items-end">
            <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div5')}> {ventana.div5 ? 'Ocultar funciones': 'Ver funciones' }</span>
          </div>
        </div>
            <p className="text-2xl font-bold m-5">Quick Help, Presencial, Colombia</p>
            <p className="text-sm m-5">Ene 2018 – Mar 2019<br/>
            <em>Software Developer.<br/> Stack: JavaScript – PHP - DHTMLX – PostgreSQL - HTML - CSS </em></p>
            {ventana.div5 &&  <ul className="text-sm list-disc m-7">
              <li>Diseñé, desarrollé y mantuve aplicaciones web relacionadas con temas de logística y transporte en países como México, Colombia y Perú utilizando PHP, JavaScript y framework DHTMLX para cumplir con los requisitos del cliente para interfaces de usuario interactivas y responsivas.</li>
              <li>Colaboré estrechamente con los clientes para recopilar requisitos, comprender las necesidades comerciales y traducirlas en soluciones técnicas.</li>
              <li>Implementé y optimicé bases de datos PostgreSQL para almacenar y administrar datos de manera eficiente, incluida la creación de índices, vistas y procedimientos almacenados para mejorar el rendimiento y la escalabilidad.</li>
              <li>Colaboré y ejecuté consultas SQL complejas para extraer, transformar y cargar datos según los requisitos del negocio, garantizando la integridad y coherencia de los datos almacenados.</li>
              <li>Realicé migraciones de bases de datos y actualizaciones de esquemas de forma segura y eficiente, minimizando el tiempo de inactividad y garantizando la continuidad del servicio para los usuarios finales.</li>
              <li>Utilicé bibliotecas de JavaScript para mejorar las funcionalidades de la interfaz y proporcionar una experiencia de usuario perfecta.</li>
              <li>Componentes y widgets DHTMLX integrados para desarrollar aplicaciones web personalizables y ricas en funciones adaptadas a las preferencias del cliente.</li>
              <li>Proporcioné soporte y mantenimiento continuos, abordando los comentarios de los clientes e implementando actualizaciones y mejoras según fuera necesario.</li>
              <li>Participé en procesos de desarrollo ágiles, incluida la planificación de sprints, reuniones diarias y reuniones retrospectivas, para entregar software de alta calidad dentro de los plazos del proyecto.</li>
             </ul>}
       </div>
       <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-blue-500 border-2 sm:text-1xl md:text-3xl mb-3">
        <div className="grid grid-cols-2 m-5">
          <BsFillBuildingsFill className="text-blue-500" />
          <div className="grid justify-items-end">
            <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div6')}> {ventana.div6 ? 'Ocultar funciones': 'Ver funciones' }</span>
          </div>
        </div>
            <p className="text-2xl font-bold m-5">SmartQuick, Presencial, Colombia</p>
            <p className="text-sm m-5">Jul 2016 – Ene 2018<br/>
            <em>Software Developer.<br/> Stack: JavaScript – PHP - DHTMLX – PostgreSQL - HTML - CSS </em></p>
            {ventana.div6 &&  <ul className="text-sm list-disc m-7">
              <li>Diseñé, desarrollé y mantuve aplicaciones web relacionadas con temas de logística y transporte en países como México, Colombia y Perú utilizando PHP, JavaScript y framework DHTMLX para cumplir con los requisitos del cliente para interfaces de usuario interactivas y responsivas.</li>
              <li>Colaboré estrechamente con los clientes para recopilar requisitos, comprender las necesidades comerciales y traducirlas en soluciones técnicas.</li>
              <li>Implementé y optimicé bases de datos PostgreSQL para almacenar y administrar datos de manera eficiente, incluida la creación de índices, vistas y procedimientos almacenados para mejorar el rendimiento y la escalabilidad.</li>
              <li>Colaboré y ejecuté consultas SQL complejas para extraer, transformar y cargar datos según los requisitos del negocio, garantizando la integridad y coherencia de los datos almacenados.</li>
              <li>Realicé migraciones de bases de datos y actualizaciones de esquemas de forma segura y eficiente, minimizando el tiempo de inactividad y garantizando la continuidad del servicio para los usuarios finales.</li>
              <li>Utilicé bibliotecas de JavaScript para mejorar las funcionalidades de la interfaz y proporcionar una experiencia de usuario perfecta.</li>
              <li>Componentes y widgets DHTMLX integrados para desarrollar aplicaciones web personalizables y ricas en funciones adaptadas a las preferencias del cliente.</li>
              <li>Proporcioné soporte y mantenimiento continuos, abordando los comentarios de los clientes e implementando actualizaciones y mejoras según fuera necesario.</li>
              <li>Participé en procesos de desarrollo ágiles, incluida la planificación de sprints, reuniones diarias y reuniones retrospectivas, para entregar software de alta calidad dentro de los plazos del proyecto.</li>
             </ul>}
       </div>
       <div className="rounded-tr-lg bg-gray-800 h-auto cursor-pointer text-white hover:bg-dark-gray hover:border-yellow-500 border-2 sm:text-1xl md:text-3xl mb-3">
        <div className="grid grid-cols-2 m-5">
          <BsFillBuildingsFill className="text-yellow-500" />
          <div className="grid justify-items-end">
            <span className="m-3 p-2 rounded-lg bg-blue-700 hover:bg-blue-500 text-sm" onClick={() => abrirVentana('div7')}> {ventana.div7 ? 'Ocultar funciones': 'Ver funciones' }</span>
          </div>
        </div>
            <p className="text-2xl font-bold m-5">Colcan, Presencial, Colombia</p>
            <p className="text-sm m-5">Jul 2014 – Jul 2016<br/>
            <em>Software Developer.<br/>Tecnologìas: JavaScript – Java, (MVC), - JQuery – HTML - MySQL- HTML - CSS</em></p>
            {ventana.div7 &&  <ul className="text-sm list-disc m-7">
              <li>Diseñé, desarrollé y mantuve una aplicación web para control de temperatura usando Java, (MVC), JQuery, Bootstrap y HTML.</li>
              <li>Implementé nuevas funcionalidades y resolví problemas técnicos en la aplicación de control de temperaturas</li>
              <li>Utilicé frameworks como Bootstrap y HTML para crear interfaces de usuario interactivas y amigables.</li>
              <li>Implementé buenas prácticas de codificación y participé en revisiones de código para garantizar la calidad del software.</li>
              <li>Participé en la investigación y evaluación continua de nuevas tecnologías y metodologías para el mejoramiento y eficiencia de procesos de aplicación de temperaturas.</li>
              <li>Diseñé y administré bases de datos relacionales utilizando MySQL para garantizar la integridad de los datos y la eficiencia de las consultas.</li>
              <li>Consultas SQL optimizadas y esquemas de bases de datos diseñados para mejorar el rendimiento y la escalabilidad de las aplicaciones.</li>
              <li>Realicé copias de seguridad periódicas e implementé medidas de seguridad para proteger la integridad y confidencialidad de los datos almacenados en la base de datos MySQL.</li>
             </ul>}
       </div>
    </div>
    </div>
  );
}
