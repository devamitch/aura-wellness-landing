import { ArrowRight, MessageSquare } from 'lucide-react'
import { Button } from './ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What are premenstrual disorders?',
    answer: (
      <>
        PMDD (Premenstrual Dysphoric Disorder) is a severe form of premenstrual
        syndrome (PMS) that causes significant mood disturbances and physical
        symptoms in the week before menstruation, often improving shortly after
        menstruation begins. More info at{' '}
        <a
          href="https://www.iapmd.org/what-are-pmds"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          IAPMD
        </a>
        .
      </>
    ),
  },
  {
    question: 'How is MyTeal different from other period tracking apps?',
    answer:
      'MyTeal is specifically designed for people with premenstrual disorders including premenstrual dysphoris disorder (PMDD) and premenstrual exacerbation (PME) of existing conditions like depression, anxiety, ADHD, autism and any others that are relevant to you. It offers specialized symptom tracking, self-help content, expert resources, and a supportive community. Unlike general period trackers, we focus on the unique challenges of premenstrual disorders with personalized recommendations.',
  },
  {
    question: 'Is my health data secure with MyTeal?',
    answer: (
      <>
        <p>
          We understand how personal menstrual cycle information and
          premenstrual symptoms can be. That’s why protecting your privacy is at
          the heart of everything we do. We’re here to support your health,
          without compromising your data.
        </p>
        <p>
          Your data is stored as an encrypted copy on our servers, and the key
          to decode it stays on your device. This means we cannot access any of
          your identifiable health information.
        </p>
        <p>
          If you choose to share your data for research, your personal details
          (like your name or email) are encrypted separately from your health
          data. This ensures that any research data we access is fully
          de-identified.
        </p>
        <p>
          Any credit card information you provide is encrypted and securely
          handled.
        </p>
        <p>
          We do not sell your data to third parties. Our premium subscription is
          our main source of funding, and a portion of each subscription
          supports our mission. You’re always in control. You can update,
          export, or delete your data at any time within the app.
        </p>
      </>
    ),
  },
  {
    question: "Can I use MyTeal if I haven't been diagnosed with PMDD?",
    answer:
      'Absolutely! MyTeal can help you track your symptoms and recognize patterns you might not have noticed before. This can be incredibly helpful when talking with your healthcare provider. And even if your symptoms don’t meet the criteria for PMDD, that doesn’t make what you’re experiencing any less real or valid.',
  },
  // {
  //   question: 'What devices is MyTeal available on?',
  //   answer:
  //     'MyTeal is available for both iOS and Android devices. We also have a web version accessible from any browser, allowing you to access your account across multiple platforms.',
  // },
  {
    question: 'Is there a cost to use MyTeal?',
    answer:
      'We offer both free and premium versions. The free version includes basic tracking and community access. Our premium subscription provides access to all expert videos, podcasts, advanced analytics, and personalized recommendations.',
  },
]

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 font-young-serif">
            Frequently Asked Questions
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Find answers to common questions about PMDD and the MyTeal app.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 py-2 bg-background shadow-sm"
              >
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4 text-left">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* <div className="bg-accent/50 rounded-xl p-8 border border-border max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground">
                Our support team is always here to help. Reach out with any
                questions about PMDD or using the MyTeal app.
              </p>
            </div>
            <Button
              style={{ backgroundColor: '#f05c74', color: 'white' }}
              className="group whitespace-nowrap"
            >
              Ask here
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={16}
              />
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default FAQSection
