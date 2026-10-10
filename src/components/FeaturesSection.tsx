import { Calendar, Video, Headphones, Book } from 'lucide-react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: 'Symptom Tracking',
    description:
      'Track your premenstrual symptoms over time to identify patterns and triggers.',
  },
  {
    icon: <Video className="h-8 w-8 text-primary" />,
    title: 'Expert Videos',
    description:
      'Access professional videos on managing premenstrual symptoms and improving well-being.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-primary" />,
    title: 'Wellness Podcasts',
    description:
      'Listen to podcasts about PMDD, mental health, and evidence-based approaches to wellness.',
  },
  {
    icon: <Book className="h-8 w-8 text-primary" />,
    title: 'Guided Tutorials',
    description:
      'Your calm in the chaos. Guided tutorials to help you find relief for your most challenging days.',
  },
]

const FeaturesSection = () => {
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
    <section id="features" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">
            Features Designed For <span className="text-teal-500">YOU</span>
          </h2>
          <p className="paragraph">
            MyTeal offers a comprehensive set of tools to help you navigate life
            with PMDD and find relief when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              {/* Learn More button removed */}
            </div>
          ))}
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
      </div>
    </section>
  )
}

export default FeaturesSection
