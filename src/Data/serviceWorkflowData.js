export const serviceWorkflowData = {
    windowTinting: {
        // Service badge
        badge: "Service Details",

        // About Service Section
        aboutService: {
            title: "About this Service",
            intro: "At Tomas Exterior, we provide premium automotive window tinting tailored to your vehicle and personal preferences. Using top-quality films and expert installation techniques, we ensure:",
            features: [
                "Heat reduction and glare control",
                "UV ray protection for interior surfaces",
                "Enhanced privacy for you and your passengers",
                "A modern, stylish finish that elevates your vehicle's appearance"
            ],
            outro: "Our team handles every detail with precision, from measurement to installation, ensuring a smooth, bubble-free finish that lasts for years.",

            // What's Included
            includedTitle: "What is included?",
            includedIntro: "Our window tinting service includes:",
            includedItems: [
                "Professional assessment of your vehicle's windows",
                "High-quality film selection for optimal heat and UV reduction",
                "Precise measurement and cutting of tint film",
                "Expert installation with a flawless, long-lasting finish",
                "Post-installation care advice and support"
            ],
            includedOutro: "We focus on precision, quality, and customer satisfaction in every project."
        },

        // How We Work Section
        howWeWork: {
            badge: "Working Process",
            title: "How We Work",
            description: "Our streamlined process ensures a hassle-free experience while delivering high-quality results for every vehicle.",
            steps: [
                {
                    id: "01",
                    title: "Booking & Inspection",
                    description: "Schedule a convenient appointment. Our technicians inspect your vehicle, discuss tint options, and recommend the best solution for your needs."
                },
                {
                    id: "02",
                    title: "Work Planning",
                    description: "We prepare the film and plan the installation process for a smooth, efficient workflow tailored to your vehicle."
                },
                {
                    id: "03",
                    title: "Fix And Install",
                    description: "Our experts carefully install the tint, ensuring perfect alignment, no bubbles, and a professional finish."
                },
                {
                    id: "04",
                    title: "Works Completed",
                    description: "We finalize the job with quality checks and provide post-installation advice to maintain the longevity of your tint."
                }
            ]
        },

        // Service Benefits Section
        benefits: {
            badge: "Benefits",
            title: "Service Benefits",
            intro: "Choosing Tomas Exterior for window tinting gives you:",
            items: [
                "Improved driving comfort with reduced heat and glare",
                "Protection against UV damage to your interior and skin",
                "Enhanced vehicle privacy and security",
                "Sleek, stylish appearance that elevates your car's look",
                "Long-lasting results from high-quality materials and professional installation"
            ],
            outro: "We prioritize precision, reliability, and customer satisfaction, delivering a tint that looks great and performs even better.",
            image: "tint-a.jpeg",
            imageAlt: "Window tinting work"
        },

        // Contact Form
        contactForm: {
            title: "Get In Touch",
            fields: {
                fullName: {
                    label: "Full Name",
                    placeholder: "John Doe",
                    type: "text"
                },
                phone: {
                    label: "Phone",
                    placeholder: "Enter your phone number",
                    type: "tel"
                },
                service: {
                    label: "Select A Service",
                    options: [
                        "Remodelling Service",
                        "Faucet & Leak Repairs"
                    ]
                },
                note: {
                    label: "Short Note",
                    placeholder: "How can we help?",
                    rows: 4
                }
            },
            submitButton: "Get Your Vehicle Tinted Today"
        },

        // Theme Colors
        colors: {
            primary: "#F21B23",
            secondary: "#404143"
        }
    },

   
};
