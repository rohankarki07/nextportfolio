import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar sticky top-0 w-36 border-r-2 border-[#f3ede3] h-screen hidden lg:block">
      <Link href="/">
        <div className="text-3xl mt-6 mb-10 w-fit py-1 h1 px-4 rounded-lg background-surface">
          रोहन
        </div>
      </Link>
      <ul className="space-y-2 text-xl w-36">
        <li>
          <Link href="/about" className="flex items-center">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center">
            Fun
          </Link>
        </li>
        <li>
          <a
            href="/cv.pdf"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
      <hr className="h-[2px] mt-5 mb-5 bg-[#f3ede3] border-[#f3ede3]" />
      <ul className="space-y-2 text-xl">
        <li>
          <div className="flex items-center text-[#938780]">CONTACT</div>
        </li>
        <li>
          <Link
            href="mailto:rohankarki.it@gmail.com"
            className="flex items-center"
          >
            Gmail
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/rohan-karki"
            target="_blank"
            className="flex items-center"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/rohankarki07"
            target="_blank"
            className="flex items-center"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
