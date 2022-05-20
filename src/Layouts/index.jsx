import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Index() {
  return (
    <div className="min-h-screen bg-[#242426] text-black">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Index;
