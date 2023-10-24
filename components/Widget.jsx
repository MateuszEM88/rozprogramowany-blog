import React from "react";
import moment from "moment";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "./services";
import arrow from "../components/img/arrow.png";
import Image from "next/image";

const Widget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);

  return (
    <div className=" lg:sticky relative lg:top-20 rounded-lg p-8 mb-8">
      <h3 className="text-xl text-primaryText dark:text-darkText mb-8 font-semibold border-b pb-4">
        {slug ? "Powiązane posty" : "Ostatnie posty"}
      </h3>
      {relatedPost.map((post, index) => (
        <Link key={index} href={`/post/${post.slug}`}>
          <div className="flex items-center w-full mb-4" key={index}>
            <div className="w-16 flex-none">
              <Image
                alt={post.title}
                height="60px"
                width="60px"
                className="align-middle rounded-full"
                src={arrow}
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-primaryText dark:text-darkText font-xs">
                {moment(post.createdAt).format("DD- MM- YYYY")}
              </p>

              {post.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Widget;
