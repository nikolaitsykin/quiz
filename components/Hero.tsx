import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center text-center">
      <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark tracking-tighter font-bold">
            Ready to Quiz?
          </h1>
          <p className="text-gray-600">Start your quiz and test your knowledge</p>
        </div>
        <div className="mt-5">
            <Link href={"/quiz"} className="inline-flex items-center justify-center rounded-md bg-gray-500 py-3 px-8 text-sm font-medium text-gray-50 shadow transitoin-colors duration-100 hover:bg-gray-800">
            I'm ready
            </Link> 
        </div>

      </div>
    </section>
  );
};

export default Hero;
