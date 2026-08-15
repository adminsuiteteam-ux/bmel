import SEO from '@/components/ui/SEO'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Industries from '@/components/home/Industries'
import Testimonials from '@/components/home/Testimonials'
import Certifications from '@/components/home/Certifications'
import Partners from '@/components/home/Partners'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Water Engineering, Deep Borehole Drilling & Industrial Solutions"
        description="Brownforte Mechanical Engineering Limited (BMEL) is Nigeria's premier water engineering firm specializing in deep borehole drilling, industrial water treatment plants, elevated Braithwaite steel tanks, and MEP contracting."
        keywords="Brownforte Mechanical Engineering Limited, BMEL, borehole drilling Nigeria, water treatment plants Lagos, Braithwaite steel tanks, MEP contractor Nigeria, hydrogeological surveys, industrial water engineering, SUBEB water projects, FGGS Jalingo tank"
      />
      
      {/* HomePage Sections Layout */}
      <HeroSection />
      <AboutSection />
      <Partners />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <Industries />
      <Testimonials />
      <Certifications />
      <CTASection />
    </>
  )
}

