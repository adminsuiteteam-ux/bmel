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
        title="Engineering Excellence Beyond Expectations"
        description="Brownforte Mechanical Engineering Limited (BMEL) specializes in water treatment plants, sectional panel tanks, industrial pumping systems, and mechanical fabrication nationwide in Nigeria."
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

