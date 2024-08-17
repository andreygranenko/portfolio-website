
"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export function ModalGetInTouch() {
  const [openModal, setOpenModal] = useState(true);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }

  return (
    <>
      <button className={'btn bg-light-blue text-blue h-2 '} onClick={() => setOpenModal(true)}>Toggle modal</button>
      <Modal dismissible  position={'center'} show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header>
          <h3 className="text-xl font-semibold p-5 text-gray-900 dark:text-white">
            Leave your contact details and I&apos;ll contact you as soon as possible
          </h3>
        </Modal.Header>
        <Modal.Body>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
              <input type="text" name="number" id="password" placeholder="+371 21342938" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>

            <button type="submit" className="w-full btn bg-light-blue text-blue">Send the details</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
