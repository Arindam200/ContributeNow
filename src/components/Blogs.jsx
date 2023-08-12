export default function Blogs() {
  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            The Blog
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            See how game-changing companies are making the most of every
            engagement with Preline.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Card --> */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="https://shubhsharma19.hashnode.dev/open-source-for-beginners"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1674053979927/c9d6c91a-0a02-45b1-8209-b788a80f5893.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Open Source Guide for Beginners
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Open Source is a great way to get involved in the tech community
                and make a positive impact on the world.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675098816229/k_lUv3kpN.png?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp"
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Shubh Sharma
                </h5>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="https://arindam1729.hashnode.dev/a-beginners-guide-to-open-source"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1673727414736/174f7e4e-43a9-450e-bf63-7103b608c2de.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                A Beginners Guide to Open Source
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                This beginner's guide to open source will help you to get
                started on your open-source journey.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1672587156771/wGaH-wFZE.png?w=200&h=200&fit=crop&crop=faces&auto=compress,format&format=webp"
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Arindam Majumder
                </h5>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="https://ruthikegah.xyz/a-beginners-guide-to-open-source"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1596742204400/k9AJL1oNC.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                A Beginner's Guide to Open Source
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                In this article, we will be writing about: What Open Source is?
                Benefits of contributing to Open Source How to start
                contributing
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1609530417247/9C1T-TtLp.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress,format&format=webp"
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Ruth Ikegah
                </h5>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Card --> */}
        <div className="mt-12 text-center">
          <a
            className="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-blue-500 dark:hover:text-blue-400 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Read more
            <svg
              className="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
}
