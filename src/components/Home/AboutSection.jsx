import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const yBack = useTransform(scrollYProgress, [0, 1], [50, -150]);
    const yFront = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section id="about" ref={ref} className="overflow-hidden bg-white py-30">
            <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">

                <div className="relative">
                    <div className="relative z-10 w-[85%] lg:w-[80%]">
                        <img
                            src="/about2.webp"
                            alt="Roofing background"
                            className="w-full rounded-[10px] object-cover shadow-[var(--brand-media-shadow)]"
                        />

                        <motion.div style={{ y: yBack }} className="absolute top-10 z-30">
                            <img
                                src="/about.png"
                                alt="Roofing background"
                                className="w-full object-cover"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ y: yFront }}
                        className="absolute -bottom-50 -right-4 z-30 w-[80%] sm:w-[85%] lg:-right-5"
                    >
                        <img
                            src="/logo.png"
                            alt="Worker on roof"
                            className="w-full rounded-[10px] object-cover "
                        />
                    </motion.div>
                </div>

                <div className="lg:pl-10">
                    <p className="heading-font mb-4 text-[13px] font-bold uppercase tracking-[0.26em] text-[var(--brand-gold)]">
                        ABOUT YORKSHIRE INSULATION
                    </p>

                    <h2 className="heading-font mb-8 text-[36px] font-bold leading-[1.2] text-[var(--brand-text)] md:text-[42px]">
                        Keeping Yorkshire Homes Warm<br />
                        Since Day One
                    </h2>

                    <p className="mb-8 max-w-xl text-base leading-relaxed text-[var(--brand-muted)]">
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
                                <p className="text-base font-semibold text-[var(--brand-text)] leading-tight">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="heading-font rounded-md bg-[var(--brand-gold)] px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[var(--brand-gold-hover)]">
                        About Us
                    </button>
                </div>
            </div>

            <style jsx global>{`
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
