import { useContext } from "react";
import ApiContext from "../Context/api/apicontext";
import Card from "../components/Card";

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
      <div className="flex justify-between">
        <button onClick={handlePreviousPage} disabled={page <= 1}>
          previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page + 1 > Math.ceil(1000 / 15)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default IssuePage;
