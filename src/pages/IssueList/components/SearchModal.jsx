import React, { useState, useEffect } from "react";
import Details from "../../Landing/components/Details";
import ReactMarkdown from "react-markdown";

export default function SearchModal({ onClose, props }) {
  const labelDetails = [];
  props.labels.map((label) =>
    labelDetails.push({ text: label.name, color: label.color })
  );
  return (
    <>
      <div className="fixed pt-16 inset-0 flex items-start justify-center z-50">
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-gray-700 bg-opacity-50 backdrop-blur"
        ></div>

        <div className="relative z-50 lg:w-[700px] overflow-scroll w-11/12 h-4/5 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-black dark:border-gray-700">
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
              {/* {/* <span>Description: </span>  */}
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
    </>
  );
}
