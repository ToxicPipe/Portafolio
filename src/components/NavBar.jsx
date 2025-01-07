import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navLinks } from "../data/Links";

const menuAnimation = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.7, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerAnimation = {
  initial: {
    transition: { staggerChildren: 0.2, staggerDirection: -1 },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const mobileLinkAnimation = {
  initial: {
    y: "30vh",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-[10vh] bg-white">
      <nav className="flex justify-between items-center w-full p-5">
        <h2 className="text-3xl font-bold">FG</h2>
        <div className="md:flex hidden gap-12 text-lg">
          {navLinks.map((link) => (
            <NavLink key={link.title} {...link} />
          ))}
        </div>
        <motion.div
          whileTap={{ scale: 1.1 }}
          className="cursor-pointer md:hidden text-3xl text-black"
          aria-label="Open menu"
        >
          <FaBars onClick={toggleMenu} />
        </motion.div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-full origin-top bg-black text-white"
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center p-5">
                <h1 className="text-3xl font-bold">FG</h1>
                <motion.div
                  whileTap={{ scale: 1.2 }}
                  className="cursor-pointer text-md text-3xl"
                  aria-label="Close menu"
                >
                  <FaXmark onClick={toggleMenu} />
                </motion.div>
              </div>
              <motion.div
                variants={containerAnimation}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-5"
              >
                {navLinks.map((link) => (
                  <MobileNavLink
                    key={link.title}
                    {...link}
                    closeMenu={closeMenu}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLink = ({ title, href }) => (
  <a
    href={href}
    className="text-black font-semibold hover:underline transition-all duration-300"
    aria-label={`Go to ${title}`}
  >
    {title}
  </a>
);

const MobileNavLink = ({ title, href, closeMenu }) => (
  <motion.div
    variants={mobileLinkAnimation}
    className="text-xl uppercase hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 font-semibold w-full text-center"
  >
    <a
      href={href}
      className="block text-center p-5"
      onClick={closeMenu}
      aria-label={`Go to ${title}`}
    >
      {title}
    </a>
  </motion.div>
);

export default Navbar;
