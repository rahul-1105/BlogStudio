import BlogTemplate from "@/components/blogTemplate/BlogTemplate";
import React from "react";

const Blog = () => {
  return (
    <>
      <h1 className="text-center text-3xl mb-12">All Blogs</h1>
      <div className="flex flex-col gap-12">
        <BlogTemplate
          title="Blog 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec nunc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi corporis eaque porro, impedit nihil quo quibusdam molestiae nemo adipisci praesentium fugiat sunt. Facere voluptates perspiciatis magnam, autem"
          image="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
        />
        <BlogTemplate
          title="Blog 2"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec nunc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi corporis eaque porro, impedit nihil quo quibusdam molestiae nemo adipisci praesentium fugiat sunt. Facere voluptates perspiciatis magnam, autem"
          image="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
        />
        <BlogTemplate
          title="Blog 3"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec nunc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi corporis eaque porro, impedit nihil quo quibusdam molestiae nemo adipisci praesentium fugiat sunt. Facere voluptates perspiciatis magnam, autem"
          image="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
        />
        <BlogTemplate
          title="Blog 4"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Donec nec nunc nec nunc. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi corporis eaque porro, impedit nihil quo quibusdam molestiae nemo adipisci praesentium fugiat sunt. Facere voluptates perspiciatis magnam, autem"
          image="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
        />
      </div>
    </>
  );
};

export default Blog;
