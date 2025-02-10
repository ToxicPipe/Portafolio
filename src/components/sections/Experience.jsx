import experiences from "../../data/experiences";

const Experience = () => {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-blue-400 mb-5 flex items-center gap-3">
        <h2>Experiencia</h2>
        <i className="fa-solid fa-briefcase"></i>
      </header>
      <div className="flex flex-col gap-5">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{experience.title}</h2>
            <div className="flex justify-between flex-wrap text-gray-400">
              <span className=" font-bold">{experience.company}</span>
              <p className="font-bold">{experience.time}</p>
            </div>
            <ul className="list-disc flex flex-col gap-1 ml-5 text-slate-700 dark:text-gray-300 text-sm">
              {experience.duties.map((duty, dutyIndex) => (
                <li key={dutyIndex}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
