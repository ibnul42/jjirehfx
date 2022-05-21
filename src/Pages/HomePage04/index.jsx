import React from "react";
import Slider from "../../Components/Slider";
import { IoIosAlbums } from "react-icons/io";

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
        </div>
      </section>
    </div>
  );
}

export default index;
