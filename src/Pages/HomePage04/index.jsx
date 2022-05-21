import React from "react";
import Slider from "../../Components/Slider";
import { IoIosAlbums } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";

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

function index() {
  return (
    <div>
      <section className="max-w-7xl mx-auto z-10 -mb-16 slider-bg">
        <Slider />
      </section>
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-[#333] text-3xl font-bold py-2">
            Learn to trade
          </h1>
          <p className="text-gray-400 py-2">
            Learn how the marhets work with our free education tools
          </p>
          <div className="flex gap-8 flex-wrap">
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
          <div className="grid grid-cols-2 gap-4 py-10 w-full">
            <div className="col-span-1 p-10 relative flex justify-center items-center">
              <div className="absolute top-10 right-16 w-96 h-56 bg-[rgba(252,180,45,0.3)] rounded-lg origin-center rotate-[-10deg]"></div>
              <div className="ml-32 w-96 h-56 overflow-hidden rounded-lg z-10">
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
    </div>
  );
}

export default index;
