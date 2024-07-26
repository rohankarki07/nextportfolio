"use client";

import Link from "next/link";
import { topics } from "./data.js";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Skeleton } from "@nextui-org/skeleton";

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

const Page: React.FC<PageProps> = ({ params }) => {
  const id = parseInt(params.id, 10);
  const data = getData(id);

  const [loading, setLoading] = useState(true);

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
        <div className="mt-5 relative w-[250px] h-[250px]">
          {loading && (
            <Skeleton className="absolute top-0 left-0 w-full h-full rounded-md bg-gray-300" />
          )}
          <Image
            src={data.image}
            alt={data.title}
            width={250}
            height={250}
            className={`transition-opacity duration-500 ease-in-out rounded-md ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
