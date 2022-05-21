import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider";

const HomePage02 = () => {
  return (
    <div className="">
      {/* slider */}
      <section className="max-w-7xl mx-auto z-10 -mb-16 slider-bg">
        <Slider />
      </section>
      {/* trade info */}
      <section className="bg-[#E4E5E9]">
        <div className="max-w-7xl mx-auto pt-12 pb-4 grid grid-cols-2 ">
          <div className="col-span-1 px-3 relative">
            <div className="absolute top-16 left-32 w-[100px] h-[100px] overflow-hidden rounded-full nugget_elm">
              <img
                src="/assets/Design/amazon.png"
                className="h-full w-full object-cover"
                alt="icon"
              />
            </div>
            <div className="absolute right-32 top-24 w-[150px] h-[150px] rounded-full overflow-hidden nugget_elm">
              <img
                src="/assets/Design/intel.png"
                className="h-full w-full object-cover"
                alt="icon"
              />
            </div>
            <div className="absolute left-32 top-56 w-[200px] h-[200px] rounded-full overflow-hidden nugget_elm">
              <img
                src="/assets/Design/mc.png"
                className="h-full w-full object-cover"
                alt="icon"
              />
            </div>
            <div className="absolute right-32 top-80 w-[80px] h-[80px] rounded-full overflow-hidden nugget_elm">
              <img
                src="/assets/Design/yahoo.png"
                className="h-full w-full object-cover"
                alt="icon"
              />
            </div>
          </div>
          <div className="col-span-1 ">
            <span className="bg-[#bedbfa] px-4 py-2 text-[#1980ec] rounded-md">
              Explore All Products
            </span>
            <h1 className="text-4xl text-[#333] font-extrabold my-7">
              Trade with confidence
            </h1>
            <p className="text-[#9f9f9f] text-xl my-5">
              Managed portfolios are built by experts to target sustainable,
              long-term results and the highest returns for your risk level.
            </p>
            <div className="flex justify-between gap-4 my-5">
              <div className="bg-white w-1/2 flex-shrink-0 rounded-lg p-5 shadow-xl overflow-hidden">
                <div className="w-full flex justify-center items-center">
                  <div className="h-32 w-32 overflow-hidden">
                    <img
                      src="/assets/Design/nugget_01.png"
                      className="h-full w-full"
                      alt="nugget"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center my-5">
                  <p className="text-2xl text-[#333] font-semibold">
                    Stocks & ETFs
                  </p>
                  <p className="py-2 text-xl text-[#666] text-center">
                    Reprehenderit in voluptate velit esse anim cillum dolore
                    fugiat nulla pariatur.
                  </p>
                  <Link
                    to="/#!"
                    className="text-[#296cc5] hover:border-b hover:border-yellow-400 "
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="bg-white w-1/2 flex-shrink-0 rounded-lg p-5 shadow-xl overflow-hidden">
                <div className="w-full flex justify-center items-center">
                  <div className="h-32 w-32 overflow-hidden">
                    <img
                      src="/assets/Design/nugget_02.png"
                      className="h-full w-full"
                      alt="nugget"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center my-5">
                  <p className="text-2xl text-[#333] font-semibold">
                    Cryptocurrencies
                  </p>
                  <p className="py-2 text-xl text-[#666] text-center">
                    Excepteur sint occaecat cupidatat non proident sunt in culpa
                    qui officia.
                  </p>
                  <Link
                    to="/#!"
                    className="text-[#296cc5] hover:border-b hover:border-yellow-400 "
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage02;
