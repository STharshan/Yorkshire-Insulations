import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Maintaining your requested scroll animation logic
    const yBack = useTransform(scrollYProgress, [0, 1], [50, -150]);
    const yFront = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section ref={ref} className="py-30 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE: IMAGE COMPOSITION */}
                <div className="relative">
                    {/* Main Large Image (Top Left) */}
                    <div className="relative z-10 w-[85%] lg:w-[80%]">
                        <img
                            src="/about2.webp"
                            alt="Roofing background"
                            className="w-full object-cover"
                        />

                        {/* Floating Badge (Matches the white star card in image) */}
                        <motion.div  style={{ y: yBack }} className="absolute top-10 z-30">
                            <img
                                src="/about.png"
                                alt="Roofing background"
                                className="w-full object-cover "
                            />
                        </motion.div>
                    </div>

                    {/* Overlapping Front Image (Bottom Right) */}
                    <motion.div
                        style={{ y: yFront }}
                        className="absolute -bottom-50 -right-4 lg:-right-5 z-30 w-[80%] sm:w-[85%]"
                    >
                        <img
                            src="/about1.webp" // Replace with your bottom-right image
                            alt="Worker on roof"
                            className=" w-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* RIGHT SIDE: CONTENT */}
                <div className="lg:pl-10">
                    <p className="text-[#E9B155] font-bold uppercase text-sm mb-4">
                        About Our Company
                    </p>

                    <h2 className="text-4xl font-bold text-gray-900 leading-[1.4] mb-8">
                        Best Quality Roofing <br />
                        Services Providers
                    </h2>

                    <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-xl">
                        Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui voluptatem sequi
                        nesciunt porro quisquam est, qui dolorem ipsum
                    </p>

                    {/* LIST */}
                    <div className="space-y-4 mb-10">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex items-center gap-4">
                                <div className="bg-transparent border border-green-500 rounded-full p-0.5">
                                    <Check className="text-green-500" size={16} strokeWidth={3} />
                                </div>
                                <p className="text-gray-900 font-semibold text-base">
                                    Do enim minim veniam quis nostrud exercitation
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* BUTTON */}
                    <button className="bg-[#E9B155] hover:bg-[#d4a049] text-black font-bold uppercase tracking-wider px-7 py-3 rounded-md shadow-lg transition-all transform hover:-translate-y-1">
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