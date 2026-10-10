import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted text-foreground pt-16 pb-8 font-dm-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex justify-center">
              <img
                src="/myteal-h.png"
                alt="MyTeal Logo"
                className="h-14 w-auto mr-2"
              />
            </Link>
            <p className="text-muted-foreground mb-4">
              More Than Tracking. It's a Journey to Empowerment
            </p>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@myteal.com"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  hello@myteal.ca
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-teal-500 transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row md:justify-between text-sm text-muted-foreground">
          <p>
            &copy; {currentYear}{' '}
            <img
              src="/myteal-h.png"
              alt="MyTeal Logo"
              className="h-6 -translate-y-1.5 w-auto inline-block align-middle mr-2"
            />
            . All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-teal-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-teal-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
