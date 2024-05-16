import React from "react";

const Portfoliolayout = ({children}) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <h1 className="text-7xl font-bold tracking-wide">Our Works</h1>
      {children}
    </div>
  );
};

export default Portfoliolayout;
