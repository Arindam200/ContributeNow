import { useEffect, useState } from "react";

const useApiData = (repoUrl) => {
  const [repoDetails, setRepoDetails] = useState({
    id: "",
    name: "not found",
    star: "not found",
    language: "not found",
    link: "not found",
  });

  useEffect(() => {
    const addRepoDetails = async () => {
      const url = repoUrl;
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
  }, [repoUrl]);
  return repoDetails;
};

export default useApiData;
