import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

export default function AboutSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yBack = useTransform(scrollYProgress, [0, 1], [30, -40]);
    const yFront = useTransform(scrollYProgress, [0, 1], [20, -60]);

    return (
        <section id="about" ref={ref} className="overflow-hidden bg-white py-1 md:py-10 scroll-m-20">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">

                {/* IMAGE COMPOSITION */}
                <div className="relative order-1 lg:order-none">
                    {/* Main Background Image */}
                    <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto">
                        <img
                            src="/about.jpeg"
                            alt="Roofing background"
                            className="w-full rounded-[10px] object-cover shadow-xl"
                        />
                    </div>

                    {/* Front Floating Logo/Image */}
                    <Motion.div
                        style={{ y: yFront }}
                        className="absolute -bottom-10 right-0 z-30 w-[60%] sm:w-[50%] sm:right-0"
                    >
                        <img
                            src="/logo.png"
                            alt="Yorkshire Insulation Logo"
                            className="w-full rounded-[10px] object-cover"
                        />
                    </Motion.div>
                </div>

                {/* TEXT CONTENT */}
                <div className="lg:pl-10 mt-12 lg:mt-0">
                    <p className="heading-font mb-4 text-[12px] md:text-[13px] font-bold uppercase tracking-[0.26em] text-[var(--brand-gold)]">
                        ABOUT YORKSHIRE INSULATION
                    </p>

                    <h2 className="heading-font mb-6 text-[30px] font-bold leading-[1.2] text-[var(--brand-text)] md:text-[42px]">
                        Keeping Yorkshire Homes Warm<br className="hidden md:block" />
                        Since Day One
                    </h2>

                    <p className="mb-8 max-w-xl text-sm md:text-base leading-relaxed text-[var(--brand-muted)]">
                        We're a Yorkshire-based insulation company helping homeowners across the region reduce heat
                        loss, lower energy bills, and make their homes more comfortable year round. From a single loft to a full
                        external wall installation - we handle it all, properly.
                    </p>

                    <div className="mb-10 space-y-4">
                        {[
                            "Fully accredited installers - trusted across Yorkshire",
                            "All major insulation types covered under one roof",
                            "Free surveys with no obligation and no hard sell"
                        ].map((text, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 rounded-full border border-[var(--brand-success)] p-0.5">
                                    <Check className="text-[var(--brand-success)]" size={14} strokeWidth={4} />
                                </div>
                                <p className="text-sm md:text-base font-semibold text-[var(--brand-text)] leading-tight">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <HashLink smooth to="/#contact" className="block w-full md:w-auto heading-font bg-[var(--brand-gold)] px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[var(--brand-gold-hover)] text-center">
                        Get a Free Quote
                    </HashLink>
                </div>
            </div>

            <style jsx global>{`
                :root {
                    --brand-gold: #c5a059;
                    --brand-gold-hover: #b48f48;
                    --brand-text: #1a1a1a;
                    --brand-muted: #666666;
                    --brand-success: #22c55e;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
            `}</style>
        </section>
    );
}
