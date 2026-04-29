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
    return (
        <div>
            <Seo
                title="Yorkshire Insulation | Loft, Cavity Wall, Spray Foam Removal & More"
                description="Yorkshire Insulation provides loft insulation, cavity wall insulation, spray foam removal, underfloor insulation, and new build insulation across Yorkshire."
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
                    "@type": "LocalBusiness",
                    name: "Yorkshire Insulation",
                    areaServed: "Yorkshire",
                    telephone: "+44 7590 250335",
                    email: "info@yorkshireinsulationsolutions.co.uk",
                    url: "https://insulateyorkshire.co.uk/",
                    image: "https://insulateyorkshire.co.uk/heroimage.jpeg",
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
