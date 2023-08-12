import BookMarkContext from "./bookmarkcontext";
import { useState, useEffect } from "react";

const BookMarkState = (props) => {
  const [bookMarks, setBookMarks] = useState({ id: 0 });

  return (
    <BookMarkContext.Provider value={"hi"}>
      {props.children}
    </BookMarkContext.Provider>
  );
};
export default BookMarkState;
