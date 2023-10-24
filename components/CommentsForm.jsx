import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "./services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-containerBg dark:bg-containerDark shadow-md border-2 border-gray dark:border-borderDark dark:hover:shadow-md transition-shadow duration-300 dark:hover:shadow-indigo-900 rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl text-primaryText dark:text-darkText mb-8 font-semibold border-b pb-4">
        Zostaw komentarz
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-indigo-200 bg-inputBg text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        <input
          type="text"
          ref={nameEl}
          className="pl-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-indigo-200 bg-inputBg text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="pl-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-indigo-200 bg-inputBg text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 ">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
          />
          <label
            className="text-primaryText dark:text-darkText cursor-pointer ml-2"
            htmlFor="storeData"
          >
            Zachowaj email i nazwę
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">Wszystkie pola są wymagane</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-600 text-lg rounded-lg text-white  px-8 py-3 cursor-pointer"
        >
          Skomentuj
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment submited
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
