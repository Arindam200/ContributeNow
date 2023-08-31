import React from "react";
import Details from "../../Landing/components/Details";
import ReactMarkdown from "react-markdown";

export default function IssueDetails({ props }) {
  const labelDetails = [];
  props.labels.map((label) =>
    labelDetails.push({ text: label.name, color: label.color })
  );

  return (
    <>
      {/* <!-- Modal --> */}
      {/* <div>{props.name}</div> */}

      <div
        id="hs-modal-upgrade-to-pro"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        {/*  <div className=""> Hello {props.title} </div>  */}
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          
        </div>
      </div>
    </>
  );
}
