import educations from "../../data/education";
const Education = () => {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-blue-400 mb-5 flex items-center gap-3">
        <h2>Educación</h2>
        <i className="fa-solid fa-graduation-cap"></i>
      </header>
      <div className="flex flex-col gap-5">
        {educations.map((education, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{education.place}</h2>
            <div className="flex justify-between flex-wrap text-gray-400">
              <span className=" font-bold">{education.title}</span>
              <p className="font-bold">{education.time}</p>
            </div>
            <a
              href={education.certificate || "#"}
              className={`flex items-start ${education.certificate ? "text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300" : "hidden"}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver certificado
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
