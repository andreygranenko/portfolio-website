const ModalWork = ({id, title, description, img}) => {
  return (
    <div
      id={id}
      tabIndex="-1"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-4xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide={id}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4 flex flex-col gap-5 lg:flex-row">
            <div className={'w-full lg:w-[34%]'}>
              <h3 className={'text-lg font-bold'}>Description</h3>
              <p className={''}> {description}</p>
            </div>
            <div id="default-carousel" className="relative w-full lg:w-[70%] " data-carousel="slide">
              {/* Carousel wrapper */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* eslint-disable-next-line react/prop-types */}
                {img.map((img, index) => (
                  <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img
                      src={img}
                      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      alt="marvel web app screenshot"
                    />
                  </div>
                ))}
                {/*/!* Item 1 *!/*/}
                {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                {/*  <img*/}
                {/*    src={img}*/}
                {/*    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                {/*    alt="..."*/}
                {/*  />*/}
                {/*</div>*/}
                {/*/!* Item 2 *!/*/}
                {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                {/*  <img*/}
                {/*    src={img}*/}
                {/*    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                {/*    alt="..."*/}
                {/*  />*/}
                {/*</div>*/}
                {/*/!* Item 3 *!/*/}
                {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                {/*  <img*/}
                {/*    src={img}*/}
                {/*    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                {/*    alt="..."*/}
                {/*  />*/}
                {/*</div>*/}
                {/*/!* Item 4 *!/*/}
                {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                {/*  <img*/}
                {/*    src={img}*/}
                {/*    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                {/*    alt="..."*/}
                {/*  />*/}
                {/*</div>*/}
                {/*/!* Item 5 *!/*/}
                {/*<div className="hidden duration-700 ease-in-out" data-carousel-item>*/}
                {/*  <img*/}
                {/*    src={img}*/}
                {/*    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"*/}
                {/*    alt="..."*/}
                {/*  />*/}
                {/*</div>*/}
              </div>
              {/* Slider indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              {/* Slider controls */}
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWork;