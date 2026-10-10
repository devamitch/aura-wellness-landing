import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export const VideosSection = () => {
  const videos = [
    {
      title: 'Understanding PMDD',
      description: 'An expert guide to recognizing and managing PMDD symptoms.',
      image: '/placeholder.svg',
    },
    {
      title: 'Hormonal Balance',
      description:
        'Learn how hormones affect your mood and strategies to maintain balance.',
      image: '/placeholder.svg',
    },
    {
      title: 'Self-Care Routines',
      description: 'Essential self-care practices for PMDD symptom relief.',
      image: '/placeholder.svg',
    },
  ]

  // Robust wait indicator for subscription
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
    <section id="videos" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Expert Video Resources</h2>
          <p className="paragraph">
            Watch informative videos from healthcare professionals specializing
            in PMDD and women's health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-all border border-border hover:border-primary/30"
            >
              <div className="aspect-video relative">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal-500/90 flex items-center justify-center cursor-pointer hover:bg-teal-500 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {video.description}
                </p>
                <Button
                  variant="ghost"
                  style={{ color: '#f05c74' }}
                  className="hover:bg-pink-50"
                >
                  Watch Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="paragraph mb-6">
            Subscribe for access to all premium videos
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

export const PodcastsSection = () => {
  const podcasts = [
    {
      title: 'Living Well with PMDD',
      description: 'Personal stories and expert advice on thriving with PMDD.',
      image: '/placeholder.svg',
      duration: '45 min',
    },
    {
      title: 'Hormonal Health Deep Dive',
      description: 'Understanding the science behind hormonal fluctuations.',
      image: '/placeholder.svg',
      duration: '32 min',
    },
    {
      title: 'Mindfulness for PMDD',
      description: 'Practical mindfulness techniques for symptom management.',
      image: '/placeholder.svg',
      duration: '28 min',
    },
  ]

  // Robust wait indicator for podcast subscription
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
    <section id="podcasts" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Wellness Podcasts</h2>
          <p className="paragraph">
            Listen to informative and supportive podcasts about managing PMDD
            and improving quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {podcasts.map((podcast, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-all border border-border hover:border-primary/30"
            >
              <div className="aspect-square relative bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold">{podcast.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {podcast.duration}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {podcast.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="paragraph mb-6">
            Get notified when new episodes are released
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

export const TutorialsSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('submitting')
    // Replace with your Web App URL
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
  const tutorials = [
    {
      title: 'Breathing Exercises',
      description: 'Simple breathing techniques to reduce anxiety and stress.',
      image: '/placeholder.svg',
    },
    {
      title: 'Anti-Inflammatory Diet',
      description:
        'Dietary approaches to reduce inflammation and PMDD symptoms.',
      image: '/placeholder.svg',
    },
    {
      title: 'Sleep Improvement',
      description: 'Strategies to improve sleep quality during PMDD episodes.',
      image: '/placeholder.svg',
    },
  ]

  return (
    <section id="tutorials" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Step-by-Step Tutorials</h2>
          <p className="paragraph">
            Follow our guided tutorials designed to help you implement effective
            strategies for managing PMDD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-all border border-border hover:border-primary/30"
            >
              <div className="aspect-video relative">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {tutorial.description}
                </p>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  Start Tutorial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="paragraph mb-6">
            Get access to premium tutorials in the{' '}
            <span className="text-teal-500">MyTeal</span> app
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center gap-4">
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
