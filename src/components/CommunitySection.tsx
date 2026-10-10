import { Users, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const testimonials = [
  {
    quote:
      'MyTeal helped me understand my PMDD patterns and find strategies that actually work for me. The community support has been life-changing.',
    name: 'Sarah J.',
    title: 'MyTeal user for 8 months',
  },
  {
    quote:
      'After years of struggling with undiagnosed PMDD, finding this app gave me the tools and information I needed to take control of my symptoms.',
    name: 'Michelle K.',
    title: 'MyTeal user for 1 year',
  },
  {
    quote:
      'The guided meditations and expert videos helped me develop a PMDD management plan that has dramatically improved my quality of life.',
    name: 'Rebecca T.',
    title: 'MyTeal user for 6 months',
  },
]

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">Our Community</h2>
          <p className="paragraph max-w-2xl mx-auto">
            A safe space to share, learn, and support each other through every
            cycle. You're not alone, connect with others who truly get it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-muted/30 rounded-xl p-8 border border-border">
            <div className="flex items-center gap-4 mb-8">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-2xl font-semibold">Community Impact</h3>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-2">15,000+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-2">88%</p>
                <p className="text-sm text-muted-foreground">
                  Report Symptom Relief
                </p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-2">45,000+</p>
                <p className="text-sm text-muted-foreground">
                  Support Messages
                </p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <p className="text-3xl font-bold text-primary mb-2">28</p>
                <p className="text-sm text-muted-foreground">Support Groups</p>
              </div>
            </div>

            <Button className="group w-full">
              Join Our Community
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-primary" />
              What Our Users Say
            </h3>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background p-5 rounded-xl shadow-sm border border-border"
                >
                  <p className="italic mb-4 text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
