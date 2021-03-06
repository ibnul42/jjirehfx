import { Carousel } from "react-responsive-carousel";

const slider = [
  {
    title: "React Out to new Trading experience",
    desc: "Bring your trading ventures go around the world, way beyond the space of your trading account.",
    menuItems: [
      {
        name: "TSLA",
        icon: "",
        overall: "-0.89",
        current: "229.00",
      },
      {
        name: "Google",
        icon: "",
        overall: "-0.89",
        current: "229.00",
      },
      {
        name: "Aapl",
        icon: "",
        overall: "-0.89",
        current: "229.00",
      },
    ],
    sliderImg: "/assets/Design/nugget.png",
  },
  // {
  //   title: "Everyr seg experience",
  //   desc: "Bring your trading ventures go around the world, way beyond the space of your trading account.",
  //   menuItems: [
  //     {
  //       name: "mcd",
  //       icon: "",
  //       overall: "0.89",
  //       current: "286.00",
  //     },
  //     {
  //       name: "amzn",
  //       icon: "",
  //       overall: "-0.53",
  //       current: "267.00",
  //     },
  //     {
  //       name: "Aapl",
  //       icon: "",
  //       overall: "-8.89",
  //       current: "296.00",
  //     },
  //   ],
  //   sliderImg: "/assets/Design/nugget.png",
  // },
];

const Slider = () => {
  return (
    <div className="">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={2500}
        stopOnHover={false}
        className="text-white -mt-8 h-[540px] xl:h-[768px]"
      >
        {slider.map((item, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" key={index}>
            <div className="col-span-1 flex flex-col justify-center px-5 py-1 md:py-10 md:h-[480px]">
              <h1 className="text-xl md:text-5xl font-bold my-3 break-words">
                {item.title}
              </h1>
              <p className="text-sm md:text-md my-3 text-gray-400 break-words">
                {item.desc}
              </p>
              <div className="hidden w-full md:flex justify-between gap-4 mx-2 my-3">
                {item.menuItems &&
                  item.menuItems.map((subMenu, index) => (
                    <div
                      className="bg-[rgba(0,0,0,0.2)] flex items-center rounded-xl gap-3 px-2 py-1"
                      key={index}
                    >
                      <div className="w-7 h-7 bg bg-red-400 rounded-full overflow-hidden">
                        {subMenu.icon && <img src={subMenu.icon} alt="" />}
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex gap-2">
                          <p className="uppercase">{subMenu.name}</p>
                          <p className="text-gray-400">{subMenu.overall}%</p>
                        </div>
                        <p className="text-red-400 text-left">
                          {subMenu.current}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center items-center mt-6">
                <div className="w-full -mt-3 sm:mt-6 md:mt-10 lg:mt-5 xl:mt-24 2xl:mt-28">
                  <img
                    src={item.sliderImg}
                    className="nugget z-0 h-full w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
