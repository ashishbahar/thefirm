import React, { useState } from "react";
import gif2 from "../assets/images/png/arrow_up.png"
const BackToTop = () => {
  const [first, setfirst] = useState(true);
  const clikontop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
      setfirst(false);
    } else {
      setfirst(true);
    }
  });
  return (
    <section className=" position-fixed arrow_postion c_pointer">
      <img
        src={gif2}
        alt="gif2"
        onClick={() => clikontop()}
        className={first ? "d-none arrow_width" : " arrow_width d-block"}
      />
    </section>
  );
};

export default BackToTop;
