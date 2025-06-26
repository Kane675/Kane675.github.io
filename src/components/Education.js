import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
              <ul className="w-full flex flex-col items-start justify-between ml-4">
                  <Details
                      type="MSc Arts and Creative Technologies (Negotiated Study)"
                      time="2024 – 2025"
                      place="Staffordshire University"
                      info="Specialising in Procedural Content Generation and AI for games. Master's project focuses on system design and emergent play. Expected graduation: Autumn 2025."
                  />

                  <Details
                      type="BSc (Hons) Computer Games Development"
                      time="2021 – 2024"
                      place="Staffordshire University"
                      info="Covered core systems programming, gameplay mechanics, engine architecture, and tools development. Final year projects included AI-driven systems and procedural generation."
                  />

                  <Details
                      type="A-Levels: Maths, Physics, Computer Science"
                      time="2019 – 2021"
                      place="Joseph Wright Sixth Form College, Derby"
                      info="Built a strong foundation in problem-solving, logical thinking, and algorithmic design. Developed an early interest in simulation and game logic."
                  />
              </ul>
      </div>
    </div>
  );
};

export default Education;
