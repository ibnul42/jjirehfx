import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Index() {
  return (
    <div className="min-h-screen text-black flex flex-col justify-between overflow-y-auto">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Index;
