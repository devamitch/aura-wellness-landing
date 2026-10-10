import { ArrowRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const features = [
  'Personalized symptom tracking',
  'Expert-led video content',
  'Supportive community access',
  'PMDD education resources',
  'Customized self-care plans',
  'Guided meditation sessions',
]

const DownloadSection = () => {
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
      id="download"
      className="section-padding bg-gradient-to-b from-accent/30 to-background"
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">
            Download MyTeal Today
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Take the first step toward managing your PMDD symptoms with
            personalized support.
          </p>
        </div>

        <div className="bg-background rounded-3xl p-8 border border-primary/20 shadow-md h-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 w-full h-full">
            {/* Features list - left */}
            <div className="lg:w-2/3 w-full">
              <h3 className="text-2xl font-semibold mb-6 text-left">
                Features Included:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Download buttons - right */}
            {/* <div className="lg:w-1/3 w-full flex flex-col justify-center mt-8 lg:mt-0">
              <h3 className="text-lg font-medium mb-4">Download app</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="flex-1 flex items-center bg-black hover:bg-black/90 transition-colors rounded-md p-4 mb-3 sm:mb-0"
                >
                  <div className="mr-4">
                    <img
                      src="/img_google_play_logo.png"
                      alt="Google Play"
                      style={{ width: '28px', height: '30px' }}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-white">
                      <img
                        src="/img_get_it_on.svg"
                        alt="Get it on"
                        style={{ width: '48px', height: '7px' }}
                      />
                    </div>
                    <div className="text-sm text-white">
                      <img
                        src="/img_google_play.svg"
                        alt="Google Play"
                        style={{ width: '100px', height: '19px' }}
                      />
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex-1 flex items-center bg-black hover:bg-black/90 transition-colors rounded-md p-4"
                >
                  <div className="mr-4">
                    <img
                      src="/img_apple_logo.svg"
                      alt="Apple"
                      style={{ width: '23px', height: '29px' }}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-white">
                      <img
                        src="/img_download_on_the.svg"
                        alt="Download on the"
                        style={{ width: '90px', height: '8px' }}
                      />
                    </div>
                    <div className="text-sm text-white">
                      <img
                        src="/img_app_store.svg"
                        alt="App Store"
                        style={{ width: '98px', height: '19px' }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
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

        {/* 
        <div className="relative h-full">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-70"></div>
          <div className="relative bg-background p-8 rounded-3xl shadow-xl h-full flex flex-col">
            <div className="flex-grow">
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-border h-full">
                <img
                  src="mock.png"
                  alt="MyTeal App Interface - Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">Now Available</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Scan QR code or click download buttons to get started with
                MyTeal today.
              </p>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

export default DownloadSection
