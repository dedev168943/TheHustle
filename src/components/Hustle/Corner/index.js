import React from "react";
import Content from "./Content";
import Top from "./Top";

const Corner = () => {
  return (
    <div className="py-10 md:min-h-screen">
      <div className="container mx-auto ">
        <Top />
        <Content />
        {/* <Bottom /> */}
      </div>
    </div>
  );
};

export default Corner;
