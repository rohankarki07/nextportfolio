import Link from "next/link";
import { topics } from "./data.js";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Image from "next/image.js";

type Item = {
  id: number;
  title: string;
  description: string;
  image?: string | undefined;
};

// Get data function with proper typing
const getData = (id: number): Item | undefined => {
  const data = topics.find((item) => item.id === id);
  return data || notFound();
};

// Props for the page component
type PageProps = {
  params: {
    id: string;
  };
};

const page: React.FC<PageProps> = ({ params }) => {
  const id = parseInt(params.id, 10);
  const data = getData(id);

  if (!data) {
    return <div>Item not found</div>;
  }

  return (
    <div className="p-6 pl-0 sm:pl-24">
      <Link href="/fun">
        <div className="flex items-center">
          <ChevronLeft size={15} /> Back
        </div>
      </Link>
      <hr className="h-6 mt-8 mb-8 border-[#898D94]" />
      <h2 className="h2">{data.title}</h2>
      <div className="mt-3">{data.description}</div>
      {data.image && (
        <Image
          src={data.image}
          alt={data.title}
          width={250}
          height={250}
          className="mt-5"
        />
      )}
    </div>
  );
};

export default page;
