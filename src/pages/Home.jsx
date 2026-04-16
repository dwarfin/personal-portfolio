import Hero from '../components/Hero.jsx';
import TextType from '../components/TextType';
import PixelCardReveal from "../components/PixelCardReveal.jsx";

export default function Home() {
    return (
        <>
            <Hero />

            <section className="py-24 px-6 flex flex-col items-center justify-center gap-4 max-h-20">
                <TextType
                    className="text-4xl text-(--text-h) z-10"
                    text={[
                        "The credit belongs to the man in the arena.",
                        "We are what we repeatedly do. Excellence, therefore, is not an act, but a habit.",
                        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
                        "Never was anything great achieved without danger.",
                        "Change is the law of life. And those who look only to the past or present are certain to miss the future."
                    ]}
                    typingSpeed={40}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    cursorBlinkDuration={0.5}
                />
            </section>

            {/* About Cards */}
            <section className="py-32 mt-18 flex flex-col items-center justify-center gap-12">
                <div className="z-5 relative">
                    <h1 className="text-(--text-h)">
                        About Me
                    </h1>
                    <p>
                        Tap to learn more!
                    </p>
                </div>

                <div className="flex flex-row flex-wrap justify-center items-center gap-6">
                    <div className="group relative w-fit">
                        <PixelCardReveal variant="rosegold" className="relative w-50 h-50 overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1.5">
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                                <h2>
                                    Who I Am
                                </h2>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-5">
                                <p className="text-lg text-(--text-h)">
                                    I am a university student studying cybersecurity. I enjoy learning by building, experimenting, and studying.
                                </p>
                            </div>
                        </PixelCardReveal>
                    </div>

                    <div className="group relative w-fit">
                        <PixelCardReveal variant="softsteel" className="relative w-50 h-50 overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1.5">
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                                <h2>
                                    What I Do
                                </h2>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-5">
                                <p className="text-lg text-(--text-h)">
                                    I explore technologies, tools, and techniques related to cybersecurity. I building safe environments for testing and learning. I also enjoy software development.
                                </p>
                            </div>
                        </PixelCardReveal>
                    </div>

                    <div className="group relative w-fit">
                        <PixelCardReveal variant="feather" className="relative w-50 h-50 overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1.5">
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                                <h2>
                                    How I Work
                                </h2>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-5">
                                <p className="text-lg text-(--text-h)">
                                    I believe in learning by doing and understand that failure is a natural part of that process. I am always eager to learn more and improve my skills.
                                </p>
                            </div>
                        </PixelCardReveal>
                    </div>

                    <div className="group relative w-fit">
                        <PixelCardReveal variant="rosegold" className="relative w-50 h-50 overflow-hidden transition-transform duration-500 ease-out hover:-translate-y-1.5">
                            <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                                <h2>
                                    Where I'm Going
                                </h2>
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out px-5">
                                <p className="text-lg text-(--text-h)">
                                    My goal is to apply the knowledge and skills I have acquired to make a meaningful impact. I aspire to work in the field of cybersecurity.
                                </p>
                            </div>
                        </PixelCardReveal>
                    </div>
                </div>
            </section>

        </>
    );
}