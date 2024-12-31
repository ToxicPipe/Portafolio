import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white h-[14vh]">
      <nav className="flex justify-between items-center py-8 lg:py-4 px-5">
        <h2 className="text-3xl font-bold">FG</h2>
        <div className="lg:flex hidden gap-12 text-md">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-black font-medium hover:scale-105 transition-transform duration-150"
            >
              {link.title}
            </a>
          ))}
        </div>
        <motion.div
          whileTap={{ scale: 1.1 }}
          className="cursor-pointer lg:hidden text-3xl text-black"
        >
          <FaBars onClick={toggleMenu}>Menu</FaBars>
        </motion.div>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-white"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center py-8 px-5">
                <h1 className="text-3xl font-bold">FG</h1>
                <motion.div
                  whileTap={{ scale: 1.2 }}
                  className="cursor-pointer text-md text-3xl"
                >
                  <FaXmark onClick={toggleMenu} />
                </motion.div>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-10"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden w-full">
                    <MobileNavLink
                      title={link.title}
                      href={link.href}
                      closeMenu={closeMenu}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Variantes para los enlaces del menú móvil
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

// Componente del enlace en el menú móvil
const MobileNavLink = ({ title, href, closeMenu }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-xl uppercase hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 font-semibold"
    >
      <a href={href} className="block text-center p-5" onClick={closeMenu}>
        {title}
      </a>
    </motion.div>
  );
};

export default Navbar;
