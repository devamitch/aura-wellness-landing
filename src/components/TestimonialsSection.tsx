import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote:
      'Tracking my symptoms gave me clarity. A pattern I could understand.',
    name: 'Leia',
    title: 'App User for 6 months',
  },
  {
    quote:
      'Before I started tracking, I just thought I was ‘too emotional.’ Now I understand my cycle and I’m finally being kind to myself.',
    name: 'Anya',
    title: 'App User for 3 months',
  },
  {
    quote:
      'It’s such a relief to know what to expect from my cycle. I can make plans, set boundaries, and take care of myself without guilt.',
    name: 'Jenny',
    title: 'App User for 1 year',
  },
  {
    quote:
      'Even just checking in once a day made me feel supported. I wasn’t alone anymore.',
    name: 'Nitya',
  },
]

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">Our Community</h2>
          <p className="paragraph max-w-2xl mx-auto">
            A safe space to share, learn, and support each other through every
            cycle. You're not alone, connect with others who truly get it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-background">
              <CardContent className="pt-6">
                <div className="mb-6 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="inline-block mr-1"
                    >
                      <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6 text-foreground">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  {/* <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
