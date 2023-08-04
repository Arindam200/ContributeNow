import { useContext } from "react";
import { Link } from "react-router-dom";
import ApiContext from "../Context/api/apicontext";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import LoadingBar from "react-top-loading-bar";

const IssuePage = () => {
  const cardData = useContext(ApiContext);
  let page = cardData.pageNumber;

  const handleNextPage = () => {
    page += 1;
    cardData.setPageNumber(page);
  };
  const handlePreviousPage = () => {
    page -= 1;
    cardData.setPageNumber(page);
  };

  return (
    <>
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={cardData.progress}
        onLoaderFinished={() => cardData.setProgress(0)}
      />
      <div className="mx-auto">
        <div className=" grid lg:grid-cols-3 gap-2 ">
          {cardData.data.map((element) => (
            <div className="flex flex-col  bg-gray-800 text-gray-50 rounded h-fit ">
              <Card
                key={element.url}
                title={element.title}
                body={element.body}
                link={element.html_url}
                labels={element.labels}
                active={element.created_at}
                img={element.user.avatar_url}
                name={element.user.login}
                repoLink={element.repository_url}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 space-x-0 md:space-x-2 md:mb-8">
          <button
            className="inline-flex items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0"
            onClick={handlePreviousPage}
            disabled={page <= 1}
          >
            Previous
          </button>
          <button
            className="inline-flex  items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0"
            onClick={handleNextPage}
            disabled={page + 1 > Math.ceil(1000 / 15)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default IssuePage;
