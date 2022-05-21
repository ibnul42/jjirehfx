import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider";

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
  {
    title: "Listed Stock",
    titleShort: "lq",
    desc: "Access 19,000+ stocks across core and emerging markets on 40+ exchanges worldwide.",
    color: "#b1bb2c",
    linkTo: "/#!",
  },
];

const Home = () => {
  return (
    <div className="">
      {/* slider */}
      <section className="max-w-7xl mx-auto z-10 -mb-16 slider-bg">
        <Slider />
      </section>
      {/* Product */}
      <section className="bg-[#e2b663] w-full-height py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="my-8 font-semibold">Popular Products</h1>
          <div className="flex justify-between flex-wrap gap-5">
            {products &&
              products.map((item, index) => (
                <div
                  className="p-4 flex flex-col w-60 bg-[rgba(255,255,255,0.2)] rounded-lg flex-shrink-0 shadow-xl"
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
