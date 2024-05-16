import Image from "next/image";
import React from "react";
import Button from "../button/Button";

const CategoryPostTemplate = ({ title, desc, image, reverse }) => {
  return (
    <div className={`flex gap-12 ${reverse === true ? "flex-row-reverse" : ""}`}>
      <div className="flex-1 flex justify-center gap-6 flex-col">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-justify">{desc}</p>
        <Button name = "Read More" path="#" />
      </div>
      <div className={`flex-1 h-[500px] relative`}>
        <Image src={image} fill={true} alt="" />
      </div>
    </div>
  );
};

export default CategoryPostTemplate;
