import { useContext } from "react";
import ApiContext from "../Context/api/apicontext";
import Card from "../components/Card";
import Details from "../components/Details";

const IssuePage = () => {
  const cardData = useContext(ApiContext);

  return (
    <div className="mx-auto">
      <div className=" grid lg:grid-cols-3 gap-2 ">
        {cardData.map((element) => (
          <div className="flex flex-col  bg-gray-800 text-gray-50 rounded h-fit ">
            <Card
              key={element.url}
              title={element.title}
              body={element.body}
              link={element.html_url}
              labels={element.labels}
              active={element.created_at}
              img={element.user.avatar_url}
            />
            <Details repoLink={element.repository_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuePage;
