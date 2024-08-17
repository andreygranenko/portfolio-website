"use client";
import Traffic7 from '/traffic/traffic7.png'
import Shop from '/shop.png';
import Marvel from '/marvel_img.png';

import { Carousel, Modal} from "flowbite-react";
import { useState } from "react";

export default function ModalBtnMarvel({title, description, img}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className={'flex items-center justify-start gap-5 md:ml-20 hover:bg-light-blue rounded-xl p-3 cursor-pointer duration-300 ease-in'}>
        <h3 className={'lg:text-8xl md:text-5xl text-3xl  font-bold'}>Marvel app</h3>
        <img
          className={'w-32  lg:w-56 object-cover rounded'}
          src={Marvel}
          alt='traffic'/>
      </button>



      <Modal position={'center'} dismissible size={'4xl'} show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="p-4 md:p-5 space-y-4 flex flex-col gap-5 lg:flex-row">
            <div className={'w-full lg:w-[34%]'}>
              <h3 className={'text-lg font-bold'}>Description</h3>
              <p className={''}> {description}</p>
            </div>
            <div className={'h-52 lg:h-72 sm:h-64 xl:h-80 2xl:h-96 w-full lg:w-[70%]'}>
              <Carousel
                leftControl={
                  (
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
                  )
                }
                rightControl={(
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
                )}>
                {/* eslint-disable-next-line react/prop-types */}
                {img.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="marvel web app screenshot"
                  />
                ))}
              </Carousel>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
