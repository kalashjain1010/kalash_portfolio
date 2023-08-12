import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animate, easeIn, easeInOut, motion, spring } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";


const containerVariants = {
  open: {
    width: `240px`,
    transition: {
      staggerChildren: 0.1,
      
    },
  },
  closed: {
    width: `60px`,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
}

const childVariants = {
  open: { opacity: 1, y:200 },
  closed: { opacity: 0, y:0 },
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > -180);
   });
 }, [5000]);


  

  return (
    <nav
      className={`${styles.paddingX} ${scroll ? "bg-[#333333]" : "bg-[]" } w-full flex items-center py-5 fixed top-0 z-20 `}
    >
      <div className=" w-full flex items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >

            {/* Logo is Appearing Here  */}

          <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-full" />
          <p className="text-white text-[15px] font-bold cursor-pointer flex">
      
            
          </p>
        </Link>


          {/* Nav Links are HERE  */}
          <motion.div 
          className="ml-auto"
          animate={{
            y: 0,
            x: 0
          }}
          initial = {{
            x: 1000
          }}

          transition={{
            type: "spring",
            stiffness: 100

          }}
          
          >
          <ul className="list-none ml-[auto] hidden sm:flex flex-row gap-16">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-[#b1ecdc]" : "text-[#a6a2bf]"
              } hover:text-[#83dcc6] text-[20px]
             font-bold cursor-pointer
             transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-all ...
             `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}> {Link.title}</a>
            </li>
          ))}
        </ul>
          </motion.div>


        <motion.div
        initial={`closed`}
        animate={toggle ? `open` : `closed`}
        variants={containerVariants}
        transition={{
          duration: 1,
        }}

        className="sm:hidden flex flex-1 justify-end
       items-center "
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
          initial={{ opacity: 0, y:200 }}
          variants={childVariants}
          animate = {{
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100
          }}
          
          className={`${ !toggle
               ? "hidden"
               : "flex"
            }  p-6 backdrop-blur-sm bg-[#63988b] ... absolute top-20
               right-0 mx-4 my-2 min-[140px] z-0 rounded-xl`}
          >
            <ul
              className="list-none flex justify-end items-start
        flex-col gap-4"
            >
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-white"
                  } font-poppins text-[16px]
                    cursor-pointer font-medium `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
                  }}
                >
                  <a href={`#${Link.id}`}> {Link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
