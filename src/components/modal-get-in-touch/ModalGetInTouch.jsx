
"use client";

import {  Modal } from "flowbite-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';


export function ModalGetInTouch() {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    number: ''
  });

  function onCloseModal() {
    setOpenModal(false);
    setFormData({
      email: '',
      number: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('contact_me', 'template_7oxjtu8', e.target, '1OiJLxMax-YJXH7AS')
      .then((result) => {
        console.log(result.text);
        setFormData({
          email: '',
          number: ''
        })
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <button className={'btn bg-light-blue text-blue h-2 '} onClick={() => setOpenModal(true)}>Get in touch</button>
      <Modal dismissible  position={'center'} show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header>
          <h3 className="text-xl font-semibold p-5 text-gray-900 dark:text-white">
            Leave your contact details and I&apos;ll contact you as soon as possible
          </h3>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required />
            </div>
            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                id="password"
                placeholder="+371 21342938"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required />
            </div>

            <button type="submit" className="w-full btn bg-light-blue text-blue">Send the details</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
