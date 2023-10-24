import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "./services";
import { useTheme } from "next-themes";
import sun from "../components/img/sun.png";
import moon from "../components/img/moon.png";
import Image from "next/image";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="mb-2 w-100 sticky top-0 z-10 bg-opacity-90  backdrop-blur bg-containerDark border-b-2 dark:border-borderDark  py-6  ">
      <div className="w-full inline-block">
        <div className="md:float-left block ml-2 lg:ml-16">
          <Link href="/">
            <span className="transition duration-700 cursor-pointer font-bold text-darkText hover:text-indigo-200 text-xl ">
              rozprogramowany.dev
            </span>
          </Link>
        </div>
        <div className="md:float-left  md:contents">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`absolute right-1/2 top-6 md:top-5 z-30 md:right-12  rounded-full p-1 ${
              open ? "flex" : "max-md:hidden"
            }`}
          >
            {theme === "light" ? (
              <Image src={sun} alt="me" width="32" height="32" />
            ) : (
              <Image src={moon} alt="me" width="32" height="32" />
            )}
          </button>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-4 z-20 top-4 md:hidden"
          >
            <Hamburger toggled={open} toggle={setOpen} color="#06b6d4" />
          </div>
          <div
            className={`fixed md:hidden backdrop-blur transform duration-700 flex flex-col bg-containerDark  right-0 top-0 w-2/3 h-screen justify-center text-center ${
              open ? "flex" : "-translate-y-full"
            }`}
          >
            {categories.map((category, index) => (
              <Link
                onClick={() => setOpen(!open)}
                key={index}
                href={`/category/${category.slug}`}
              >
                <ul className="flex-start text-darkText font-semibold text-3xl w-full p-2">
                  <li className="">{category.name}</li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
