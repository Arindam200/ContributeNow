import React from "react";
import { useContext, useEffect, useState } from "react";
import ApiContext from "../Context/api/apicontext";

const Card = () => {
  let a = useContext(ApiContext);
  const { name, description } = a.repo;

  return (
    <div className="flex">
      <div>
        {a.data.map((element) => (
          <ul>
            <li>{element.html_url}</li>
            {/* <li>{name}</li> */}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Card;
