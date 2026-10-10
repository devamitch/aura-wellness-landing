import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button' // <-- Corrected import path

const screenshots = [
  {
    id: 1,
    title: 'Menstrual Cycle Tracker',
    description:
      'Monitor your cycle phases and predict premenstrual symptoms before they occur.',
    image: '/S4.avif',
  },
  {
    id: 2,
    title: 'Personalized Insights',
    description:
      'Get customized recommendations based on your unique symptom patterns.',
    image: '/S8.avif',
  },
  {
    id: 3,
    title: 'Expert Video Library',
    description:
      'Access educational videos from healthcare professionals specializing in premenstrual disorders.',
    image: '/S2.avif',
  },
  {
    id: 4,
    title: 'Track Your Symptoms',
    description:
      'Record and monitor your premenstrual symptoms with detailed charts and patterns.',
    image: '/S13.avif',
  },
  {
    id: 5,
    title: 'Thriving with PMDs',
    description:
      'Discover a dedicated program designed to help you manage and thrive despite premenstrual disorders.',
    image: '/S12.avif',
  },
]

// LazyImage Component with Lazy Loading Optimization
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />
}

const AppShowcaseSection = () => {
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
    <section
      id="app-showcase"
      className="section-padding bg-gradient-to-b from-white to-muted/30"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">
            See <span className="text-teal-500">MyTeal</span> in Action
          </h2>
          <p className="paragraph max-w-3xl mx-auto">
            <span className="text-teal-500">MyTeal</span> goes beyond tracking,
            it's your partner in understanding, managing, and supporting your
            mental health, every cycle.
          </p>
        </div>

        <div className="space-y-24">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-200/40 to-secondary/30 rounded-3xl blur-xl opacity-70"></div>
                  <Card className="border border-primary/10 overflow-hidden shadow-lg relative">
                    <CardContent className="p-0">
                      <div className="relative">
                        {/* Device frame effect */}
                        <div className="bg-muted/30 rounded-t-lg p-2 flex justify-center">
                          <div className="w-16 h-1.5 bg-muted/50 rounded-full"></div>
                        </div>
                        {/* Screenshot with Lazy Loading */}
                        <LazyImage
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="w-full object-cover aspect-[9/16] sm:aspect-[3/4]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  {screenshot.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {screenshot.description}
                </p>
                {/* Learn More button removed */}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="paragraph mb-6">
            Join our waitlist to get early access to{' '}
            <span className="text-teal-500">MyTeal</span>
          </p>
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
        </div>
      </div>
    </section>
  )
}

export default AppShowcaseSection
