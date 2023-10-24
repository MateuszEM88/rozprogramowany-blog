import React from "react";
import moment from "moment";
import Scroll from "./Scroll";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.code) {
        modifiedText = <code key={index}>{text}</code>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-one":
        return (
          <h1 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "block-quote":
        return (
          <blockquote key={index} className="whitespace-pre-wrap">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </blockquote>
        );

      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-containerBg text-justify dark:bg-containerDark  lg:p-8 pb-12 mt-8 mb-8">
      <Scroll />
      <h1 className="mb-8 px-4  lg:w-1/2 text-primaryText text-center dark:text-darkText text-3xl lg:text-5xl font-semibold">
        {post.title}
      </h1>
      <div className="px-4 lg:px-4">
        <div className="flex items-center justify-around mb-8 w-full">
          <div className="flex justify-center item-center  mb-4  w-full">
            <img
              className="w-12 h-12 align-middle text-primaryText dark:text-darkText rounded-full"
              alt={post.author.name}
              src={post.author.photo.url}
            />
            <p className="inline align-middle pt-3 text-primaryText dark:text-darkText ml-2 text-lg">
              {post?.author.name}
            </p>

            <div className="font-medium mb-4 pt-4 ml-6 text-gray-700 ">
              <span className="text-primaryText dark:text-darkText">
                {moment(post.createdAt).format("DD-MM-YYYY")}
              </span>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.image.url}
            alt={post.title}
            className="object-top w-full h-full rounded-t-lg"
          />
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="lg:w-4/5">
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
