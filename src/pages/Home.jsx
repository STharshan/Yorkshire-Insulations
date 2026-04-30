import React from 'react'

import FAQSection from '../components/Home/FAQSection'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import FeatureCards from '../components/Home/FeatureCards'
import { WhatWeDo } from '../components/Home/WhatWeDo'
import RecentProject from '../components/Home/RecentProject'
import ContactSection from '../components/Home/ContactSection'
import Seo from "../components/Seo";

const Home = () => {
    const siteUrl = "https://insulateyorkshire.co.uk";

    return (
        <div>
            <Seo
                title="Yorkshire Insulation | Loft, Cavity Wall & Spray Foam Experts"
                description="Yorkshire's trusted insulation specialists. Loft, cavity wall, spray foam removal, underfloor and new build insulation across Yorkshire and beyond."
                keywords="Yorkshire insulation, loft insulation Yorkshire, cavity wall insulation Yorkshire, spray foam removal Yorkshire, underfloor insulation Yorkshire, new build insulation Yorkshire"
                canonical="https://insulateyorkshire.co.uk/"
                ogSiteName="Yorkshire Insulation"
                ogTitle="Yorkshire Insulation | Loft, Cavity Wall & Spray Foam Experts"
                ogDescription="Yorkshire's trusted insulation specialists. Loft, cavity wall, spray foam removal, underfloor and new build insulation across Yorkshire and beyond."
                geo={{
                    region: "GB-YOR",
                    placename: "Yorkshire",
                    position: "53.8;-1.5",
                }}
                ogImage="https://insulateyorkshire.co.uk/og-image.jpg"
                ogImageAlt="Yorkshire Insulation - Professional insulation services across Yorkshire"
                twitterTitle="Yorkshire Insulation | Loft, Cavity Wall & Spray Foam Experts"
                twitterDescription="Yorkshire's trusted insulation specialists. Loft, cavity wall, spray foam removal, underfloor and new build insulation across Yorkshire and beyond."
                twitterImage="https://insulateyorkshire.co.uk/og-image.jpg"
                schema={{
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LocalBusiness",
                            "name": "Yorkshire Insulation",
                            "description": "Professional insulation installation across Yorkshire and beyond. Loft, cavity wall, spray foam removal, underfloor, and new build insulation.",
                            "url": siteUrl,
                            "telephone": "07526322379",
                            "email": "info@yorkshireinsulationsolutions.co.uk",
                            "address": {
                                "@type": "PostalAddress",
                                "addressRegion": "Yorkshire",
                                "addressCountry": "GB"
                            },
                            "areaServed": [
                                { "@type": "AdministrativeArea", "name": "West Yorkshire" },
                                { "@type": "AdministrativeArea", "name": "South Yorkshire" },
                                { "@type": "AdministrativeArea", "name": "North Yorkshire" },
                                { "@type": "AdministrativeArea", "name": "East Yorkshire" },
                                { "@type": "AdministrativeArea", "name": "Lancashire" },
                                { "@type": "AdministrativeArea", "name": "Nottinghamshire" }
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Insulation Services",
                                "itemListElement": [
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loft Insulation" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cavity Wall Insulation" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spray Foam Removal" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underfloor Insulation" } },
                                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Build Insulation" } }
                                ]
                            }
                        },
                        {
                            "@type": "WebSite",
                            "name": "Yorkshire Insulation",
                            "url": siteUrl
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "How much does loft insulation cost in Yorkshire?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "The cost depends on the size of your loft and the type of insulation used. We assess every property individually so you get an accurate price before any work begins - no hidden charges and no obligation."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "What is cavity wall insulation and is my home suitable?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Cavity wall insulation involves injecting insulation material into the gap between your inner and outer walls. Most Yorkshire homes built between 1920 and 1980 are suitable. We assess your property and let you know exactly what is possible."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Will insulation work cause disruption to my home?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Most installations are completed in a single day with minimal mess. Cavity wall work is done entirely from outside. We always leave the property clean and tidy."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can spray foam insulation affect my mortgage?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Some lenders have raised concerns about certain types of spray foam in roof spaces. We only use approved products and will always advise you on the best option for your property before any work begins."
                                    }
                                }
                            ]
                        },
                        {
                            "@type": "WebPage",
                            "name": "Yorkshire Insulation | Loft, Cavity Wall, Spray Foam Removal & More",
                            "description": "Yorkshire trusted insulation specialists. Loft, cavity wall, spray foam removal, underfloor and new build insulation across Yorkshire and beyond.",
                            "url": siteUrl
                        }
                    ]
                }}
            />
            <HeroSection />
            <AboutSection />
            <FeatureCards />
            <WhatWeDo />
          
            <RecentProject />
            <FAQSection />
            <ContactSection />
        </div>
    )
}

export default Home
