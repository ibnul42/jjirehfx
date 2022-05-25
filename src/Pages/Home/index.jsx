import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider";
import { IoIosAlbums } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";

const products = [
  {
    title: "Stocks",
    titleShort: "Eq",
    desc: "Access 19,000+ stocks across core and emerging markets on 40+ exchanges worldwide.",
    color: "#264985",
    linkTo: "/#!",
  },
  {
    title: "Listed Stock",
    titleShort: "lq",
    desc: "Access 19,000+ stocks across core and emerging markets on 40+ exchanges worldwide.",
    color: "#fff",
    linkTo: "/#!",
  },
  {
    title: "Stocks",
    titleShort: "Eq",
    desc: "Access 19,000+ stocks across core and emerging markets on 40+ exchanges worldwide. Access 19,000+ stocks across core and emerging markets on 40+ exch Access 19,000+ stocks across core and emerging markets on 40+ exch",
    color: "#277797",
    linkTo: "/#!",
  },
  {
    title: "Listed Stock",
    titleShort: "lq",
    desc: "Access 19,000+ stocks across core and emerging markets on 40+ exchanges worldwide.",
    color: "#3b1d08",
    linkTo: "/#!",
  },
  {
    title: "Stocks",
    titleShort: "Eq",
    desc: "Access 19,000+ stocks across core and emerging markets on 40+ exchanges worldwide.",
    color: "#d46217",
    linkTo: "/#!",
  },
];

const tradings = [
  {
    title: "Trader's glossary",
    desc: "A-Z tradinf terms",
    icon: "",
  },
  {
    title: "Tutorial videos",
    desc: "Free learning videos",
    icon: "",
  },
  {
    title: "E-Book products",
    desc: "Buils your own strategies",
    icon: "",
  },
  {
    title: "Live commentary",
    desc: "Trade on the news",
    icon: "",
  },
];

const Home = () => {
  return (
    <div className="">
      {/* slider */}
      <section className="max-w-7xl mx-auto z-10 slider-bg">
        <Slider />
      </section>

      {/* video section */}
      <section className="max-w-7xl mx-auto bg-white">
        <div className="col-span-1 p-7 relative flex justify-center items-center">
          <div className="absolute top-10 left-3 md:left-5 lg:left-7 w-[95%] h-[200px] md:h-[300px] lg:h-[450px] bg-[rgba(252,180,45,0.3)] rounded-lg origin-center rotate-[-7deg]"></div>
          <div className="w-full h-[200px] md:h-[300px] lg:h-[450px] 2xl:h-[500px] overflow-hidden rounded-lg z-10">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/yZIummTz9mM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* trade */}
      <section className="bg-white px-3 py-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-[#333] text-3xl font-bold py-2">
            Learn to trade
          </h1>
          <p className="text-gray-400 py-2">
            Learn how the marhets work with our free education tools
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 w-full">
            <div className="col-span-1 py-10 relative flex justify-center items-center gap-8 flex-wrap">
              {tradings.map((item, index) => (
                <div
                  className="border border-gray-500 hover:border-yellow-500 flex-shrink-0 rounded-lg cursor-pointer relative p-5 flex flex-col items-center w-56"
                  key={index}
                >
                  <div className="absolute px-5 bg-white -top-2 left-20">
                    <IoIosAlbums fill="#FCB42D" />
                  </div>
                  <p className="font-semibold text-[#333] pt-2 text-md py-2">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="col-span-1 h-full my-auto flex flex-col justify-center">
              <div className="flex flex-col justify-around py-5">
                <h1 className="text-[#333] font-bold">What you will learn</h1>
                <ul className="my-2 text-gray-500 text-sm">
                  <li className="my-2 flex gap-1 items-center">
                    <AiFillCaretRight fill={"#FCB42D"} />
                    Introduction to Financial Trading
                  </li>
                  <li className="my-2 flex gap-1 items-center">
                    <AiFillCaretRight fill={"#FCB42D"} />
                    Technical Analysis
                  </li>
                  <li className="my-2 flex gap-1 items-center">
                    <AiFillCaretRight fill={"#FCB42D"} />
                    Fundamental Analysis
                  </li>
                  <li className="my-2 flex gap-1 items-center">
                    <AiFillCaretRight fill={"#FCB42D"} />
                    When to Enter & Exit Trades
                  </li>
                  <li className="my-2 flex gap-1 items-center">
                    <AiFillCaretRight fill={"#FCB42D"} />
                    How to Manage Risk
                  </li>
                  <li className="my-2 flex gap-1 items-center">
                    <AiFillCaretRight fill={"#FCB42D"} />
                    Trading Psychology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* trade info */}
      <section className="bg-[#E4E5E9]">
        <div className="max-w-7xl mx-auto pt-12 pb-4 grid grid-cols-1 md:grid-cols-2 ">
          <div className="col-span-1 px-10 md:px-16 lg:px-20 xl:px-28 pt-32">
            <div className="px-5 relative min-h-[350px]">
              <div className="absolute top-5 left-5 w-20 lg:w-24 h-20 lg:h-24">
                <img
                  src="/assets/Trading/amazon.svg"
                  className="w-full h-full nugget_elm"
                  alt=""
                />
              </div>
              <div className="absolute top-10 lg:top-12 right-5 w-24 lg:w-28 h-24 lg:h-28">
                <img
                  src="/assets/Trading/intel.svg"
                  className="w-full h-full nugget_elm"
                  alt=""
                />
              </div>
              <div className="absolute top-32 lg:top-44 left-5 sm:left-8 md:left-5 xl:left-8 w-36 lg:w-40 h-36 lg:h-40">
                <img
                  src="/assets/Trading/mcdonald.svg"
                  className="w-full h-full nugget_elm"
                  alt=""
                />
              </div>
              <div className="absolute top-48 lg:top-56 right-4 md:right-3 lg:right-6 xl:right-9 w-16 h-16">
                <img
                  src="/assets/Trading/yahoo.svg"
                  className="h-full w-full nugget_elm"
                  alt=""
                />
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
              <div className="bg-white col-span-1 rounded-lg p-5 shadow-xl overflow-hidden">
                <div className="w-full flex justify-center items-center">
                  <div className="h-32 w-32 overflow-hidden">
                    <img
                      src="/assets/Design/nugget_01.svg"
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
              <div className="bg-white col-span-1 rounded-lg p-5 shadow-xl overflow-hidden">
                <div className="w-full flex justify-center items-center">
                  <div className="h-32 w-32 overflow-hidden">
                    <img
                      src="/assets/Design/nugget_02.svg"
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

      {/* Product */}
      <section className="bg-[#e2b663] w-full-height py-10">
        <div className="max-w-7xl mx-auto px-3">
          <h1 className="my-8 font-semibold">Popular Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products &&
              products.map((item, index) => (
                <div
                  className="p-4 flex flex-col col-span-1 bg-[rgba(255,255,255,0.2)] rounded-lg flex-shrink-0 shadow-xl"
                  key={index}
                >
                  <div className="gap-3 flex items-center my-2">
                    <div
                      className={`h-7 w-7 bg-[#264985] rounded-full overflow-hidden flex justify-center items-center text-white uppercase text-xs`}
                    >
                      {item.titleShort}
                    </div>
                    <h4 className="font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 my-2 h-24 overflow-hidden">
                    {item.desc}
                  </p>
                  <div className="flex justify-end my-2">
                    <Link
                      to={item.linkTo}
                      className="hover:underline text-blue-600"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
