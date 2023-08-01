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
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Announcing a free plan for small teams
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                At Wake, our mission has always been focused on bringing
                openness.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Lauren Waller
                </h5>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                How Google Assistant now helps you record stories for kids
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Google is constantly updating its consumer AI, Google Assistant,
                with new features.
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Aaron Larsson
                </h5>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            href="#"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Front accounts - let&apos;s work together
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Are you an accountant? Are you a company formation advisor?
              </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-gray-200">
                  By Lauren Waller
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
