import type React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamSection from '@/components/TeamSection'

const Team: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default Team
