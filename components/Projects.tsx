import Image from "next/image";
import Link from "next/link";
import { projectdata } from "@/app/projects/[id]/projectdata";

const Projects = () => {
  return (
    <div>
      <h1>CRAFT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectdata.map((project, index) => (
          <div key={index} className="w-full gap-12 rounded-md">
            <Link
              href={`/projects/${project.id}`}
              className="flex items-center h-80 justify-center rounded-md p-14 background-surface drop-shadow-lg"
            >
              <Image
                src={project.logo}
                alt={project.name}
                width="140"
                height="140"
              />{" "}
            </Link>
            <div className="flex flex-col gap-2 mt-5">
              <p>{project.name}</p>
              <div className="card-text">{project.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
