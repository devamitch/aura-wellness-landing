import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const blogPosts = [
  {
    title: 'Understanding the Link Between PMDD and Anxiety',
    category: 'Health',
    date: 'May 15, 2025',
    image: '/placeholder.svg',
    excerpt:
      'Explore the connection between PMDD and anxiety disorders, and learn effective strategies for managing both conditions.',
  },
  {
    title: 'Nutrition Tips for PMDD Symptom Relief',
    category: 'Lifestyle',
    date: 'May 8, 2025',
    image: '/placeholder.svg',
    excerpt:
      'Discover dietary changes that may help reduce inflammation and improve symptoms during your luteal phase.',
  },
  {
    title: 'Building a Support System for PMDD',
    category: 'Community',
    date: 'April 29, 2025',
    image: '/placeholder.svg',
    excerpt:
      'Learn how to communicate with loved ones about PMDD and create a network that understands your needs.',
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">
            PMDD Insights Blog
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Expert articles, research updates, and personal stories about living
            with PMDD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {post.date}
                </p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  style={{ color: '#f05c74' }}
                  className="hover:bg-pink-50 p-0 h-auto group"
                >
                  <span className="flex items-center">
                    Read Article
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      size={16}
                    />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="paragraph mb-6">
            Subscribe to our blog for the latest PMDD insights
          </p>
          <div className="flex flex-col  justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto min-w-[300px]"
            />
            <Button
              style={{ backgroundColor: '#f05c74', color: 'white' }}
              className="group"
            >
              Join Waitlist
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
