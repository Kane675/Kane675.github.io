import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { Gamepad2 } from "lucide-react";

const Footer = () => {
    return (
        <footer
            className="w-full border-t-2 border-solid border-dark 
      font-medium text-lg dark:text-light dark:border-light sm:text-base"
        >
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:gap-4">
                <span>{new Date().getFullYear()} &copy; Kane675 — Game Developer Portfolio</span>

                <div className="flex items-center">
                    Built with{" "}
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                        &#9825;
                    </span>
                    by{" "}
                    <Link
                        href="https://github.com/Kane675"
                        target="_blank"
                        className="underline underline-offset-2 pl-1"
                    >
                        Kane
                    </Link>
                </div>

                <div className="flex gap-4">
                    <Link
                        href="https://github.com/Kane675"
                        target="_blank"
                        className="underline underline-offset-2"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/kane-piggott-468644225/"
                        target="_blank"
                        className="underline underline-offset-2"
                    >
                        LinkedIn
                    </Link>
                </div>
            </Layout>
        </footer>
    );
};


export default Footer;
