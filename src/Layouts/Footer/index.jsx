import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <footer className="br-gray-100">
      <div className="max-w-7xl mx-auto py-5">
        <ul className="flex gap-8 flex-wrap text-sm text-gray-400 hover:text-gray-600">
          <li className="cursor-pointer">Risk disclosure</li>
          <li className="cursor-pointer">Privacy policy</li>
          <li className="cursor-pointer">Return policy</li>
          <li className="cursor-pointer">Customer Agreement</li>
          <li className="cursor-pointer">AML policy</li>
        </ul>
        <p className="text-gray-400 text-sm pt-3">
          &copy;2022 Market incorporated. All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Index;
