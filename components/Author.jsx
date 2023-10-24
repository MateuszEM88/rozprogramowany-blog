import React from "react";

const Author = ({ author }) => {
  return (
    <div className="flex w-full flex-col bg-containerBg dark:bg-containerDark  mt-8 mb-8 p-2 relative ">
      <h3 className="text-xl text-primaryText dark:text-darkText text-left mb-8 font-semibold border-b pb-4">
        Autor.
      </h3>
      <h3 className=" my-4 text-lg text-primaryText dark:text-darkText font-bold">
        {author.name}
      </h3>
      <p className=" text-md text-primaryText dark:text-darkText">
        {author.description}
      </p>
    </div>
  );
};

export default Author;
