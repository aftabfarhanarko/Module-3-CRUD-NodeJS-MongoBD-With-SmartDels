import React from 'react';
import { IoIosSearch } from 'react-icons/io';

const Hero = () => {
    return (
        <div>
            <div>
            <section className="relative -z-4 bg-gradient-to-r from-[#f5e6ff] via-[#e7f0ff] to-[#fdf2ff] overflow-hidden pt-24 pb-20 flex flex-col items-center text-center">
       

        {/* Hero Text */}
        <div className="max-w-3xl relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Deal Your <span className="text-[#8A3FFC]">Products</span> <br />
            In A <span className="text-[#8A3FFC]">Smart</span> Way !
          </h1>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            SmartDeals helps you sell, resell, and shop from trusted local
            sellers — all in one place!
          </p>

          {/* Search Box */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex items-center bg-white rounded-full shadow-md px-4 w-[300px] md:w-[400px] h-11">
              <input
                type="text"
                placeholder="Search for Products, Categories..."
                className="flex-1 outline-none text-gray-700 text-sm"
              />
              <IoIosSearch className="text-[#8A3FFC]" size={20} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="bg-[#8A3FFC] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-[#7a33db] transition">
              Watch All Products
            </button>
            <button className="border border-[#8A3FFC] text-[#8A3FFC] font-semibold px-6 py-2 rounded-lg hover:bg-[#f2e9ff] transition">
              Post an Product
            </button>
          </div>
        </div>
      </section> 
        </div>
        </div>
    );
};

export default Hero;