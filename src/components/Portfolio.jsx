import About from "./sections/About";
import Experience from "./sections/Experience";
import Proyects from "./sections/Proyects";
import Skills from "./sections/skills";
import Education from "./sections/Education";
const Portfolio = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
      <main className="flex flex-col gap-16">
        <About></About>
        <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"></hr>
        <Experience></Experience>
        <Proyects></Proyects>
        <Education></Education>
        <Skills></Skills>
      </main>
    </div>
  );
};

export default Portfolio;
