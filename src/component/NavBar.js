import React from "react";
import image from "../Images/img8.png";

const NavBar = () => {
  return (
    <nav id="nav" class=" navvy ">
      <a
        href="https://www.solutelabs.com/"
        target="_blank"
        rel="noreferrer"
        alt="solutelabs"
      >
        <img className="soluteImg" alt="solutelabs" src={image} />
      </a>

      <div class="navDiv">
        <div class="flex">
          <a href="#section1">
            <div class="navItem">
              <span className="navHeadingSym">&#128221;</span>
              <span class="navHeading">Form</span>
            </div>
          </a>
          <a href="#section2">
            <div class="flex items-center mr-16">
              <span class="navHeadingSym">&#128214;</span>
              <span class="navHeading">User Details</span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
