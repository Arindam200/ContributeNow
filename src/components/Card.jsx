import { useState, useEffect } from "react";
import Details from "./Details";
import ReactMarkdown from "react-markdown";
const Card = (props) => {
  const labelDetails = [];
  const currentTime = Date.now();
  const createdDate = new Date(props.active);
  const updatedDate = new Date(props.update);

  const timeInMiliSecondsForCreate = currentTime - createdDate;
  const timeInMiliSecondsForUpdate = currentTime - updatedDate;
  const [timeCreate, setTimeCreate] = useState({
    Years: 0,
    Months: 0,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });
  const [timeUpdate, setTimeUpdate] = useState({
    Years: 0,
    Months: 0,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  const issueActivationTime = () => {
    setTimeCreate({
      Years: Math.floor(
        timeInMiliSecondsForCreate / (1000 * 60 * 60 * 24 * 365)
      ),
      Months: Math.floor(
        timeInMiliSecondsForCreate / (1000 * 60 * 60 * 24 * 30)
      ),
      Days: Math.floor(timeInMiliSecondsForCreate / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((timeInMiliSecondsForCreate / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((timeInMiliSecondsForCreate / (1000 * 60)) % 60),
      Seconds: Math.floor((timeInMiliSecondsForCreate / 1000) % 60),
    });
  };
  const issueUpdatationTime = () => {
    setTimeUpdate({
      Years: Math.floor(
        timeInMiliSecondsForUpdate / (1000 * 60 * 60 * 24 * 365)
      ),
      Months: Math.floor(
        timeInMiliSecondsForUpdate / (1000 * 60 * 60 * 24 * 30)
      ),
      Days: Math.floor(timeInMiliSecondsForUpdate / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((timeInMiliSecondsForUpdate / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((timeInMiliSecondsForUpdate / (1000 * 60)) % 60),
      Seconds: Math.floor((timeInMiliSecondsForUpdate / 1000) % 60),
    });
  };

  useEffect(() => {
    issueActivationTime();
    issueUpdatationTime();
  }, []);

  props.labels.map((label) =>
    labelDetails.push({ text: label.name, color: label.color })
  );

  return (
    <>
      <a
        href={props.link}
        target="_blank"
        className="relative lg:h-[300px] block overflow-hidden rounded-lg border hover:bg-gray-900 border-gray-500 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg overflow-hidden lg:h-[60px] font-bold dark:text-white text-gray-900 sm:text-xl">
              {props.title ? props.title.slice(0, 70) : "No title given"}
            </h3>

            <p className="mt-1  text-xs font-medium text-gray-600">
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

        <div className="h-10 overflow-hidden">
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
                className="text-xs font-semibold"
                style={{
                  color: "#" + label.color,
                }}
              >
                {label.text}
              </h3>
            </span>
          ))}
        </div>

        <div className="mt-4 h-16 overflow-hidden">
          {/* <span>Description: </span> */}
          <ReactMarkdown className="max-w-[40ch] text-sm text-gray-500">
            {props.body
              ? props.body.slice(0, 100)
              : "No description given , To check the issue click on the link below"}
          </ReactMarkdown>
        </div>

        {/* <Details repoLink={props.repoLink} /> */}
      </a>
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
