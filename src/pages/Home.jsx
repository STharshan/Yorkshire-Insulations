import React from 'react'
import ServiceSection from '../components/Home/ServiceSection'
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
                canonical="https://www.yorkshireinsulationsolutions.co.uk/"
                geo={{
                    region: "GB-YOR",
                    placename: "Yorkshire",
                    position: "53.8;-1.5",
                }}
                ogImage="/heroimage.jpeg"
                ogImageAlt="Yorkshire Insulation - Professional insulation services across Yorkshire"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    name: "Yorkshire Insulation",
                    areaServed: "Yorkshire",
                    telephone: "+44 7590 250335",
                    email: "info@yorkshireinsulationsolutions.co.uk",
                    url: "https://www.yorkshireinsulationsolutions.co.uk/",
                    image: "https://www.yorkshireinsulationsolutions.co.uk/heroimage.jpeg",
                }}
            />
            <HeroSection />
            <AboutSection />
            <FeatureCards />
            <WhatWeDo />
            <ServiceSection />
            <RecentProject />
            <FAQSection />
            <ContactSection />
        </div>
    )
}

export default Home
