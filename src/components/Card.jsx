const Card = (props) => {
  const labelNames = [];
  props.labels.map((label) => labelNames.push(label.name));
  return (
    <div className="">
      <a
        href={props.link}
        target="_blank"
        className="flex flex-col gap-2 justify-around"
      >
        <div className="">
          <h3 className="mb-2 text-center">{props.title}</h3>
        </div>
        <div className="flex justify-around">
          {labelNames.map((names) => (
            <h3 disabled>{names}</h3>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Card;
