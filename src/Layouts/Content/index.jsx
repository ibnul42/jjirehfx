import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Content() {
  return (
    <div>
      <Carousel
        autoPlay={false}
        infiniteLoop={true}
        showThumbs={false}
        className="max-w-7xl mx-auto min-h-[580px] overflow-hidden bg-[#242426] text-white"
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1 flex flex-col justify-between px-3">
            <h1 className="text-5xl font-bold">
              React Out to new Trading experience
            </h1>
            <p className="text-xl font-semibold">
              Bring your trading ventures go around the world, way beyond the
              space of your trading account.
            </p>
            <div className="w-full flex justify-between gap-4">
              <div className="bg-[rgba(0,0,0,0.2)] flex items-center rounded-xl gap-3 px-2 py-1">
                <div className="w-7 h-7 bg bg-red-400 rounded-full overflow-hidden"></div>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2">
                    <p className="font-semibold">Tesla</p>
                    <p>-1.24%</p>
                  </div>
                  <p>747</p>
                </div>
              </div>
              <div className="bg-[rgba(0,0,0,0.2)] flex items-center rounded-xl gap-3 px-2 py-1">
                <div className="w-7 h-7 bg bg-red-400 rounded-full overflow-hidden"></div>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2">
                    <p>Tesla</p>
                    <p>-1.24%</p>
                  </div>
                  <p>747</p>
                </div>
              </div>
              <div className="bg-[rgba(0,0,0,0.2)] flex items-center rounded-xl gap-3 px-2 py-1">
                <div className="w-7 h-7 bg bg-red-400 rounded-full overflow-hidden"></div>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2">
                    <p>Tesla</p>
                    <p>-1.24%</p>
                  </div>
                  <p>747</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
          {/* <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" />
          <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Content;
