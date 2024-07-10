import Link from "next/link";
import { topics } from "./[id]/data"; // Adjust the import path based on your project structure

const Page = () => {
  return (
    <div className="p-6 pl-0 sm:pl-24">
      <div className="h2">
        <h2 className="h2">Fun Blogs</h2>
      </div>
      <hr className="h-6 mt-5 mb-5 border-[#898D94]" />
      <div>
        {topics.map((topic) => (
          <Link href={`/fun/${topic.id}`} key={topic.id}>
            <h3 className="h4 blog-hover cursor-pointer">{topic.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
