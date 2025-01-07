import { projectLinks } from "../../data/Links";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="w-full p-5 scroll-mt-[10vh]">
      <h2 className="text-2xl font-bold uppercase text-black text-center">
        Portafolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projectLinks.map((proyecto) => {
          return (
            <div
              className="max-w-xs bg-white border border-gray-400 rounded-lg shadow my-2"
              key={proyecto.title} // Cambiar a una propiedad única del proyecto
            >
              <a href={proyecto.href}>
                <img
                  className="rounded-t-lg"
                  src={proyecto.src}
                  alt={proyecto.title}
                />{" "}
                {/* Usar 'alt' con el título */}
              </a>
              <div className="p-5">
                <a href={proyecto.href}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {proyecto.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">
                  {proyecto.description}
                </p>
                <a
                  href={proyecto.href}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 gap-1 transition-all duration-150"
                >
                  Ver proyecto
                  <FaArrowAltCircleRight />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
