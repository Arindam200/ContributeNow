import { parse } from "postcss";
import ApiContext from "./apicontext";
import { useState, useEffect } from "react";

const apiState = (props) => {
  const [data, setData] = useState([]);
  let repoLink = [];
  const [repo, setRepo] = useState({
    id: 0,
    name: "not found",
    language: "not found",
    stars: "not found",
    html_url: "not found",
    description: "not found",
  });
  useEffect(() => {
    const updateIssue = async () => {
      const url =
        "https://api.github.com/search/issues?q=is:issue+is:open+is:public+label:%22good%20first%20issue%22";
      const issueData = await fetch(url);
      const parsedData = await issueData.json();
      setData(parsedData.items);
    };
    updateIssue();
  }, []);
  data.map((element) => {
    repoLink.push(element.repository_url);
  });
  useEffect(() => {
    const updateRepo = async () => {
      repoLink.map(async (link) => {
        let dataRepo = await fetch(link);
        let newData = await dataRepo.json();
        console.log(newData);
        // setRepo({
        //   id: newData.id,
        //   name: newData.name,
        //   language: newData.language,
        //   stars: newData.stargazers_count,
        //   html_url: newData.html_url,
        //   description: newData.description,
        // });
      });
    };
    updateRepo();
  });
  console.log(repo);
  const passData = {
    data,
    repo,
  };
  return (
    <ApiContext.Provider value={passData}>
      {props.children};
    </ApiContext.Provider>
  );
};

export default apiState;
