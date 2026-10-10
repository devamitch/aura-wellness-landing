import { Button } from '@/components/ui/button'

const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Start Your Wellness Journey Today</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Download the MyTeal app and join thousands of women finding relief
            and support for PMDD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 px-6 py-6 rounded-full">
              <div className="flex items-center">
                <div className="mr-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.5227 7.39673C18.2867 6.41698 18.9534 5.15737 18.7235 3.80602C17.5495 3.85825 16.1699 4.58849 15.3855 5.5922C14.6762 6.48805 13.9338 7.82099 14.1891 9.0921C15.5032 9.1504 16.7343 8.39262 17.5227 7.39673Z" />
                    <path d="M20.6437 12.3207C20.6296 10.5511 21.811 9.37036 21.8693 9.31199C21.0063 8.0714 19.6657 7.87611 19.1455 7.8458C17.6535 7.68067 16.2125 8.69031 15.4489 8.69031C14.6676 8.69031 13.4784 7.87001 12.2618 7.89419C10.6936 7.91838 9.24414 8.77504 8.48553 10.1262C6.91965 12.8637 8.0968 17.1046 9.60652 19.3813C10.3592 20.5075 11.2491 21.7673 12.4173 21.7249C13.5493 21.6764 14.0089 20.9947 15.3797 20.9947C16.7324 20.9947 17.1617 21.7249 18.3481 21.6945C19.5708 21.6764 20.3416 20.565 21.0729 19.4267C21.932 18.1126 22.2846 16.8347 22.3005 16.762C22.2664 16.7499 20.6618 16.0258 20.6437 12.3207Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90 px-6 py-6 rounded-full">
              <div className="flex items-center">
                <div className="mr-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.60975 20.4014L12.5815 11.4296L3.60975 2.45801C3.25331 2.85274 3 3.54012 3 4.45186V18.4076C3 19.3193 3.25331 20.0067 3.60975 20.4014Z" />
                    <path d="M14.0657 9.94533L16.9558 7.05522L5.12383 0.264496C4.84297 0.0968462 4.52727 0 4.19515 0C3.91429 0 3.65371 0.0726347 3.42627 0.201877L14.0657 9.94533Z" />
                    <path d="M3.42627 22.7981C3.65371 22.9274 3.91429 23 4.19515 23C4.52727 23 4.84297 22.9032 5.12383 22.7355L16.9558 15.9448L14.0657 13.0547L3.42627 22.7981Z" />
                    <path d="M18.2891 8.14383L20.7584 6.54732C21.4216 6.14096 21.4216 5.51523 20.7584 5.10887L18.2891 3.51236L15.6299 6.17162L18.2891 8.14383Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
