import ApiContext from "./apicontext";
import { useState, useEffect } from "react";

const apiState = (props) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const updateIssue = async (pageNumber) => {
      let url = `https://api.github.com/search/issues?q=is:issue+is:open+is:public+label:%22good%20first%20issue%22&per_page=15&page=${pageNumber}`;
      const issueData = await fetch(url);
      const parsedData = await issueData.json();
      setData(parsedData.items);
    };

    updateIssue(pageNumber);
  }, [pageNumber]);

  const passData = {
    data,
    pageNumber,
    setPageNumber,
  };
  return (
    <ApiContext.Provider value={passData}>
      {props.children};
    </ApiContext.Provider>
  );
};

export default apiState;
