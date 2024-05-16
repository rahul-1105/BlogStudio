import Image from "next/image";
import React from "react";
import ContactImg from "../../../public/contact.png";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-5xl my-8 font-semibold ">Let's Keep in Touch</h1>
      <div className="grid grid-cols-2 gap-[100px] p-4 ">
        <div className="">
          <Image
            src={ContactImg}
            height={400}
            width={400}
            className="animate-img"
            alt="contact-img"
          />
        </div>
        <div className="">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-4 bg-transparent outline-none border dark:border-white border-black rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 bg-transparent outline-none border dark:border-white border-black rounded"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="p-4 h-[180px] bg-transparent outline-none border dark:border-white border-black rounded resize-none"></textarea>
            <Button path="/contact" name="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
