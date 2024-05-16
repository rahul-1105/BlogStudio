import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 3,
      name: "About",
      path: "/about",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 6,
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <header className="h-20">
      <nav className="flex justify-between items-center h-full">
        <Link href="/">
          <h1 className="text-3xl font-semibold">BlogStudio</h1>
        </Link>
        <div className="flex items-center gap-6 h-full">
          {links.map((link) => (
            <Link key={link.id} href={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
