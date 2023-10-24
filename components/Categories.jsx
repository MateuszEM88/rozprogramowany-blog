import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "./services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="   rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl text-primaryText dark:text-darkText mb-8 font-semibold border-b pb-4">
        Kategorie
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <button
            className=" p-2 rounded-lg text-gray-100 bg-indigo-600 hover:bg-indigo-800 m-2 
          "
          >
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
