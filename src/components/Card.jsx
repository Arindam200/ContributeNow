import { useState, useEffect } from "react";
const Card = (props) => {
  const labelNames = [];
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

  // console.log(
  //   time.Years,
  //   time.Months,
  //   time.Days,
  //   time.Hours,
  //   time.Minutes,
  //   time.Seconds
  // );

  props.labels.map((label) => labelNames.push(label.name));

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
              By John Doe
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

        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            {props.body ? props.body.slice(0, 100) : props.body}
          </p>
        </div>
        <div className="flex justify-around">
          {labelNames.map((names) => (
            <h3 disabled>{names}</h3>
          ))}
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">31st June, 2021</dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
 
      </a>
    </>
  );
};

export default Card;
