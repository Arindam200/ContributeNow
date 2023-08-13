import { Link } from "react-router-dom";
import Image from "../assets/brandbird.png";
export default function Hero() {
  return (
    <>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal dark:text-white md:text-6xl md:tracking-tight">
            Your Gateway to{" "}
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Open Source Contribution
            </span>{" "}
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
            Empowering Beginners to Dive into Open Source Projects and Make
            Meaningful Contributions
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center w-full mb-2 btn btn-primary btn-lg sm:w-auto sm:mb-0"
            >
              Get Started
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
            <Link
              to="/list"
              className="inline-flex items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0"
            >
              Book a Demo
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <img
            src={Image}
            alt="Hellonext feedback boards software screenshot"
            className="w-full rounded-xl shadow-2xl shadow-blue-500"
          />
        </div>
      </section>
    </>
  );
}
