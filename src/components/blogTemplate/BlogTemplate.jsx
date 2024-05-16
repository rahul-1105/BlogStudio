import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogTemplate = ({ image, title, desc }) => {
  return (
    <Link href={`/blog/${title}`} className="grid grid-cols-[.65fr_1fr] gap-8">
      <div className={`h-[280px] relative`}>
        <Image src={image} fill={true} alt="" className="object-cover" />
      </div>
      <div className="w-full flex flex-col justify-center gap-4 p-4">
        <h2 className="text-4xl font-semibold tracking-wider">{title}</h2>
        <p className="text-base tracking-wider">{desc}</p>
      </div>
    </Link>
  );
};

export default BlogTemplate;
