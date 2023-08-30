import useApiData from "../../../hooks/useApiData";

const Details = (props) => {
  const repoDetails = useApiData(props.repoLink);
  return (
    <div className="mt-2 item-center self-center">
      <a
        // href={repoDetails.link}
        // target="_blank"
        className="flex gap-5 justify-around text-gray-500 text-sm font-medium"
      >
        {/* <h4>{repoDetails.name}</h4> */}
        <p className="">
          {repoDetails.language ? repoDetails.language : "No language detected"}
        </p>
        <div className="flex">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            // stroke="#6a737d"
            fill="#6a737d"
            data-view-component="true"
            className="mt-0.5 mr-2"
          >
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
          </svg>
          <p className="">{repoDetails.star}</p>
        </div>
        <div className="flex gap-2 ">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            fill="#6a737d"
            data-view-component="true"
            className="mt-1"
          >
            <path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <p className="">{props.comments}</p>
        </div>
      </a>
    </div>
  );
};

export default Details;
