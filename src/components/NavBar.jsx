import { useState, useEffect } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="mx-auto max-w-3xl sticky top-0 z-10">
      <header className="w-full bottom-0 static flex justify-between items-center py-5 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
        <h2 className="font-bold text-2xl text-slate-700 dark:text-slate-100">FG</h2>
        <button className="flex items-center justify-center gap-4 outline-none rounded-full w-10 h-10 hover:scale-105 transition-transform duration-300" onClick={toggleTheme}>
          <i className="fa-solid fa-sun text-2xl hidden dark:block  text-slate-100"></i>
          <i className="fa-solid fa-moon text-2xl dark:hidden text-slate-700"></i>
        </button>
      </header>
    </div>
  );
};

export default NavBar;
