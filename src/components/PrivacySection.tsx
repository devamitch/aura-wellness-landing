import { Shield, Lock, Eye } from 'lucide-react'

const PrivacySection = () => {
  return (
    <section className="py-3 bg-white">
      <div className="container-custom w-full px-4">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <div className="bg-muted/50 p-3 rounded-xl shadow-sm flex items-center hover:shadow-md transition-all duration-300">
            <div className="bg-teal-50 p-1.5 rounded-full mr-2">
              <Shield size={16} className="text-teal-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-0.5 font-dm-sans">
                Privacy-Centric Design
              </h3>
              <p className="text-xs text-muted-foreground font-dm-sans">
                Your privacy is at the core of every feature we build.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-3 rounded-xl shadow-sm flex items-center hover:shadow-md transition-all duration-300">
            <div className="bg-teal-50 p-1.5 rounded-full mr-2">
              <Lock size={16} className="text-teal-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-0.5 font-dm-sans">
                Personalized Experience
              </h3>
              <p className="text-xs text-muted-foreground font-dm-sans">
                We tailor your journey while keeping you in control of your
                data.
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-3 rounded-xl shadow-sm flex items-center hover:shadow-md transition-all duration-300">
            <div className="bg-teal-50 p-1.5 rounded-full mr-2">
              <Eye size={16} className="text-teal-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-0.5 font-dm-sans">
                Science-Backed
              </h3>
              <p className="text-xs text-muted-foreground font-dm-sans">
                Our approach is grounded in the latest scientific research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacySection
