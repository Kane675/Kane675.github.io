import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
    return (
        <>
            <Head>
                <title>Kane Piggott's Portfolio</title>
                <meta
                    name="description"
                    content="The portfolio of Kane Piggott, 
        awarded both a bachelor's degree in Games Development and Master's by negotiated study 
        discover previews of notable projects and links to his socials"
                />
            </Head>

            <TransitionEffect />
            <article
                className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
            >
                <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
                    <div className="flex w-full items-start justify-between md:flex-col">
                        <div className="w-1/2 lg:hidden md:inline-block md:w-full">
                            <Image
                                src={profilePic}
                                alt="KanePiggott"
                                className="h-auto w-full"
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="Making Games Think, Not Just Look Good."
                                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                                I'm a game developer with a Bachelor's in Games Development and a Master's by Negotiated Study, focusing on AI and Procedural Content Generation in games. I specialize in Unreal Engine and C++, with additional experience in C#, Python, and Java.

                                I’m currently developing a Borderlands-inspired indie looter shooter and building tools for the Unreal Fab store as part of my personal development. My recent projects include a LLaMA-based AI dialogue roleplay system, a Boids swarm simulation tool, and a Wave Function Collapse city generator.

                                I'm actively looking for opportunities in the games industry. Have a look at what I’ve been working on — from AI-driven systems to gameplay tools designed for real-world development.
                            </p>
                            <div className="mt-2 flex items-center self-start lg:self-center">
                                <Link
                                    href="/CV.pdf"
                                    target={"_blank"}
                                    className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base`}
                                    download
                                >
                                    Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                                </Link>

                                <Link
                                    href="mailto:kane.piggott818@gmail.com"
                                    className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>

                <HireMe />
            </article>
        </>
    );
}