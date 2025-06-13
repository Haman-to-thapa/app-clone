import { AnimatePresence, motion, useInView } from "framer-motion";
import React from "react";
import { useState, useEffect, useRef } from "react";


// icons 
const logoUrls = [
  "https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff93e7bec5b4bbcc2f93de_Marquee%20Logo%2001.svg",
  "https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff93e71faba4ab6fdcb970_Marquee%20Logo%2002.svg",
  "https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff93e8b3248c92da683e34_Marquee%20Logo%2003.svg",
  "https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff93e74d9b991ef02ca021_Marquee%20Logo%2004.svg",
  "https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff93e7fa1e19beccb45103_Marquee%20Logo%2005.svg",
  "https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff93e72afdd3daa5f456d1_Marquee%20Logo%2006.svg",
];

const Home = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Life", "Data", "Workflow"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="font-[Roboto]">
      {/* Hero Section */}
      <section className="min-h-screen text-gray-950 flex flex-col items-center  px-6 text-center">
        <h1 className="sm:text-9xl text-7xl font-bold mb-4 font-[Montserrat] sm:mt-10 mt-8">
          Improve your

          <AnimatePresence mode="wait">
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="block mt-2"
            >
              {texts[currentText]}
            </motion.span>
          </AnimatePresence>
        </h1>
        <div className=" md:hidden space-x-4 mt-10 sm:flex sm:mx-auto sm:justify-between">
          <button className=" text-teal-900 px-6 py-3 rounded-full font-semibold cursor-pointer bg-blue-600 transition">
            <span className="text-white">   Try for Free</span>

          </button>
          <button className="bg-white text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition shadow-2xl cursor-pointer">
            See Plans
          </button>
        </div>
        <div className=" md:flex md:justify-between w-full mx-auto top-0 ">
          <div className="hidden md:block">
            <motion.img
              src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff8bc2da5fa65f143c1781_workflow-R.avif"
              loading="lazy"
              className="w-[400px]"
            />
          </div>
          <div className="md:mt-20">
            <div className="flex items-center gap-4 mt-20 justify-center flex-col ">
              <div className=" hidden md:block  space-x-4 mt-10 sm:flex sm:mx-auto sm:justify-between">
                <button className=" text-teal-900 px-6 py-3 rounded-full font-semibold cursor-pointer bg-blue-600 transition">
                  <span className="text-white">   Try for Free</span>

                </button>
                <button className="bg-white text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition shadow-2xl cursor-pointer">
                  See Plans
                </button>
              </div>
              <div className="flex items-center gap-5 mt-10">
                <div className="flex items-center">
                  <img src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff91021faba4ab6fda18e0_Join-01.avif" alt="photo" loading="lazy"
                    className="rounded-full w-8 h-8 md:w-13 md:h-13"
                  />
                  <img src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff91029a10f57c1453b01b_Join-02.avif" alt="image" loading="lazy"
                    className="rounded-full w-8 h-8 md:w-13 md:h-13"
                  />


                  <img src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff9102e40cafd1f09e36a4_Join-03.avif" alt="image" loading="lazy"
                    className="rounded-full w-8 h-8 md:w-13 md:h-13"
                  />
                </div>
                <p className="font-medium text-gray-600 sm:text-xl ">Join over 1,500 our costumers</p>
              </div>
            </div>

          </div>
          <div className="hidden md:block">
            <motion.img
              src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff8bc2da5fa65f143c1781_workflow-R.avif"
              loading="lazy"
              className="w-[400px]"
            />
          </div>
          <div className="md:hidden flex gap-5 mt-10">
            <div className="">
              <motion.img
                src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff8bc2da5fa65f143c1781_workflow-R.avif"
                loading="lazy"
                className="w-[400px]"
              />
            </div>
            <div className="">
              <motion.img
                src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/66ff8bc2da5fa65f143c1781_workflow-R.avif"
                loading="lazy"
                className="w-[400px]"
              />
            </div>
          </div>
        </div>


      </section>


      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="relative mt-8">
          <motion.div
            className="flex space-x-12 h-6 sm:7 md:9 lg:12 "
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {logoUrls.map((url, index) => (
              <img
                key={`first-${index}`}
                src={url}
                alt={`Logo ${index + 1}`}
                className="sm:8 md:9 lg:10 w-auto"
                loading="lazy"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {logoUrls.map((url, index) => (
              <img
                key={`second-${index}`}
                src={url}
                alt={`Logo ${index + 1}`}
                className="sm:8 md:9 lg:10 w-auto"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </section>



      <section className="py-16 p-10 rounded-2xl opacity-80">
        <div className="overflow-hidden mx-auto max-w-7xl">
          <motion.div
            ref={useRef(null)}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1.5 }
            }}
            className="w-full"
          >
            <motion.img
              src="https://cdn.prod.website-files.com/66faf11cb7c649ee105d10b7/673390d4f2dc7a632039cdc7_MacBook%20Pro%2016_%20-%206.avif"
              alt="display moving"
              loading="lazy"
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
