import React from 'react'
import ServiceSection from '../components/Home/ServiceSection'
import FAQSection from '../components/Home/FAQSection'
import HeroSection from '../components/Home/HeroSection'
import AboutSection from '../components/Home/AboutSection'
import FeatureCards from '../components/Home/FeatureCards'
import { WhatWeDo } from '../components/Home/WhatWeDo'
import RecentProject from '../components/Home/RecentProject'
import ContactSection from '../components/Home/ContactSection'

const Home = () => {
    return (
        <div>
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
