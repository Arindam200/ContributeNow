import React from "react";

export default function IssueDetails({ props }) {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        id="hs-modal-upgrade-to-pro"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        {/* <div className=""> Hello {props.title} </div> */}
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h2 className="block text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Advanced features
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  "Compare to" Price, Bulk Discount Pricing, Inventory Tracking
                  <a
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    href="../examples/html/modal-signup.html"
                  >
                    Sign up here
                  </a>
                </p>
                <div className="mt-5">
                  <a
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    <svg
                      className="w-4 h-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    Upgrade to get these features
                  </a>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 divide-y divide-gray-200 dark:divide-gray-700">
                {/* <!-- Icon --> */}
                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    className="flex-shrink-0 mt-1 w-8 h-8 text-gray-600 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                  </svg>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      "Compare to" price
                    </h3>
                    <p className="text-sm text-gray-500">
                      Use this feature when you want to put a product on sale or
                      show savings off suggested retail pricing.
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Icon --> */}
                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    className="flex-shrink-0 mt-1 w-8 h-8 text-gray-600 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                  </svg>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Bulk discount pricing
                    </h3>
                    <p className="text-sm text-gray-500">
                      Encourage higher purchase quantities with volume
                      discounts.
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon --> */}

                {/* <!-- Icon --> */}
                <div className="flex gap-x-7 py-5 first:pt-0 last:pb-0">
                  <svg
                    className="flex-shrink-0 mt-1 w-8 h-8 text-gray-600 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Inventory tracking
                    </h3>
                    <p className="text-sm text-gray-500">
                      Automatically keep track of product availability and
                      receive notifications when inventory levels get low.
                    </p>
                  </div>
                </div>
                {/* <!-- End Icon --> */}
              </div>
            </div>

            {/* <!-- Footer --> */}
            <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t dark:border-gray-700">
              <button
                type="button"
                className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-notifications"
              >
                Cancel
              </button>
              <a
                className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href="#"
              >
                Upgrade now
              </a>
            </div>
            {/* <!-- End Footer --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Modal --> */}
    </>
  );
}
