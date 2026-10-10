import { BookOpen, Heart, Users, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { memo, useMemo } from 'react'

// Animation variants for better performance
const animationVariants = {
  card: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 },
  },
  text: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
}

// Icon data for better maintainability
const MISSION_ICONS = [
  {
    Icon: Heart,
    label: 'Support',
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-500',
    ariaLabel: 'Support - heart icon',
  },
  {
    Icon: Users,
    label: 'Community',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-500',
    ariaLabel: 'Community - users icon',
  },
  {
    Icon: Sparkles,
    label: 'Innovation',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-500',
    ariaLabel: 'Innovation - sparkles icon',
  },
]

// Content as separate paragraphs
const ABOUT_CONTENT = [
  `MyTeal started with a conversation between two friends. Each bringing a unique perspective to the table. One was deep in the world of tech, developing personalized health tools aimed at making care more intuitive and accessible.`,
  `What began as a casual catch-up quickly turned into a passionate brainstorm. They shared frustrations about how hard it is for people to get clear, supportive tools for managing premenstrual disorders.`,
  `That spark led to an initial idea. Something simple, but deeply intentional. It wasn't just about tracking symptoms. It was about empowering users to recognize patterns, validate their experiences, and get the support they deserve.`,
  `Partnering with IAPMD Canada and researchers at the University of Regina, the team began shaping the app into something bigger: a trusted companion for anyone navigating the often-overlooked complexities of premenstrual disorders.`,
  `MyTeal is more than just a tracking app. It's a reflection of collaboration, community, and a shared belief that people deserve better tools and better care, through every phase of their cycle.`,
]

// Optimized icon component
interface MissionIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  bgColor: string
  iconColor: string
  ariaLabel: string
}

const MissionIcon = memo(
  ({ Icon, label, bgColor, iconColor, ariaLabel }: MissionIconProps) => (
    <div className="flex flex-col items-center">
      <div
        className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center mb-2 transition-transform hover:scale-105`}
        role="img"
        aria-label={ariaLabel}
      >
        <Icon width={20} height={20} className={iconColor} aria-hidden="true" />
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  )
)

MissionIcon.displayName = 'MissionIcon'

// Optimized mission card component
const MissionCard = memo(() => (
  <motion.div
    {...animationVariants.card}
    viewport={{ once: true }}
    className="relative z-10 bg-white p-6 md:p-8 rounded-3xl shadow-lg flex flex-col items-center justify-center
      w-[320px] h-[340px] md:w-[340px] md:h-[360px]
      border-4 border-white transition-transform hover:scale-105"
    style={{ boxShadow: '0 8px 32px 0 rgba(31, 152, 155, 0.15)' }}
    role="region"
    aria-labelledby="mission-title"
  >
    {/* Main mission icon */}
    <div
      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center shadow-inner"
      role="img"
      aria-label="Mission - book icon representing learning and growth"
    >
      <BookOpen
        size={36}
        className="text-teal-600 md:w-10 md:h-10"
        aria-hidden="true"
      />
    </div>

    {/* Mission content */}
    <div className="text-center space-y-3 mt-4">
      <h3
        id="mission-title"
        className="text-xl md:text-2xl font-bold text-gray-800"
      >
        Our Mission
      </h3>
      <p className="text-gray-600 max-w-xs text-sm md:text-base leading-relaxed">
        To empower individuals with premenstrual disorders through innovative
        tools and compassionate support.
      </p>
    </div>

    {/* Mission icons */}
    <div
      className="flex space-x-6 md:space-x-8 pt-4 md:pt-6"
      role="list"
      aria-label="Our core values"
    >
      {MISSION_ICONS.map((iconData, index) => (
        <div key={iconData.label} role="listitem">
          <MissionIcon {...iconData} />
        </div>
      ))}
    </div>
  </motion.div>
))

MissionCard.displayName = 'MissionCard'

// Optimized text highlighting function
const useHighlightedText = (text) => {
  return useMemo(() => {
    const parts = text.split(/(MyTeal)/g)
    return parts.map((part, index) =>
      part === 'MyTeal' ? (
        <span key={index} className="text-teal-600 font-bold">
          MyTeal
        </span>
      ) : (
        part
      )
    )
  }, [text])
}

// Paragraph component for better reusability
interface AboutParagraphProps {
  text: string
  className?: string
}

const AboutParagraph = memo(({ text, className = '' }: AboutParagraphProps) => {
  const highlightedText = useHighlightedText(text)

  return (
    <p className={`text-lg leading-relaxed text-gray-700 mb-6 ${className}`}>
      {highlightedText}
    </p>
  )
})

AboutParagraph.displayName = 'AboutParagraph'

// Desktop layout component with updated layout
const DesktopLayout = memo(() => {
  return (
    <div className="relative hidden md:block max-w-6xl mx-auto">
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl">
        {/* Three column grid: left paragraphs, center mission card, right paragraphs */}
        <div className="grid grid-cols-3 gap-8 items-start mb-8">
          {/* Left column - first 2 paragraphs */}
          <div className="space-y-6">
            {ABOUT_CONTENT.slice(0, 2).map((paragraph, index) => (
              <AboutParagraph
                key={index}
                text={paragraph}
                className="text-justify"
              />
            ))}
          </div>

          {/* Center column - mission card (vertically centered) */}
          <div className="flex justify-center items-center min-h-full">
            <MissionCard />
          </div>

          {/* Right column - next 2 paragraphs */}
          <div className="space-y-6">
            {ABOUT_CONTENT.slice(2, 4).map((paragraph, index) => (
              <AboutParagraph
                key={index + 2}
                text={paragraph}
                className="text-justify"
              />
            ))}
          </div>
        </div>

        {/* Full width bottom paragraph */}
        <div className="w-full">
          <AboutParagraph
            text={ABOUT_CONTENT[4]}
            className="text-center text-xl font-medium text-gray-800 leading-relaxed"
          />
        </div>
      </div>
    </div>
  )
})

DesktopLayout.displayName = 'DesktopLayout'

// Mobile layout component
const MobileLayout = memo(() => (
  <div className="md:hidden space-y-6 max-w-xl mx-auto px-4">
    {/* Show first two paragraphs */}
    <div className="space-y-4">
      {ABOUT_CONTENT.slice(0, 2).map((paragraph, index) => (
        <AboutParagraph key={index} text={paragraph} className="text-left" />
      ))}
    </div>

    {/* Mission card in the middle */}
    <div className="flex justify-center">
      <MissionCard />
    </div>

    {/* Show remaining paragraphs */}
    <div className="space-y-4">
      {ABOUT_CONTENT.slice(2).map((paragraph, index) => (
        <AboutParagraph
          key={index + 2}
          text={paragraph}
          className="text-left"
        />
      ))}
    </div>
  </div>
))

MobileLayout.displayName = 'MobileLayout'

// Main component
const AboutUsSection = memo(() => (
  <section
    id="about-us"
    className="py-16 md:py-20 bg-gradient-to-b from-white to-muted/30"
    aria-labelledby="about-us-title"
  >
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Section header */}
      <motion.header
        {...animationVariants.text}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2
          id="about-us-title"
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800"
        >
          About Us
        </h2>
        <div
          className="h-1 w-16 md:w-20 bg-gradient-to-r from-teal-400 to-teal-500 mx-auto rounded-full"
          role="presentation"
          aria-hidden="true"
        />
      </motion.header>

      {/* Content layouts */}
      <DesktopLayout />
      <MobileLayout />
    </div>
  </section>
))

AboutUsSection.displayName = 'AboutUsSection'

export default AboutUsSection
