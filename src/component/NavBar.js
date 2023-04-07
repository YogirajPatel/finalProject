import React from "react";

const NavBar = () => {
  return (
    <nav id="nav" class=" flex mb-8  bg-stone-900">
      <a
        href="https://www.solutelabs.com/"
        target="_blank"
        rel="noreferrer"
        alt="solutelabs"
      >
        <img
          className="bg-white hover:border-2 my-4 ml-8 mr-8 h-12 rounded-md"
          alt="solutelabs"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNS43MjgiIGhlaWdodD0iMzUuODQyIiB2aWV3Qm94PSIwIDAgMzUuNzI4IDM1Ljg0MiI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiMxNjQxZmZ9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJTaGFwZV85IiBkPSJNODQuMTc5IDc1LjY3OWMtMy42ODItMi41NzgtOS42ODgtNC4yLTE2LjgtNi4zMzYtMy44MTctMS4xNDctNi4zLTQuOTYtMy41MzctNy45MTlhNy4wMTEgNy4wMTEgMCAwIDEgNS4zMzktMi4wMzljNC45MjYgMCAxMC45IDMuMjE0IDEzLjQxMiA1LjM5bDQuMjczLTYuNTU3aDguOTE0Vjg2LjczYzAgNi42NjgtNyA3LjMzLTcgNy4zMyAyLjUyLTguMzEgMS4xNDUtMTQuMzY1LTQuNjAxLTE4LjM4MXptLTIzLjc5MiAzLjIzYTI5LjUzMiAyOS41MzIgMCAwIDAgNi41ODQgMi40NTJjMi40MzkuNzEyIDguNDMxIDIgMTAuNzc2IDQuMjE4IDIuMDUyIDEuOTM5IDIuNTM2IDcuOTQzLTUuOSA4LjE1My0uMTc5IDAtLjM1NC4wMDctLjUyOC4wMDctMTQuMjQtLjAwMi0xMC45MzItMTQuODMtMTAuOTMyLTE0LjgzeiIgY2xhc3M9ImNscy0xIiBkYXRhLW5hbWU9IlNoYXBlIDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02MC4wNTQgLTU4LjIxOSkiLz4KPC9zdmc+Cg=="
        />
      </a>

      <h1 class="text-3xl font-dancing font-bold flex items-center text-gray-50 hover:underline">
        <a href="https://www.solutelabs.com/" target="_blank" rel="noreferrer">
          SoluteLabs
        </a>
      </h1>

      <div class="container mx-auto py-4 flex justify-end items-center">
        <div class="flex">
          <a href="#section1">
            <div class="flex items-center mr-16">
              <span className="text-4xl text-gray-50 ml-2">&#128221;</span>
              <span class="text-gray-50 font-dancing text-3xl hover:underline">
                Form
              </span>
            </div>
          </a>
          <a href="#section2">
            <div class="flex items-center mr-16">
              <span class="text-4xl text-gray-50 ml-2">&#128214;</span>
              <span class="text-gray-50 font-dancing text-3xl hover:underline">
                User Details
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
