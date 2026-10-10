import React from 'react'

const PartnersSection = () => {
  return (
    <section className="py-8 bg-accent/50 rounded-lg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-xl font-dm-sans font-bold">
              Built with a purpose
            </h2>
            <p className="text-sm mt-2 font-dm-sans">
              This app is the result of passionate minds coming together, each
              bringing their unique strengths to create something truly
              empowering.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
            {/* IAPMD Canada Icon */}
            <div className="flex flex-col items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className=" rounded-full mb-2 p-2">
                <img
                  src="/IAPMD-white.png"
                  alt="IAPMD Canada"
                  className="h-28 w-28 object-contain rounded-full filter brightness-0"
                />
              </div>
            </div>
            {/* AuraCore Icon */}
            <div className="flex flex-col items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className=" rounded-full mb-2 p-2">
                <img
                  src="/AuraCore.png"
                  alt="AuraCore"
                  className="h-28 w-28 object-contain rounded-full transform scale-110"
                />
              </div>
            </div>

            {/* University of Regina Icon */}
            <div className="flex flex-col items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className=" rounded-full mb-2 p-2">
                <img
                  src="/UR.png"
                  alt="University of Regina"
                  className="h-28 w-28 object-contain rounded-full filter brightness-0"
                />
              </div>
            </div>

            <div className="flex flex-col items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className=" rounded-full mb-2 p-2">
                <img
                  src="/SHRF.png"
                  alt="SHRF"
                  className="h-28 w-28 object-contain rounded-full filter brightness-0"
                />
              </div>
            </div>

            <div className="flex flex-col items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className=" rounded-full mb-2 p-2">
                <img
                  src="/RMH.png"
                  alt="RMH"
                  className="h-28 w-28 object-contain rounded-full filter brightness-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
