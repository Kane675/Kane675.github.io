import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Project Images
import indie1 from "../images/projects/indie/indie1.jpg";
import indie2 from "../images/projects/indie/indie2.jpg";
import gradexImg from "../images/projects/GradEX2025.png";
import boids1 from "../images/projects/boids2/Fish1.png";
import boids2 from "../images/projects/boids2/Fish2.png";
import boids3 from "../images/projects/boids2/Fish3.png";
import city1 from "../images/projects/wfc2/CityGen1.png";
import city2 from "../images/projects/wfc2/CityGen2.png";
import city3 from "../images/projects/wfc2/CityGen3.png";
import groupProjectImg from "../images/projects/SpectralMoversArt.jpg";
import weapon1 from "../images/projects/weapon/gen1.png";
import weapon2 from "../images/projects/weapon/gen2.png";
import weapon3 from "../images/projects/weapon/gen3.png";
import weapon4 from "../images/projects/weapon/gen4.png";
import marioImg from "../images/projects/SpaceBros.jpg";
import mobileGamesImg from "../images/projects/mobile-games.png";
import TransitionEffect from "@/components/TransitionEffect";

import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";


const FramerImage = motion(Image);


const CarouselImage = ({ images, alt }) => {
    const sliderRef = useRef(null);
    const [sliderInstanceRef, setSliderInstanceRef] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useKeenSlider(
        sliderRef,
        {
            loop: true,
            slides: {
                perView: 1,
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created(slider) {
                setSliderInstanceRef(slider);
            },
        },
        []
    );

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderInstanceRef) {
                sliderInstanceRef.next();
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [sliderInstanceRef]);

    return (
        <div className="relative w-full">
            <div ref={sliderRef} className="keen-slider aspect-video overflow-hidden rounded-lg">
                {images.map((img, i) => (
                    <div key={i} className="keen-slider__slide">
                        <div className="relative w-full h-0 pb-[56.25%]"> {/* Maintain 16:9 aspect */}
                            <FramerImage
                                src={img}
                                alt={`${alt} image ${i + 1}`}
                                fill
                                className="object-cover rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                                priority={i === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 flex justify-center gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => sliderInstanceRef?.moveToIdx(idx)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-dark dark:bg-light" : "bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export { CarouselImage };


const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, images, isPortrait, isCarousel, link, github }) => {
    return (
        <article className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                {isCarousel ? (
                    <CarouselImage images={images} alt={title} />
                ) : (
                    <div
                        className={`relative w-full overflow-hidden rounded-lg ${isPortrait ? "aspect-[3/4]" : "aspect-video"
                            }`}
                    >
                        <FramerImage
                            src={images[0]}
                            alt={title}
                            fill
                            className="object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                )}
            </Link>

            <div className="mt-4 flex w-full flex-col items-start justify-between">
                <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>

                <Link href={link} target="_blank" className="underline-offset-2 hover:underline">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">{title}</h2>
                </Link>

                <div className="flex w-full items-center justify-between">
                    <Link href={link} target="_blank" className="rounded text-lg font-medium underline md:text-base">
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6" aria-label={title}>
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default function Projects() {
    return (
        <>
            <Head>
                <title>Modern Portfolio | Projects Page</title>
                <meta
                    name="description"
                    content="Showcasing game dev and software engineering projects including procedural generation, AI, and more."
                />
            </Head>

            <TransitionEffect />
            <main className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}>
                <Layout className="pt-16">
                    <AnimatedText
                        text="My Projects!"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Game Project"
                                title="Indie Development"
                                images={[indie1, indie2]}
                                isCarousel
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Exhibition Work"
                                title="GradEX"
                                images={[gradexImg]}
                                isPortrait
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="AI Simulation"
                                title="Boids"
                                images={[boids1, boids2, boids3]}
                                isCarousel
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Procedural Generation"
                                title="CityGen"
                                images={[city1, city2, city3]}
                                isCarousel
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Team Collaboration"
                                title="Group Project"
                                images={[groupProjectImg]}
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Weapon System"
                                title="Weapon Gen Prototype"
                                images={[weapon1, weapon2, weapon3, weapon4]}
                                isCarousel
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Remake"
                                title="Mario Clone"
                                images={[marioImg]}
                                link="#"
                                github="#"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Mobile Portfolio"
                                title="Mobile Games"
                                images={[mobileGamesImg]}
                                link="#"
                                github="#"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}