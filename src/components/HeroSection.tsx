import { useEffect, useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import '../App.css'

const HeroSection = () => {
  const words = [
    'Track',
    'Empower',
    'Access support',
    'Live life to the fullest',
  ]

  // Array of hero images
  const images = ['/Desktop-1.avif', '/Desktop-2.avif', '/Desktop-3.avif']

  // State for the current image index
  const [currentImage, setCurrentImage] = useState(0)
  useEffect(() => {
    console.log('Current image index:', currentImage)
  }, [currentImage])

  // Effect to change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  // Manual navigation handlers
  const goToPrev = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  const goToNext = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const goToImage = (idx: number) => setCurrentImage(idx)

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const emailInputRef = useRef(null)

  // Focus the email input when the event is dispatched (from Navbar)
  useEffect(() => {
    const focusHandler = () => {
      if (emailInputRef.current) {
        emailInputRef.current.focus()
        emailInputRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }
    window.addEventListener('focus-email-input', focusHandler)
    return () => {
      window.removeEventListener('focus-email-input', focusHandler)
    }
  }, [])

  // Guide over hero section if navigated from Join Waitlist (show highlight for a few seconds)
  const [highlight, setHighlight] = useState(false)
  useEffect(() => {
    if (
      window.history.state &&
      window.history.state.usr &&
      window.history.state.usr.fromJoinWaitlist
    ) {
      setHighlight(true)
      setTimeout(() => setHighlight(false), 2500)
      if (emailInputRef.current) {
        emailInputRef.current.focus()
        emailInputRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    }
  }, [])

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
    <section className="pt-10 pb-8 md:pt-14 md:pb-10 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div
            className={`animate-fade-in ${
              highlight
                ? 'ring-4 ring-[#f05c74] ring-offset-4 transition-all duration-700'
                : ''
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl mb-4 font-dm-sans font-bold text-left">
              {words.map((word, index) => (
                <div key={index}>
                  <span className="dynamic-gradient">{word}</span>
                </div>
              ))}
            </h1>
            <p className="paragraph mb-4 max-w-lg font-dm-sans text-left">
              Navigating your premenstrual journey with care, confidence, and
              compassion, because every experience matters.
            </p>

            <form onSubmit={handleWaitlistSubmit}>
              <div className="flex flex-col sm:flex-row justify-left items-center gap-3">
                <input
                  ref={emailInputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md px-3 py-1.5 w-full sm:w-auto min-w-[280px] font-dm-sans"
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
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={16}
                  />
                </Button>
              </div>
              {isSubmitting && (
                <span className="flex  gap-2 text-sm mt-2 text-gray-500">
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
                  className={`flex text-sm mt-2 ${
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
            </form>
          </div>
          {/* Carousel */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-70"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-xl flex flex-col items-center">
              <div className="relative w-full">
                <img
                  src={images[currentImage]}
                  alt={`MyTeal App Interface ${currentImage + 1}`}
                  className="w-full h-auto rounded-2xl shadow-md transition-all duration-700"
                  fetchPriority={currentImage === 0 ? 'high' : undefined}
                />
                {/* Overlay arrow buttons */}
                <button
                  onClick={goToPrev}
                  aria-label="Previous Image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-lg transition z-10"
                  style={{ border: 'none' }}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={goToNext}
                  aria-label="Next Image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-lg transition z-10"
                  style={{ border: 'none' }}
                >
                  <ChevronRight size={28} />
                </button>
              </div>
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-3">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImage ? 'bg-[#f05c74]' : 'bg-gray-300'
                    }`}
                    onClick={() => goToImage(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -z-10 top-1/3 right-0 w-60 h-60 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/3 left-0 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
