import SEO from '@/components/custom/utils/SEO'
import React from 'react'
import Hero from './component/Hero'
import Features from './component/Feature'
import Services from './component/Services'
import Team from './component/Teams'
import Testimonials from './component/Testimoniale'
import Contact from './component/Contact'
import Map from './component/Map'
import BookingSystem from './component/BookingSystem'
import About from './component/About'

const Home: React.FC = () => {
    return (
        <>
            {/* Seo compoments */}
            <SEO
                title='Welcome to iPhone Store Cameroon - Your Trusted Apple Partner'
                description='Explore the latest iPhones and accessories at unbeatable prices. Enjoy a seamless shopping experience on our modern e-commerce platform.'
            />

            {/* App Comoments */}
            <>
                <Hero />
                <Features />
                <Services />
                <Team />
                <About />
                <Testimonials />
                <Contact />
                {/* <BookingSystem /> */}
                <Map />

            </>
        </>
    )
}

export default Home
