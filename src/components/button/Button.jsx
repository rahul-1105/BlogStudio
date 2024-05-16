import Link from "next/link";
import React from "react";

const Button = ({path, name}) => {
  return (
    <Link href={path} >
      <button className="p-4 rounded-md text-sm font-semibold bg-green-500 outline-none text-white">
       {name}
      </button>
    </Link>
  );
};

export default Button;
