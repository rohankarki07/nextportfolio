import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    name: "Saral Sewa",
    description: "Service Booking",
    logo: "/images/saralsewa.JPG",
    links: "https://saralsewa.vercel.app",
  },
  // { name: "Loop", description: "Video Conferencing", logo: "/logo.svg" },
  {
    name: "Echo",
    description: "Threads Post",
    logo: "/images/apimovie.jpg",
    links: "https://echo-social-media.vercel.app",
  },
  {
    name: "Movie Search",
    description: "Movie fetched from open API",
    logo: "/images/apimovie.jpeg",
    links: "https://movie-rohan.vercel.app",
  },

  // {
  //   name: "UnSplash Image Search",
  //   description: "Image Searching",
  //   logo: "/logo.svg",
  // },
  // { name: "TO-DO", description: "todo listing", logo: "/logo.svg" },
];

const Projects = () => {
  return (
    <div>
      <h1>CRAFT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <div key={index} className="w-full gap-12 rounded-md">
            <Link
              href={`${project.links}`}
              target="_blank"
              className="flex items-center h-80 justify-center rounded-md p-14 background-surface drop-shadow-lg"
            >
              <h3 className="h3">{project.name}</h3>
            </Link>
            <div className="flex flex-col gap-2 mt-5">
              <p>{project.name}</p>
              <div className="card-text">{project.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
