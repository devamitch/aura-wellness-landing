import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutUsSection from '@/components/AboutUsSection'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import TeamSection from '@/components/TeamSection'
import Team from './Team'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col font-dm-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-accent/30 to-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6 font-dm-sans font-bold">
                The story behind <span className="text-teal-500">MyTeal</span>
              </h1>
              <p className="paragraph mb-8 font-dm-sans">
                A shared vision. A smarter solution. A stronger community.
              </p>
            </div>
          </div>
        </section>

        <AboutUsSection />

        <TeamSection />

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4 font-young-serif">Our Journey</h2>
              <p className="paragraph max-w-2xl mx-auto">
                Key milestones in the development of{' '}
                <span className="text-teal-500">MyTeal</span>.
              </p>
            </div>
            <div className="relative">
              {/* Vertical line - only on md+ */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200"></div>
              <div className="relative z-10">
                {/* Oct 2024 */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative">
                  {/* Dot for mobile */}
                  <div className="md:hidden flex items-center justify-center w-full mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                      <span className="text-white font-medium">1</span>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="md:w-1/2 flex justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border max-w-md">
                      <h3 className="text-xl font-semibold mb-2">Oct 2024</h3>
                      <p className="text-muted-foreground">
                        Initial idea brainstorm for MyTeal, laying the
                        foundation for a new approach to symptom tracking.
                      </p>
                    </div>
                  </div>
                  {/* Dot for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 items-center justify-center">
                    <span className="text-white font-medium">1</span>
                  </div>
                </div>
                {/* Nov 2024 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16 relative">
                  {/* Dot for mobile */}
                  <div className="md:hidden flex items-center justify-center w-full mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                      <span className="text-white font-medium">2</span>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="md:w-1/2 flex justify-start md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border max-w-md">
                      <h3 className="text-xl font-semibold mb-2">Nov 2024</h3>
                      <p className="text-muted-foreground">
                        Prototype created, transforming our ideas into an early
                        working model to share and test with close
                        collaborators.
                      </p>
                    </div>
                  </div>
                  {/* Dot for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 items-center justify-center">
                    <span className="text-white font-medium">2</span>
                  </div>
                </div>
                {/* Jan - April 2025 */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative">
                  {/* Dot for mobile */}
                  <div className="md:hidden flex items-center justify-center w-full mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                      <span className="text-white font-medium">3</span>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="md:w-1/2 flex justify-end md:pr-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border max-w-md">
                      <h3 className="text-xl font-semibold mb-2">
                        Jan - Apr 2025
                      </h3>
                      <p className="text-muted-foreground">
                        Focus groups provided input, shaping the design and
                        features of the symptom tracking app based on real user
                        needs and experiences.
                      </p>
                    </div>
                  </div>
                  {/* Dot for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 items-center justify-center">
                    <span className="text-white font-medium">3</span>
                  </div>
                </div>
                {/* May 2025 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
                  {/* Dot for mobile */}
                  <div className="md:hidden flex items-center justify-center w-full mb-2">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                      <span className="text-white font-medium">4</span>
                    </div>
                  </div>
                  {/* Card */}
                  <div className="md:w-1/2 flex justify-start md:pl-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-border max-w-md">
                      <h3 className="text-xl font-semibold mb-2">May 2025</h3>
                      <p className="text-muted-foreground">
                        Development Kickoff – Bringing MyTeal to Life with a
                        dedicated team, turning vision into reality.
                      </p>
                    </div>
                  </div>
                  {/* Dot for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-teal-500 items-center justify-center">
                    <span className="text-white font-medium">4</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 text-center">
              <Button
                style={{ backgroundColor: '#f05c74', color: 'white' }}
                className="group"
              >
                Join Us On This Journey
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={16}
                />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
