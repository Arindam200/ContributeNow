import { parse } from "postcss";
import ApiContext from "./apicontext";
import { useState, useEffect } from "react";

const apiState = (props) => {
  const [data, setData] = useState([]);

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

  return (
    <ApiContext.Provider value={data}>{props.children};</ApiContext.Provider>
  );
};

export default apiState;
