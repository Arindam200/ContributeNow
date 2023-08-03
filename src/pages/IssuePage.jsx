import { useContext } from "react";
import ApiContext from "../Context/api/apicontext";
import Card from "../components/Card";
import Details from "../components/Details";

const IssuePage = () => {
  const cardData = useContext(ApiContext);

  return (
    <div className="container mx-auto">
      <div className=" grid lg:grid-cols-3 gap-2 ">
        {cardData.map((element) => (
          <div className="flex flex-col  bg-gray-800 text-gray-50 rounded max-w-sm h-36 ">
            <Card
              key={element.url}
              title={element.title}
              body={element.body}
              link={element.html_url}
              labels={element.labels}
            />
            <Details repoLink={element.repository_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuePage;
