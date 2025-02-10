import devskills from "../../data/devskills";
const Skills = () => {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-blue-400 mb-5 flex items-center gap-3">
        <h2>Habilidades</h2>
        <i className="fa-solid fa-laptop-code"></i>
      </header>
      <div className="flex flex-wrap items-center justify-start gap-2">
        {devskills.map((skill, index) => (
          <div key={index} className="border border-slate-300 dark:border-slate-700 p-1 gap-1 rounded-md flex items-center justify-center text-slate-500 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors duration-300 text-md">
            <div>{skill.icon}</div>
            <span className="text-gray-800 dark:text-gray-200 font-semibold">{skill.skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
