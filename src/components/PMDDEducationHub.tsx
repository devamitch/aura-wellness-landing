import { Book, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'

const educationTopics = [
  {
    title: 'Understanding PMDD',
    description:
      'Learn about the symptoms, causes, and impact of PMDD on daily life.',
  },
  {
    title: 'PMDD vs PMS',
    description: 'Understand the key differences between PMDD and PMS.',
  },
  {
    title: 'Treatment Options',
    description:
      'Explore various treatment approaches for managing PMDD symptoms.',
  },
  {
    title: 'Common Myths',
    description: "Debunking misconceptions about PMDD and women's health.",
  },
  {
    title: 'Self-Care Strategies',
    description: 'Practical self-care techniques to help manage PMDD symptoms.',
  },
  {
    title: 'Research & Studies',
    description: 'Latest research findings and medical studies about PMDD.',
  },
]

const PMDDEducationHub = () => {
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
    <section id="education-hub" className="section-padding bg-accent/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">
            PMDD Education Hub
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Evidence-based information to help you understand and manage PMDD
            effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationTopics.map((topic, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
              <p className="text-muted-foreground mb-5">{topic.description}</p>
              <Button
                variant="ghost"
                style={{ color: '#f05c74' }}
                className="hover:bg-pink-50 p-0 h-auto group"
              >
                <span className="flex items-center">
                  Read More
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={16}
                  />
                </span>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted rounded-xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Book className="h-8 w-8 text-teal-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Looking for trusted resources?
              </h3>
              <p className="text-muted-foreground">
                We've curated a collection of scientifically accurate articles,
                research papers, and guides from leading medical institutions.
              </p>
            </div>
            <Button
              style={{ backgroundColor: '#f05c74', color: 'white' }}
              className="group whitespace-nowrap"
            >
              View Resources
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </Button>
          </div>
        </div>

        <form onSubmit={handleWaitlistSubmit}>
          <div className="mt-16 text-center">
            <p className="paragraph mb-6">
              Get access to the complete PMDD Education Library
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
            </div>
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
    </section>
  )
}

export default PMDDEducationHub
