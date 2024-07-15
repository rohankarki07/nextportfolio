import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="border-b-2 sm:flex-row flex-col flex sm:items-center items-start justify-between w-full pt-3 pb-3 border-[#f3ede3] lg:hidden">
      <div>
        <div className="flex gap-8 items-center">
          <Link href="/">
            <div className="text-3xl w-fit py-1 h1 px-4  rounded-lg background-surface">
              रोहन
            </div>
          </Link>
          <ul className=" flex gap-3 text-xl">
            <li>
              <Link href="/about" className="flex items-center nav-hover">
                About
              </Link>
            </li>
            <li>
              <Link href="/fun" className="flex items-center nav-hover">
                Fun
              </Link>
            </li>
            <li>
              <a
                href="/cv.pdf"
                className="flex items-center nav-hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="h-[2px] mt-5 mb-5 bg-[#f3ede3] border-[#f3ede3]" />
      <ul className="flex gap-3 text-xl">
        <li>
          <Link
            href="mailto:rohankarki.it@gmail.com"
            className="flex items-center nav-hover"
          >
            Gmail
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/rohan-karki"
            target="_blank"
            className="flex items-center nav-hover"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/rohankarki07"
            target="_blank"
            className="flex items-center nav-hover"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
