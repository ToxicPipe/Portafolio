import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Importar los estilos de Tippy
import links from "../../data/links";

const About = () => {
  const [tooltipText, setTooltipText] = useState("Copiar correo");

  const handleEmailClick = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      setTooltipText("Copiado");
      setTimeout(() => {
        setTooltipText("Copiar correo");
      }, 2000); // Resetea el tooltip después de 2 segundos
    });
  };

  return (
    <section className="flex flex-col sm:flex-row items-center gap-5">
      <div className="relative w-52 h-52 bg-slate-200 dark:bg-gray-700/60 border-8 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
        <img src="src\\assets\\Imgs\\Desarrollador.webp" alt="" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-5">
        <div className="flex flex-col items-start gap-2 w-full">
          <h1 className="text-4xl text-center font-bold text-slate-800 dark:text-slate-100">Felipe González</h1>
          <p className="text-slate-600 text-lg font-semibold dark:text-slate-200">Desarrollador Web FullStack</p>
          <p className="text-sm text-slate-400 flex items-center gap-1 dark:text-slate-300">
            <i className="fa-solid fa-earth-americas"></i>Bogotá, Colombia
          </p>
        </div>
        <ul className="text-xl md:text-2xl flex justify-around gap-1">
          {links.map((link, index) => {
            if (link.href === "#") {
              return (
                <Tippy
                  content={tooltipText} // El contenido que cambia con el click
                  key={index}
                  trigger="mouseenter" // Muestra el tooltip al hacer hover
                  hideOnClick="false">
                  <a href={link.href} onClick={() => handleEmailClick(link.email)} className="border border-slate-300 dark:border-slate-700 p-2 rounded-md w-10 h-10 flex items-center justify-center text-slate-500 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300">
                    <i className={link.icon}></i>
                  </a>
                </Tippy>
              );
            }
            return (
              <Tippy content={link.tooltip} key={index}>
                <a href={link.href} target="_blank" className="border border-slate-300 dark:border-slate-700 p-2 rounded-md w-10 h-10 flex items-center justify-center text-slate-500 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300">
                  <i className={link.icon}></i>
                </a>
              </Tippy>
            );
          })}
        </ul>
        <a href="https://drive.google.com/file/d/1soufJkoR83cICWjLOM6iyW6uvw3zJZcO/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-slate-700 text-white p-2 rounded-md font-semibold hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors duration-300 w-full md:w-auto">
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default About;
