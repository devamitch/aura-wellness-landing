import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import {
  VideosSection,
  PodcastsSection,
  TutorialsSection,
} from '@/components/ContentSections'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import PartnersSection from '@/components/PartnersSection'
import TeamSection from '@/components/TeamSection'
import AboutUsSection from '@/components/AboutUsSection'
import PMDDEducationHub from '@/components/PMDDEducationHub'
import CommunitySection from '@/components/CommunitySection'
import FAQSection from '@/components/FAQSection'
import DownloadSection from '@/components/DownloadSection'
import BlogSection from '@/components/BlogSection'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import PrivacySection from '@/components/PrivacySection'
import Team from './Team'

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-dm-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PartnersSection />
        <PrivacySection />
        <AppShowcaseSection />
        <FeaturesSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

export default Index
