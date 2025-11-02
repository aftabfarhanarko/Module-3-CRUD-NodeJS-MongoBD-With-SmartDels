import React from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';

const FoodDetlics = () => {
    const producat = useLoaderData();
    
    return (
        <div className='w-11/12 mx-auto'>
            <div className="bg-base-200 py-15">
      <div className="max-w-7xl mx-auto p-6  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <div className=" border border-base-300  rounded-lg overflow-hidden ">
              <img
                src={producat.image}
                alt={""}
                className="w-full h-full  object-cover transform transition-transform duration-500 ease-out hover:scale-105 "
              />
            </div>
            <div className="mt-4 pt-8">
              <div className=" md:hidden  block">
                <Link
                  to="/allproduct"
                  className="text-[14px] hover:text-red-600 text-gray-900 mb-2 flex items-center gap-2"
                >
                  <GoArrowLeft /> Back To All Producat
                </Link>
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-3">
                  {producat.title}
                </h1>
                <p className=" mb-8 w-20  text-center rounded-4xl py-1 text-purple-500 text-[12px] bg-purple-100">
                  {producat.status}
                </p>
              </div>

              <h2 className=" text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                Product Description
              </h2>

              <div className="space-y-4">
                {/* Condition and Usage */}
                <div className="flex border-b pb-3 border-gray-500 gap-8 text-sm">
                  <div>
                    <span className="font-semibold text-purple-600">
                      Condition:{" "}
                      <span className="text-gray-900">
                        {producat.condition}
                      </span>
                    </span>{" "}
                    <span className="text-gray-900">{""}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-purple-600">
                      Usage Time:{" "}
                      <span className="text-gray-900">{producat.usage}</span>
                    </span>{" "}
                    <span className="text-gray-900">{""}</span>
                  </div>
                </div>

                {/* Description Text */}
                <p className="text-gray-600 leading-relaxed">
                  {producat.description}
                </p>
                {/* Action Icons */}
                <div className="flex items-center gap-2 md:block hidden ">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6 pt-10">
            {/* Product Details */}
            <div className=" ">
              <div className="hidden  md:block">
                <Link
                  to="/allproduct"
                  className="text-[17px] font-medium  hover:text-red-600 text-gray-900 mb-2 flex items-center gap-2"
                >
                  <GoArrowLeft /> Back To All Producat
                </Link>
                <h1 className="text-4xl font-semibold text-gray-900 mb-3">
                  {producat.title}
                </h1>
                <p className=" mb-8 w-20  text-center rounded-4xl py-1 text-purple-500 text-[12px] bg-purple-100">
                  {producat.status}
                </p>
              </div>

              <div className=" mb-7 bg-white   border rounded-lg border-base-300 p-4  shadow">
                <p className="text-xl text-green-600 font-semibold">
                  {" "}
                  ${producat.price_min}-{producat.price_max}
                </p>
                <p className="text-sm">Price starts from </p>
              </div>

              <div className="border bg-white p-4 border-base-300 rounded-lg shadow">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Product Details
                </h2>
                <p className="font-semibold text-gray-700  flex items-center gap-2">
                  Product ID:
                  <span className="text-[14px] text-gray-600">
                    {producat._id}
                  </span>
                </p>
                <p className="font-semibold text-gray-700  flex items-center gap-2">
                  Posted :<span className="text-[14px] ">{""}</span>
                </p>
              </div>
            </div>

            {/* Seller Information */}
            <div className="border p-4 bg-white rounded-lg shadow border-base-300">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Seller Information
              </h2>
              <div className="space-y-4">
                {/* Seller Profile */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">{""}</div>
                    <div className="text-sm text-gray-600">{""}</div>
                  </div>
                </div>

                {/* Seller Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-semibold text-gray-700  flex gap-2">
                      Location: <span>{producat.seller_name}</span>
                    </span>
                    <span className="text-gray-600">{""}</span>
                  </div>
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-24 flex gap-2">
                      Contact:{" "}
                      <span className="text-sm font-medium">
                        {producat.seller_contact}
                      </span>
                    </span>
                    <span className="text-gray-600">{""}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-700 w-24 flex gap-2">
                      Status:{" "}
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-semibold rounded-full">
                        {producat.status}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Want to Buy Button */}
            {/* <button
              onClick={handelModal}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md"
            >
              I Want Buy This Product
            </button> */}
         
          </div>
        </div>

        {/* Product Description Section */}

        

        
      </div>
    </div>
        </div>
    );
};

export default FoodDetlics;