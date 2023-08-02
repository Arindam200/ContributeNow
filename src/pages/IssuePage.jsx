import { useContext } from "react";
import ApiContext from "../Context/api/apicontext";
import Card from "../components/Card";
import React from "react";

const IssuePage = () => {
  const cardData = useContext(ApiContext);

  return (
    <div className="container mx-auto">
      <div className=" grid lg:grid-cols-3 gap-2 ">
        {cardData.data.map((element) => (
          <Card
            key={element.url}
            title={element.title}
            body={element.body}
            link={element.html_url}
            labels={element.labels}
          />
        ))}
      </div>
    </div>
  );
};

export default IssuePage;
