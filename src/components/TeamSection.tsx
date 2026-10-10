import type React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

const teamMembers = [
  {
    name: 'Sandi MacDonald',
    titles: ['Founder, IAPMD Canada', 'Executive Director & Co-Founder IAPMD'],
    image: '/founder.jpeg',
    imageAlt: 'Sandi MacDonald',
    longBio: `Sandi MacDonald is a dedicated advocate and educator with lived experience of PMDD. With more than 25 years of experience in human services, counseling, and program development, Sandi has worked extensively with trauma, addiction, and family support. She holds multiple graduate certificates in mental health education, counseling, and suicide prevention and is a certified family life educator.

At IAPMD, Sandi has led the development of global peer support programs, training a network of supporters grounded in compassion and evidence-based care. Her work has been recognized internationally for its collaborative and inclusive approach.

For the My Teal app, Sandi contributed her unique expertise in peer support and patient experience. She helped design features that prioritize emotional safety and offers on-demand coaching videos in EZ mode, aligned with the "Thriving with PMDs" program.`,
  },
  {
    name: 'Jennifer L. Gordon, PhD',
    titles: [
      'Board Director, IAPMD Canada',
      'Chair, IAPMD Clinical Advisory Board',
    ],
    image: '/jenn.jpg',
    imageAlt: 'Dr. Jennifer L. Gordon',
    longBio: `Dr. Gordon received her PhD in Clinical Psychology at McGill University, after which she completed a postdoctoral fellowship in Reproductive Mood Disorders at the University of North Carolina at Chapel Hill, before settling down in Regina, Canada. She is now the director of the Reproductive Mental Health Research Unit, supervising a team of graduate students, postdoctoral fellows, and staff, in conducting community-engaged research that advances the identification, prevention, and treatment of mental health conditions uniquely affecting women and people assigned female at birth.

Dr. Gordon has been part of IAPMD's leadership team since 2023, first as a board director and now as chair of the clinical advisory board. In collaboration with others at IAPMD, Dr. Gordon co-created the Thriving with PMDs program—a self-help approach that combines evidence-based techniques, adapted to the unique challenges of premenstrual disorders. This program forms the heart of the My Teal app.

Dr. Jennifer Gordon is a clinical psychologist and Canada Research Chair in Reproductive Mental Health. With over $6 million in research funding secured, her work focuses on improving care for people with reproductive mood disorders. Her research has been published in top medical journals, including The Lancet.

In addition to creating the Thriving with PMDs program, Dr. Gordon led the licensing and adaptation of the program into accessible micromodules, providing expert input on how app features can best support mental health and symptom management. For the app, Dr. Gordon has provided her clinical and research expertise in reviewing all features of the My Teal app.`,
  },
  {
    name: 'Sneha Chenji, PhD',
    titles: [
      'Board Director, IAPMD Canada',
      'Research and Education Coordinator, IAPMD',
    ],
    image: '/sneha.avif',
    imageAlt: 'Dr. Sneha Chenji',
    longBio: `Dr. Sneha Chenji brings both personal experience with PMDD and a decade of research expertise focused on vulnerable populations. She leads IAPMD's research and education initiatives, including authoring the organization's "Guide to Conducting Rigorous, Patient-Centered PMDD Research" and editing its treatment options ebook.

Sneha is passionate about creating mental health tools that reflect lived experience while remaining grounded in evidence. She has coordinated multi-stakeholder teams and developed educational content that supports people through complex health journeys.

As a co-creator of the "Thriving with PMDs" program, Dr. Chenji played a central role in tailoring it for the MyTeal app. She provided patient-centered insights and coordinated the collaboration needed to turn the program into a digital resource for the community.`,
  },
]

const TeamSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('submitting')
    const url =
      'https://script.google.com/macros/s/AKfycbwU1YxPmWgX2mtlMdqG2vyhLfGH7bmFDNEIoRAHzffzfZM5bTtCFQVMD-iMG981tcpn/exec'
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: new URLSearchParams({ email }),
      })
      const text = await res.text()
      setStatus(text)
    } catch (err) {
      setStatus('Error submitting email.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-24 bg-gradient-to-b from-white via-teal-50/30 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dedicated, compassionate, and expert-led. Meet the women behind
              MyTeal.
            </p>
          </div>

          {/* Team Members */}
          <div className="space-y-20">
            {teamMembers.map((member, idx) => (
              <Card
                key={member.name}
                className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-teal-50 to-pink-50"
              >
                <CardContent className="p-0">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 ${
                      idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Image Section */}
                    <div
                      className={`relative flex items-center ${
                        idx % 2 === 1 ? 'lg:col-start-2' : ''
                      }`}
                    >
                      <div className="aspect-[4/5] lg:aspect-square relative overflow-hidden rounded-2xl">
                        <img
                          src={member.image || '/placeholder.svg'}
                          alt={member.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-2xl"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${
                        idx % 2 === 1 ? 'lg:col-start-1' : ''
                      }`}
                    >
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900 mb-3">
                            {member.name}
                          </h3>
                          <div className="space-y-1">
                            {member.titles.map((title, i) => (
                              <div
                                key={i}
                                className="text-teal-600 font-semibold text-lg"
                              >
                                {title}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-teal-200 to-transparent" />

                        <div className="text-gray-700 leading-relaxed space-y-4 text-left">
                          {member.longBio.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="text-base">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Waitlist Section */}
          <Card className="mt-24 bg-gradient-to-r from-teal-50 to-pink-50 border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                    <Mail className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Join Our Waitlist
                  </h3>
                  <p className="text-xl text-gray-600">
                    Get early access to{' '}
                    <span className="text-teal-600 font-semibold">MyTeal</span>{' '}
                    and be the first to experience our innovative approach to
                    PMDD support.
                  </p>
                </div>

                <form onSubmit={handleWaitlistSubmit}>
                  <div className="flex flex-col  justify-center items-center gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto min-w-[300px]"
                      required
                      disabled={
                        isSubmitting || status.toLowerCase().includes('success')
                      }
                    />
                    <Button
                      type="submit"
                      style={{ backgroundColor: '#f05c74', color: 'white' }}
                      className="group"
                      disabled={
                        isSubmitting || status.toLowerCase().includes('success')
                      }
                    >
                      {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                      <ArrowRight size={16} />
                    </Button>
                    {isSubmitting && (
                      <span className="flex items-center gap-2 text-sm mt-2 text-gray-500">
                        <svg
                          className="animate-spin h-4 w-4 text-teal-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    )}
                    {status && status !== 'submitting' && (
                      <p
                        className={`text-sm mt-2 ${
                          status.toLowerCase().includes('success')
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}
                      >
                        {status.toLowerCase().includes('success')
                          ? 'Thank you! Your email has been logged successfully.'
                          : status}
                      </p>
                    )}
                  </div>
                </form>

                <p className="text-sm text-gray-500">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default TeamSection
