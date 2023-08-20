import ApiContext from "./apicontext";
import { useState, useEffect } from "react";

const apiState = (props) => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const updateIssue = async (pageNumber) => {
      setLoading(true);
      let url = `https://api.github.com/search/issues?q=is:issue+is:open+is:public+label:%22good%20first%20issue%22&per_page=15&page=${pageNumber}`;
      const issueData = await fetch(url);
      setProgress(10);
      const parsedData = await issueData.json();
      setProgress(30);
      setTimeout(() => {
        setData(parsedData.items), setLoading(false);
      }, 2000);

      setProgress(100);
    };

    updateIssue(pageNumber);
  }, [pageNumber]);

  const passData = {
    data,
    pageNumber,
    setPageNumber,
    progress,
    setProgress,
    loading,
    isAuth,
    setIsAuth,
    userName,
    setUserName,
  };
  return (
    <ApiContext.Provider value={passData}>
      {props.children};
    </ApiContext.Provider>
  );
};

export default apiState;
