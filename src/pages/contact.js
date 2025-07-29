import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus("✅Thank you for reaching out! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("❌ Something went wrong. Try again later.");
        }
    }

    return (
        <>
            <Head>
                <title>Contact | Simple Portfolio</title>
                <meta
                    name="description"
                    content="Get in touch with me for project inquiries, collaborations, or questions."
                />
            </Head>
            <TransitionEffect />
            <main className="w-full flex flex-col items-center justify-center dark:text-light min-h-screen">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Let's Talk!"
                        className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-center"
                    />

                    <section className="max-w-2xl mx-auto bg-light dark:bg-dark p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <label className="flex flex-col">
                                <span className="font-semibold mb-1">Name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark dark:border-light"
                                    placeholder="Your name"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="font-semibold mb-1">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark dark:border-light"
                                    placeholder="Your email"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="font-semibold mb-1">Message</span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="border border-gray-400 rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark dark:border-light"
                                    placeholder="Write your message here"
                                />
                            </label>

                            <button
                                type="submit"
                                className="bg-primary text-light font-semibold px-6 py-3 rounded-md hover:bg-primary-dark transition"
                            >
                                Send Message
                            </button>
                        </form>

                        {status && (
                            <p className="mt-4 text-center text-green-600 dark:text-green-400">
                                {status}
                            </p>
                        )}

                        <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:kane.piggott818@gmail.com"
                                    className="underline"
                                >
                                    kane.piggott818@gmail.com
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href="tel:07913830113" className="underline">
                                    07913830113
                                </a>
                            </p>
                            <p>
                                LinkedIn:{" "}
                                <a
                                    href="https://www.linkedin.com/in/kane-piggott"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline"
                                >
                                    linkedin.com/in/kane-piggott
                                </a>
                            </p>
                        </div>
                    </section>
                </Layout>
            </main>
        </>
    );
}
