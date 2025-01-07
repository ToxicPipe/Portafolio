import {
  FaEarthAmericas,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDownload,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const iconContactClass =
  "bg-white ring-1 ring-black p-2 rounded-full hover:bg-black hover:text-white hover:cursor-pointer hover:scale-125 transition-all duration-300";

const iconsContact = [
  { id: "email", icon: <IoMdMail />, label: "Email" },
  { id: "phone", icon: <FaPhone />, label: "Phone" },
  { id: "linkedin", icon: <FaLinkedin />, label: "LinkedIn" },
  { id: "github", icon: <FaGithub />, label: "GitHub" },
  { id: "instagram", icon: <FaInstagram />, label: "Instagram" },
];

const Home = () => {
  return (
    <section className="w-full mx-auto flex items-center justify-center mt-[10vh] min-h-[90vh] scroll-mt-[10vh]" id="Home">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full flex justify-center">
          <img
            src="src/assets/Imgs/Desarrollador.webp"
            alt="Felipe González, Desarrollador Full Stack"
            className="w-full max-w-xl mx-auto"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold text-center md:text-left md:text-5xl">
            FELIPE GONZÁLEZ
          </h1>
          <h2 className="text-lg font-semibold text-blue-500 text-center md:text-left md:text-xl">
            Full Stack Software Developer
          </h2>
          <p className="flex items-center justify-center gap-2 text-gray-500 md:justify-start md:text-base">
            <FaEarthAmericas />
            Bogotá, Colombia
          </p>
          <ul
            role="list"
            className="flex justify-center items-center gap-4 text-xl my-4 md:justify-start md:text-xl"
          >
            {iconsContact.map(({ id, icon, label }) => (
              <li
                key={id}
                className={iconContactClass}
                aria-label={label}
                aria-hidden="true"
              >
                {icon}
              </li>
            ))}
          </ul>
          <button
            className="flex items-center justify-center gap-2 bg-black text-white rounded-full px-6 py-3 mx-auto ring-white ring-1 hover:bg-white hover:ring-black hover:text-black hover:scale-105 transition-all duration-300 md:mx-0 md:text-lg"
            aria-label="Download CV of Felipe González"
          >
            <FaDownload />
            Descargar CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
