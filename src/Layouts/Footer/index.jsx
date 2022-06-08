import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook, FaFlagUsa } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsTelephoneFill, BsClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

function Index() {
  return (
    <footer className="bg-[#fafafe] px-3 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#898c95]">
          <div className="col-span-1 flex flex-col">
            <div className="my-1 flex items-center gap-3">
              <HiLocationMarker />
              <p>816 Rogers Ave</p>
            </div>
            <div className="my-1 flex items-center gap-3">
              <BsTelephoneFill />
              <a href="tel:3474035603" className="inline-block">
                347-403-5603
              </a>
            </div>
            <div className="my-1 flex items-center gap-3">
              <MdEmail />
              <a href="mailto:sanzstlouis@gmail.com" className="inline-block">
                sanzstlouis@gmail.com
              </a>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <BsClockFill />
              <p>Monday - Friday: 8am - 8pm Saturday, Sunday: Closed</p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="col-span-1">
              <ul>
                <p className="pb-5">Services</p>
                <li>Data Protection</li>
                <li>Security Protected</li>
                <li>Support 24/7</li>
                <li>Payment Method</li>
                <li>Registered Company</li>
                <li>Live exchange Rate</li>
                <li>Security and Privacy-Centric</li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="pb-5">Email Newslatter</p>
              <div className="relative border border-gray-500 px-2 py-2 grid grid-cols-12 gap-1 items-center">
                <div className="col-span-2">
                  <AiOutlineMail className="h-5 w-5" />
                </div>
                <form className="col-span-8 overflow-hidden">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="bg-transparent focus-visible:outline-none w-full"
                  />
                </form>
                <div className="col-span-2 flex justify-end">
                  <IoIosSend className="h-5 w-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-12 py-3">
          <div className="col-span-1 md:col-span-6 flex justify-start items-center gap-3">
            <FaFacebook fill="" className="w-7 h-7 cursor-pointer" />
            <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
            <AiFillInstagram className="w-8 h-8 cursor-pointer" />
          </div>
          <div className="col-span-1 md:col-span-3 flex justify-end">
            <div className="text-[#333] border-[#adadad] inline-block cursor-pointer">
              <div className="bg-[#e6e6e6] text-[#333] border-[#adadad] flex justify-center items-center gap-3 px-3 py-2 rounded-md">
                <FaFlagUsa />
                <span>English</span>
                <MdArrowDropDown className="w-5  h-5 " />
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-3">
            <p className="text-gray-400 text-sm pt-3 text-center">
              2022 &copy; Copyright JJirehfx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Index;
