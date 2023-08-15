import React from "react";
import Details from "./Details";
import ReactMarkdown from "react-markdown";

export default function IssueDetails({ props }) {
  const labelDetails = [];
  props.labels.map((label) =>
    labelDetails.push({ text: label.name, color: label.color })
  );
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        id="hs-modal-upgrade-to-pro"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        {/* <div className=""> Hello {props.title} </div> */}
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h3 className="text-2xl overflow-hidden  font-bold dark:text-white text-gray-900 sm:text-xl">
                  {props.title ? props.title : "No title given"}
                </h3>
                <div className="flex mt-5 justify-center">
                  <div className="hidden sm:block sm:shrink-0">
                    <img
                      alt="Paul Clapton"
                      src={props.img}
                      className="h-24 w-24 rounded-lg object-cover shadow-sm"
                    />
                  </div>
                </div>
                <p className="mt-1 text-lg font-medium text-gray-600">
                  ~ By {props.name}
                </p>
              </div>

              <div className="flex justify-center">
                {labelDetails.map((label) => (
                  <span
                    style={{
                      color: "#" + label.color,
                      borderColor: "#" + label.color,

                      // backgroundColor: "#" + label.color,
                    }}
                    className="mt-2 me-2 inline-block py-1 px-2 rounded-full border  last:mr-0 mr-1"
                  >
                    <h3
                      className="text-sm font-semibold"
                      style={{
                        color: "#" + label.color,
                      }}
                    >
                      {label.text}
                    </h3>
                  </span>
                ))}
              </div>
              <div className="mt-3 text-center overflow-hidden">
                {/* <span>Description: </span> */}
                <ReactMarkdown className=" text-lg text-gray-500">
                  {props.body
                    ? props.body
                    : "No description given , To check the issue click on the link below"}
                </ReactMarkdown>
              </div>
              <div className="flex justify-between">
                <Details repoLink={props.repoLink} comments={props.comment} />
                <button className="mt-2 px-4 py-2 rounded-xl border border-green-500 text-white bg-green-500 hover:bg-inherit hover:text-green-500 text-sm font-medium">
                  <a href={props.link} target="_blank">
                    Check out the issue
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
