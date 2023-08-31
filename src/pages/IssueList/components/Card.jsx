import { useState, useEffect } from "react";
import Details from "../../Landing/components/Details";
import ReactMarkdown from "react-markdown";
import IssueDetails from "./IssueDetails";
import SearchModal from "./SearchModal";
const Card = (props) => {
  const labelDetails = [];

  props.labels.map((label) =>
    labelDetails.push({ text: label.name, color: label.color })
  );
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div class="relative text-start group">
        <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <button class="relative p-4 bg-black rounded-lg leading-none w-full">
          {/* <a className="relative lg:h-[300px] block overflow-hidden rounded-lg border hover:bg-gray-900 border-gray-500 p-4 sm:p-6 lg:p-8"> */}
          <div class="absolute -z-10 inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          {/* <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span> */}

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg text-start overflow-hidden lg:h-[60px] font-bold dark:text-white text-gray-900 sm:text-xl">
                {props.title ? props.title.slice(0, 70) : "No title given"}
              </h3>

              <p className="mt-1 text-start text-sm font-medium text-gray-600">
                By {props.name}
              </p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
              <img
                alt="Paul Clapton"
                src={props.img}
                className="h-16 w-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="h-10 items-start flex justify-start overflow-hidden">
            {props.labels.slice(0, 3).map((label, index) => (
              <span
                key={index}
                style={{
                  color: "#" + label.color,
                  borderColor: "#" + label.color,
                }}
                className="mt-2 me-2 inline-block py-1 px-2 rounded-full border last:mr-0 mr-1"
              >
                <h3
                  className="text-xs font-semibold"
                  style={{
                    color: "#" + label.color,
                  }}
                >
                  {label.name}
                </h3>
              </span>
            ))}
          </div>

          <div className="mt-3 text-start h-16 overflow-hidden">
            {/* <span>Description: </span> */}
            <ReactMarkdown className="max-w-[40ch] text-sm text-gray-500">
              {props.body
                ? props.body.slice(0, 100)
                : "No description given , To check the issue click on the link below"}
            </ReactMarkdown>
          </div>

          <div className="flex justify-between">
            <Details
              className="mt-10"
              repoLink={props.repoLink}
              comments={props.comment}
            />
            <button
              onClick={toggleModal}
              className="mt-2 px-4 py-1.5 rounded-lg border border-green-500  hover:bg-black  hover:bg-gradient-to-l hover:from-green-500 hover:via-green-300 hover:to-green-600 hover:text-white transition-all delay-50 text-green-500 text-sm font-medium"
            >
              {/* <a href={props.link} target="_blank"> */}
              Click Now
              {/* </a> */}
            </button>
            {/* <IssueDetails props={props} /> */}
          </div>
          {/* </a> */}
        </button>
        {modal && <SearchModal onClose={toggleModal} props={props} />}
      </div>
    </>
  );
};

export default Card;

// border-red-500 text-red-600 bg-red-200
// how to add dynamic classes in tailwind
// {labelNames.map((names) => (
//   <span className="mt-2 me-2 inline-block py-1 px-2 rounded-full border  last:mr-0 mr-1">
//     <h3 className="text-xs font-semibold" disabled>
//       {names}
//     </h3>
//   </span>
// ))}
