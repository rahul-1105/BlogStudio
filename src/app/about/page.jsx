import Button from "@/components/button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative ">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill="true"
          alt="About Banner"
          className="object-cover grayscale"
        />
        <div className="absolute z-10 bottom-5 left-5 bg-green-500 text-white p-2 text-lg font-bold ">
          <h1 className="text-2xl ">Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>

      <div className="flex gap-28 text-justify mt-8">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Who Are We?</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
            <br />
            <br />
            A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">What We Do?</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />- Mobile Apps
          </p>
          <Button path="/contact" name="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
