
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PMDDEducationHub from "@/components/PMDDEducationHub";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-accent/30 to-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="heading-xl mb-6 font-young-serif">
                PMDD <span className="text-teal-500">Education</span> Hub
              </h1>
              <p className="paragraph mb-8">
                Evidence-based information to help you understand and manage PMDD effectively.
              </p>
            </div>
          </div>
        </section>

        <PMDDEducationHub />
      </main>
      <Footer />
    </div>
  );
};

export default Education;
