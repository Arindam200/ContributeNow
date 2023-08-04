import { useState, useEffect } from "react";
import Details from "./Details";
const Card = (props) => {
  const labelDetails = [];
  const currentTime = Date.now();
  const createdDate = new Date(props.active);

  const timeInMiliSeconds = currentTime - createdDate;
  const [time, setTime] = useState({
    Years: 0,
    Months: 0,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
  });

  const issueActivationTime = () => {
    setTime({
      Years: Math.floor(timeInMiliSeconds / (1000 * 60 * 60 * 24 * 365)),
      Months: Math.floor(timeInMiliSeconds / (1000 * 60 * 60 * 24 * 30)),
      Days: Math.floor(timeInMiliSeconds / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((timeInMiliSeconds / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((timeInMiliSeconds / (1000 * 60)) % 60),
      Seconds: Math.floor((timeInMiliSeconds / 1000) % 60),
    });
  };

  useEffect(() => {
    issueActivationTime();
  }, []);

  props.labels.map((label) =>
    labelDetails.push({ text: label.name, color: label.color })
  );

  return (
    <>
      <a
        href={props.link}
        target="_blank"
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {props.title}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
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

        <div className="">
          {labelDetails.map((label) => (
            <span className="mt-2 me-2 inline-block py-1 px-2 rounded-full border  last:mr-0 mr-1">
              <h3
                className="text-xs font-semibold"
                style={{ color: "#"+label.color }}
              >
                {label.text}
              </h3>
            </span>
          ))}
        </div>

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {props.body ? props.body.slice(0, 100) : props.body}
          </p>
        </div>


        <Details repoLink={props.repoLink} />
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
