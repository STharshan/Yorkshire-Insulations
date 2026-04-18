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
        <section ref={ref} className="overflow-hidden bg-white py-30">
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
                            src="/about1.webp"
                            alt="Worker on roof"
                            className="w-full rounded-[10px] object-cover shadow-[0_18px_50px_rgba(10,22,48,0.2)]"
                        />
                    </motion.div>
                </div>

                <div className="lg:pl-10">
                    <p className="heading-font mb-4 text-[13px] font-bold uppercase tracking-[0.26em] text-[var(--brand-gold)]">
                        About Our Company
                    </p>

                    <h2 className="heading-font mb-8 text-[36px] font-bold leading-[1.2] text-[var(--brand-text)] md:text-[42px]">
                        Best Quality Roofing <br />
                        Services Providers
                    </h2>

                    <p className="mb-8 max-w-xl text-base leading-relaxed text-[var(--brand-muted)]">
                        Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui voluptatem sequi
                        nesciunt porro quisquam est, qui dolorem ipsum
                    </p>

                    <div className="mb-10 space-y-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center gap-4">
                                <div className="rounded-full border border-[var(--brand-success)] p-0.5">
                                    <Check className="text-[var(--brand-success)]" size={16} strokeWidth={3} />
                                </div>
                                <p className="text-base font-semibold text-[var(--brand-text)]">
                                    Do enim minim veniam quis nostrud exercitation
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="heading-font rounded-md bg-[var(--brand-gold)] px-7 py-3.5 text-[15px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[var(--brand-gold-hover)]">
                        More About
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
