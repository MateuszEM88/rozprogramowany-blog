import React, { useState, useEffect } from "react";
import arrow from "./img/toparrow.png";
import Image from "next/image";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Image
      src={arrow}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      alt="sroll icon"
      className="fixed z-10 bottom-8 right-8"
      style={{ display: visible ? "inline" : "none" }}
      height={50}
      width={50}
    />
  );
};

export default Scroll;
