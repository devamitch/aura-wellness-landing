import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const emailInputRef = React.useRef(null)

  // Handler for Join Waitlist button
  const handleJoinWaitlist = () => {
    if (location.pathname === '/') {
      // Home screen: focus the email input in hero section
      const event = new CustomEvent('focus-email-input')
      window.dispatchEvent(event)
    } else {
      // Not home: navigate to home and trigger scroll/focus/guidance
      navigate('/', { state: { fromJoinWaitlist: true } })
    }
  }

  // Mobile menu button toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 w-full z-50 border-b">
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="MyTeal Logo" className="h-14 w-auto mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 font-dm-sans">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/features"
                  className="text-foreground hover:text-teal-500 transition-colors px-4 py-2"
                >
                  Features
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className="text-foreground hover:text-teal-500 transition-colors px-4 py-2"
                >
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/team"
                  className="text-foreground hover:text-teal-500 transition-colors px-4 py-2"
                >
                  Team
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground hover:text-teal-500">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    <Link
                      to="/videos"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Videos
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Expert videos on PMDD management
                      </p>
                    </Link>
                    <Link
                      to="/podcasts"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Podcasts
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Audio content on women's health
                      </p>
                    </Link>
                    <Link
                      to="/education"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        PMDD Education Hub
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        In-depth resources about PMDD
                      </p>
                    </Link>
                    <Link
                      to="/tutorials"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Tutorials
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Step-by-step guidance for symptom relief
                      </p>
                    </Link>
                    <Link
                      to="/blog"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        PMDD Insights Blog
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Latest articles on PMDD research
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            style={{ backgroundColor: '#f05c74', color: 'white' }}
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link
              to="/features"
              className="text-foreground hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="py-2 border-t border-border">
              <p className="font-medium mb-2">Resources:</p>
              <div className="pl-4 flex flex-col space-y-3">
                <Link
                  to="/videos"
                  className="text-foreground hover:text-teal-500 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Videos
                </Link>
                <Link
                  to="/podcasts"
                  className="text-foreground hover:text-teal-500 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Podcasts
                </Link>
                <Link
                  to="/education"
                  className="text-foreground hover:text-teal-500 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  PMDD Education Hub
                </Link>
                <Link
                  to="/tutorials"
                  className="text-foreground hover:text-teal-500 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tutorials
                </Link>
                <Link
                  to="/blog"
                  className="text-foreground hover:text-teal-500 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
            </div>
            <Button
              style={{ backgroundColor: '#f05c74', color: 'white' }}
              className="w-full"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
