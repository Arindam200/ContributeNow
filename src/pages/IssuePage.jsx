import { useContext, useState } from "react"
import ApiContext from "../Context/api/apicontext"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import LoadingBar from "react-top-loading-bar"

const IssuePage = () => {
  const cardData = useContext(ApiContext)
  let page = cardData.pageNumber

  const handleNextPage = () => {
    page += 1
    cardData.setPageNumber(page)
  }
  const handlePreviousPage = () => {
    page -= 1
    cardData.setPageNumber(page)
  }

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

        <div className="flex justify-center items-center space-x-2">
          <div
            className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
            onClick={handlePreviousPage}
            disabled={page <= 1}
          >
            <span aria-hidden="true">«</span>
            <span className="sr-only">Previous</span>
          </div>
          <div
            className={`w-10 h-10 hover:text-blue-600 text-gray-500
             p-4 inline-flex items-center text-sm font-medium rounded-full`}
            onClick={() => cardData.setPageNumber(page <= 1 ? 1 : page)}
            aria-current="page"
          >
            {page <= 1 ? 1 : page}
          </div>
          <div
            className={`w-10 h-10 hover:text-blue-600 text-gray-500
             p-4 inline-flex items-center text-sm font-medium rounded-full`}
            onClick={() => cardData.setPageNumber(page == 1 ? 2 : page + 1)}
          >
            {page <= 1 ? 2 : page + 1}
          </div>
          <div
            className={`w-10 h-10 hover:text-blue-600 text-gray-500
             p-4 inline-flex items-center text-sm font-medium rounded-full`}
            onClick={() => cardData.setPageNumber(page == 1 ? 3 : page + 2)}
          >
            {page <= 1 ? 3 : page + 2}
          </div>
          <div
            className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
            onClick={handleNextPage}
            disabled={page + 1 > Math.ceil(1000 / 15)}
          >
            <span className="sr-only">Next</span>
            <span aria-hidden="true">»</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default IssuePage
// " bg-blue-600 text-white"
