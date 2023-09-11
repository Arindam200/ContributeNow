import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-10 text-white pt-10">
        <div className="font-bold text-center text-2xl ">ContributeNow</div>
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          {localStorage.getItem("user") ? (
            <Link
              to="/list"
              className="inline-flex text-xl  items-center justify-center w-full mb-2 sm:w-auto sm:mb-0"
            >
              Sign In
            </Link>
          ) : (
            <Link
              to="/auth"
              className="inline-flex items-center justify-center w-full"
            >
              SignUp
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
