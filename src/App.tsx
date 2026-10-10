import React, { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import Features from './pages/Features'
import About from './pages/About'
import Videos from './pages/Videos'
import Podcasts from './pages/Podcasts'
import Education from './pages/Education'
import Tutorials from './pages/Tutorials'
import Blog from './pages/Blog'
import LoadingScreen from './components/LoadingScreen'
import Team from './pages/Team'
import WaitList from './pages/WaitList'

const queryClient = new QueryClient()

// List of image URLs to preload
const imageUrls = [
  '/S1.avif',
  '/S2.avif',
  '/S3.avif',
  '/S4.avif',
  '/S5.avif',
  '/S6.avif',
  '/S7.avif',
  '/S8.avif',
  '/S9.avif',
  '/S10.avif',
  '/S11.avif',
  '/S12.avif',
  '/S13.avif',
  '/founder.jpeg',
  '/IAPMD-white.png',
  '/jenn.jpg',
  '/logo.png',
  '/myteal-h.png',
  '/RMH.png',
  '/SHRF.png',
  '/sneha.avif',
  '/AuraCore.png',
  '/UR.png',
  '/OBJECTS.png',
  '/Desktop-1.avif',
  '/Desktop-2.avif',
  '/Desktop-3.avif',
]

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('Preloading images:', imageUrls)

    const preloadpublic = async () => {
      const promises = imageUrls.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve()
          img.onerror = () => resolve()
        })
      })

      await Promise.all(promises)
      setIsLoading(false)
      console.log('Images preloaded, setIsLoading(false) called.')
    }

    preloadpublic()
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/education" element={<Education />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/waitlist" element={<WaitList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
