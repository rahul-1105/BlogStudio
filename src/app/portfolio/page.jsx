import React from "react";
import Illustration from "../../../public/illustration.png";
import Website from "../../../public/websites.jpg";
import App from "../../../public/apps.jpg";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const categories = [
    {
      id: 1,
      name: "Illustration",
      path: "/portfolio/illustration",
    },
    {
      id: 2,
      name: "Websites",
      path: "/portfolio/websites",
    },
    {
      id: 3,
      name: "Applications",
      path: "/portfolio/applications",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">Choose a Gallery</h3>

      <div className="flex gap-16 ">
        <Link href="/portfolio/illustrations">
          <div className="h-[380px] w-[250px] border-4 dark:border-white border-slate-400 relative">
            <Image
              src={Illustration}
              fill="true"
              alt="img"
              className="object-cover"
            />
            <h2 className="absolute bottom-2 left-2 text-2xl font-semibold">
              Illustration
            </h2>
          </div>
        </Link>

        <Link href="/portfolio/websites">
          <div className="h-[380px] w-[250px] border-4 dark:border-white border-slate-400 relative">
            <Image
              src={Website}
              fill="true"
              alt="img"
              className="object-cover"
            />
            <h2 className="absolute bottom-2 left-2 text-2xl font-semibold">
              Websites
            </h2>
          </div>
        </Link>

        <Link href="/portfolio/applications">
          <div className="h-[380px] w-[250px] border-4 dark:border-white border-slate-400 relative">
            <Image src={App} fill="true" alt="img" className="object-cover" />
            <h2 className="absolute bottom-2 left-2 text-2xl font-semibold">
              Applications
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
