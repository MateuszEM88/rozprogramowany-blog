import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "./services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="transition-shadow duration-300 dark:hover:shadow-indigo-900 bg-containerBg dark:bg-containerDark border-2 border-gray dark:border-borderDark shadow-md rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl text-primaryText dark:text-darkText mb-8 font-semibold border-b pb-4">
            {comments.length} Komentarze
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4 text-primaryText dark:text-darkText">
                <span className="font-semibold text-primaryText dark:text-darkText">
                  {comment.name}
                </span>{" "}
                on {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-primaryText dark:text-darkText w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
