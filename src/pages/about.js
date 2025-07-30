import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, value, isInView]);

    useEffect(
        () =>
            springValue.on("change", (latest) => {
                if (ref.current && latest.toFixed(0) <= value) {
                    ref.current.textContent = latest.toFixed(0);
                }
            }),
        [springValue, value]
    );

    return <span ref={ref} />;
}

export default function About() {
    return (
        <>
            <Head>
                <title>Kane&rsquo;s Game Dev Portfolio | About Page</title>
                <meta
                    name="description"
                    content="Discover more about Kane, a game developer specializing in Unreal Engine,
          procedural content generation, and AI systems. Learn about his technical experience,
          education, and indie development work."
                />
            </Head>

            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="About Me!"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />

                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                BIOGRAPHY
                            </h2>
                            <p className="font-medium">
                                Hi, I&apos;m <strong>Kane</strong>, a game developer with a strong technical
                                background in gameplay systems, AI, and procedural content generation.
                                I started as a hobbyist and worked my way through a BSc in Games Development
                                and now an MSc focusing on AI and PCG.
                            </p>
                            <p className="my-4 font-medium">
                                My primary expertise is in Unreal Engine 5 with C++, though I also work with
                                Python, C#, and Unity. I&rsquo;m currently developing tools for the Unreal Fab
                                marketplace and building an indie Borderlands-inspired looter shooter with a
                                focus on systems-driven and modular design.
                            </p>
                            <p className="font-medium">
                                I&rsquo;ve led collaborative game projects, participated in game jams, and earned
                                recognition through GradEX for my technical contributions. I&rsquo;m passionate
                                about designing gameplay that&rsquo;s not just fun — but built on solid, scalable
                                engineering. I&rsquo;m currently seeking opportunities in the games industry where
                                I can keep pushing those ideas forward.
                            </p>
                        </div>

                        <div
                            className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
                bg-light p-8 dark:border-light dark:bg-dark
                xl:col-span-4 md:col-span-8 md:order-1"
                        >
                            <div
                                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl 
                bg-dark dark:bg-light"
                            />
                            <Image
                                className="h-auto w-full rounded-2xl"
                                src={profile}
                                alt="Kane"
                                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                                priority
                            />
                        </div>
                    </div>

                    <Skills />
                    {/* <Experience /> */}
                    <Education />
                </Layout>
            </main>
        </>
    );
}

