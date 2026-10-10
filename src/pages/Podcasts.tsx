
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PodcastsSection } from "@/components/ContentSections";

const Podcasts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-accent/30 to-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6 font-young-serif">
                <span className="text-teal-500">PMDD</span> Podcasts
              </h1>
              <p className="paragraph mb-8">
                Listen to informative podcasts about managing PMDD and improving your quality of life.
              </p>
            </div>
          </div>
        </section>

        <PodcastsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Podcasts;
