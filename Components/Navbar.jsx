import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../public/spacex_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={110}
              className="w-[11vmax] h-[6.5vmax]"
            ></Image>
          </Link>
        </div>
        <div>
          <div className="sm:hidden block z-[1]">
            {isOpen ? (
              <MdClose
                size="2.5vmax"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            ) : (
              <GiHamburgerMenu
                size="2.5vmax"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              />
            )}
          </div>
      <nav>
            <ul className={`sm:flex sm:gap-3 sm:text-[1.3vmax] hidden`}>
              <li>
                <Link href="/capsules">Capsules</Link>
              </li>
              <li>
                <Link href="/crew">Crew</Link>
              </li>
              <li>
                <Link href="/dragons">Dragons</Link>
              </li>
              <li>
                <Link href="/landpads">Landpads</Link>
              </li>
              <li>
                <Link href="/launches">Launches</Link>
              </li>
              <li>
                <Link href="/launchpads">Launchpads</Link>
              </li>
              <li>
                <Link href="/payloads">Payloads</Link>
              </li>
              <li>
                <Link href="/roadster">Roadster</Link>
              </li>
              <li>
                <Link href="/rockets">Rockets</Link>
              </li>
              <li>
                <Link href="/ships">Ships</Link>
              </li>
              <li>
                <Link href="/starlink">Starlink</Link>
              </li>
            </ul>
      </nav>
        
        </div>
      </div> */}

      <div>
        <nav className="fixed w-full z-10 sm:w-full sm:static top-0">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="logo"
                    width={200}
                    height={110}
                    className="w-[11vmax] h-[6.5vmax]"
                  ></Image>
                </Link>
              </div>
              <div className="sm:hidden block z-[1] absolute right-12">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  {!isOpen ? (
                    <GiHamburgerMenu size="2.5vmax" />
                  ) : (
                    <MdClose size="2.5vmax" />
                  )}
                </button>
              </div>

              <div className="sm:flex sm:gap-3 sm:text-[1.3vmax] hidden sm:absolute sm:right-12">
                {/* <div className="flex gap-4"> */}
                <Link href="/capsules">Capsules</Link>

                <Link href="/crew">Crew</Link>

                <Link href="/dragons">Dragons</Link>

                <Link href="/landpads">Landpads</Link>

                <Link href="/launches">Launches</Link>

                <Link href="/launchpads">Launchpads</Link>

                <Link href="/payloads">Payloads</Link>

                <Link href="/roadster">Roadster</Link>

                <Link href="/rockets">Rockets</Link>

                <Link href="/ships">Ships</Link>

                <Link href="/starlink">Starlink</Link>
                {/* </div> */}
              </div>
            </div>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="sm:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-jet-black p-4 space-y-2 text-white flex flex-col"
                >
                  <Link href="/capsules">Capsules</Link>

                  <Link href="/crew">Crew</Link>

                  <Link href="/dragons">Dragons</Link>

                  <Link href="/landpads">Landpads</Link>

                  <Link href="/launches">Launches</Link>

                  <Link href="/launchpads">Launchpads</Link>

                  <Link href="/payloads">Payloads</Link>

                  <Link href="/roadster">Roadster</Link>

                  <Link href="/rockets">Rockets</Link>

                  <Link href="/ships">Ships</Link>

                  <Link href="/starlink">Starlink</Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
