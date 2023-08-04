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

  console.log(
    time.Years,
    time.Months,
    time.Days,
    time.Hours,
    time.Minutes,
    time.Seconds
  );

  props.labels.map((label) => labelNames.push(label.name));

  return (
    <div className="">
      <a
        href={props.link}
        target="_blank"
        className="flex flex-col gap-2 justify-around"
      >
        <img src={props.img} alt="repo image" />
        <div className="">
          <h3 className="mb-2 text-center">{props.title}</h3>
        </div>
        <div className="flex justify-around">
          {labelNames.map((names) => (
            <h3 disabled>{names}</h3>
          ))}
        </div>
        <div>{}</div>
      </a>
    </div>
  );
};

export default Card;
