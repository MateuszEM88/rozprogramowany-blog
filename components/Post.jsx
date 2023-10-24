import React from "react";
import moment from "moment/moment";
import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className=" bg-containerBg dark:bg-containerDark p-0 lg:p-4 mb-16 ">
      <div className="relative overflow-hidden shadow-md pb-60 mb-4">
        <img
          src={post.image?.url}
          alt={post.title}
          className="object-top absolute h-60 w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="transition duration-700 text-primaryText dark:text-darkText mb-4 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-300 text-2xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p>{post.text}</p>
        <div className="flex items-center justify-around mb-4 w-full">
          {/* <div className="flex item-center justify-center mb-4 w-full w-auto ">
          <img
            className="align-middle "
            alt={post?.author.name}
            height="50px"
            width="50px"
            src={post?.author.photo.url}
          />
          <p className="inline align-middle pt-3 text-primaryText dark:text-darkText  ml-2 text-lg">
            {post.author.name}
          </p>
        </div> */}
          {/* <div className="font-medium mb-4 pt-3 ml-6 text-gray-700 h-12 ">
          <span className="text-primaryText  dark:text-darkText">
            {moment(post.createdAt).format("DD- MM- YYYY")}
          </span>
        </div> */}
        </div>

        <div className="text-center pb-4">
          <Link href={`/post/${post.slug}`}>
            <p className="font-semibold">Czytaj dalej...</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
