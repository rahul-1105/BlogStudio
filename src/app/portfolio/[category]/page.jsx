import React from "react";
import { items } from "./data";
import CategoryPostTemplate from "@/components/categoryPostTemplate/CategoryPostTemplate";

const Category = ({ params }) => {
  // console.log(items[params.category]);
  // console.log(params.category);
  return (
    <div className="flex flex-col gap-12">
      <h2 className="ml-2 text-3xl font-semibold dark:text-green-500 tracking-wider capitalize ">
        {params.category}
      </h2>
      <div className="flex justify-center flex-col gap-12 blog-conatiner">
        {items[params.category].map((item) => (
          <CategoryPostTemplate key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
