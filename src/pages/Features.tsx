import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Features = () => {
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
      <Navbar />
      <main className="flex-grow">
        <AppShowcaseSection />

        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4 font-young-serif">
                More Powerful Features
              </h2>
              <p className="paragraph max-w-2xl mx-auto">
                Beyond the core features,{' '}
                <span className="text-teal-500">MyTeal</span> offers many ways
                to help you manage PMDD.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                  Community Support
                </h3>
                <p className="text-muted-foreground">
                  Connect with others who understand what you're going through.
                  Share experiences, advice, and encouragement in our moderated
                  community spaces.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">Expert Q&A</h3>
                <p className="text-muted-foreground">
                  Submit your questions about PMDD and get answers from
                  healthcare professionals specializing in women's health and
                  hormonal conditions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                  Medication Tracking
                </h3>
                <p className="text-muted-foreground">
                  Keep track of medications, supplements, and their effects on
                  your symptoms. Identify what works best for your unique
                  situation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">
                  Calendar Integration
                </h3>
                <p className="text-muted-foreground">
                  Sync your symptom predictions with your calendar to help plan
                  important events around your cycle and potential symptom
                  flare-ups.
                </p>
              </div>
            </div>
            <form onSubmit={handleWaitlistSubmit}>
              <div className="mt-16 text-center">
                <p className="paragraph mb-6">
                  Be the first to try these features
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
      </main>
      <Footer />
    </div>
  )
}

export default Features
