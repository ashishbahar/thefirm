import React, { useEffect } from "react";
import gif from "../assets/images/giphy.gif";
const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.classList.remove("over_hidden");
      document.querySelector(".pre_loader").classList.add("d-none");
    }, 4000);
  }, []);

  return (
    <section>
      <div
        class="vh-100 pre_loader justify-content-center d-flex align-items-center"
        id="pre-loader"
      >
        <img
          class="justify-content-center d-flex align-items-center frame"
          src={gif}
          alt="gif"
        />
      </div>
    </section>
  );
};

export default Preloader;
