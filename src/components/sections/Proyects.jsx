const Proyects = () => {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-blue-400 mb-6 flex items-center gap-3">
        <h2>Proyectos</h2>
        <i className="fa-solid fa-lightbulb"></i>
      </header>
      <div className="flex flex-col gap-10">
        <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 grid md:grid-cols-2 gap-5 group">
          <div className="w-full bg-slate-200 dark:bg-gray-700/60 rounded-lg overflow-hidden">
            <img className="rounded-lg transition-all duration-500 transform translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7 w-full" src="src/assets/Imgs/Fuhecoweb.webp" alt="" />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pagina web Fuheco</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Realicé cambios en la página principal de la Fundación Hematológica de Colombia, mientras se trabaja en el diseño de una nueva versión más interactiva y visualmente atractiva. Además, colaboro en el desarrollo de aplicaciones internas para mejorar los procesos de los funcionarios.</p>
            <a href="https://www.fuheco.org.co/web/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400" target="_blank">
              Visitar
              <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Proyects;
