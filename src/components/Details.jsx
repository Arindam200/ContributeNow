import { useEffect, useState } from "react";

const Details = (props) => {
  const [repoDetails, setRepoDetails] = useState({
    id: "",
    name: "not found",
    star: "not found",
    language: "not found",
    link: "not found",
  });
  useEffect(() => {
    const addRepoDetails = async () => {
      const url = props.repoLink;
      const data = await fetch(url);
      const newData = await data.json();
      setRepoDetails({
        id: newData.id,
        name: newData.name,
        language: newData.language,
        link: newData.html_url,
        star: newData.stargazers_count,
      });
    };
    addRepoDetails();
  }, []);
  return (
    <div>
      <a
        // href={repoDetails.link}
        // target="_blank"
        className="flex gap-5 justify-around text-grey-500  text-sm font-medium"
      >
        <h4>{repoDetails.name}</h4>
        <p>{repoDetails.star}</p>
        <p>{repoDetails.language}</p>
      </a>
    </div>
  );
};

export default Details;
