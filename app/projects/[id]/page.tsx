import Link from "next/link";
import { projectdata } from "./projectdata.js";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Image from "next/image.js";

type Item = {
  id: string;
  name: string;
  description: string;
  logo: string;
  links: string;
  detailimage?: string | undefined;
  tool?: string;
  tech?: string;
  API?: string;
};

// Get data function with proper typing
const getData = (id: string): Item | undefined => {
  const data = projectdata.find((item) => item.id === id);
  return data || notFound();
};

// Props for the page component
type PageProps = {
  params: {
    id: string;
  };
};

const page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  const data = getData(id);

  if (!data) {
    return <div>Item not found</div>;
  }

  return (
    <div className="p-6 pl-0 sm:pl-24">
      <Link href="/">
        <div className="flex items-center">
          <ChevronLeft size={15} /> Back
        </div>
      </Link>

      <div className="w-full background-surface p-12 mt-8 rounded-md flex justify-center items-center">
        {data.detailimage && (
          <Image
            src={data.detailimage}
            alt="Saral sewa"
            width={948}
            height={463}
            className="rounded-md"
            quality={80}
          />
        )}
      </div>

      <hr className="h-6 mt-8 mb-8 border-[#898D94]" />
      <div className="px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="big">{data.name}</h2>
          <div className="body mt-3 card-text">{data.description}</div>
          {/* desc */}
          <div className="flex justify-evenly mt-8">
            {/* tools  */}
            <div>
              <h2 className="font-bold">Tools</h2>
              <ul>
                {data.tool ? (
                  // Split the tool string by commas and map over the array
                  data.tool
                    .split(", ")
                    .map((tool, index) => <li key={index}>{tool}</li>)
                ) : (
                  <li>No tools specified</li>
                )}
              </ul>
            </div>
            {/* tech  */}
            <div>
              <h2 className="font-bold">Tech</h2>
              <ul>
                {data.tech ? (
                  // Split the tool string by commas and map over the array
                  data.tech
                    .split(", ")
                    .map((tech, index) => <li key={index}>{tech}</li>)
                ) : (
                  <li>No tech specified</li>
                )}
              </ul>
            </div>
            {/* link  */}
            <div>
              <h2 className="font-bold">Link</h2>
              <ul>
                {data.links ? (
                  <li>
                    <a
                      href={data.links}
                      target="_blank"
                      className=" hover:underline"
                    >
                      Visit Live Site
                    </a>
                  </li>
                ) : (
                  <li>No links specified</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
