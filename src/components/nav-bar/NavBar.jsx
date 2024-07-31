const NavBar = () => {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href={'#home'}>Home</a></li>
                <li>
                  <a href={'#work'}>Work</a>
                </li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <div className=" hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl gap-10">
                <li><a href={'#home'}>Home</a></li>
                <li><a href="#work">Work</a> </li>
                <li><a href={'#contact'}>Contact</a></li>
              </ul>
            </div>

          </div>

          <div className="navbar-end">
            {/*<a className="btn bg-light-blue text-blue h-2">Get in touch</a>*/}
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="btn bg-light-blue text-blue h-2 " type="button">
              Get in touch
            </button>
          </div>
        </nav>


        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-bg-primary rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Leave your contact details and I&apos;ll contact you as soon as possible
                </h3>
                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" action="#">
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
              </div>
            </div>
          </div>
        </div>

      </>


);
}

export default NavBar;