import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Passion from "@/components/Passion";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="p-6 w-full">
        <div className="flex justify-between w-full">
          <h1 className="name text-center mb-4">
            Rohan <br />
            Karki
          </h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="w-44 h-44">
              <Image
                src="/images/design.png"
                alt="images"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="w-44 h-44">
              <Image
                src="/images/boudha.png"
                alt="images"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="w-44 h-44">
              <Image
                src="/images/taragaon.png"
                alt="images"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="w-44 h-44">
              <Image
                src="/images/dog.jpg"
                alt="images"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Intro />
        </div>
        <hr className="h-6 mt-8 mb-8 border-[#898D94]" />
        <Education />
        <div className="mt-16">
          <Passion />
        </div>
      </div>
    </>
  );
};

export default page;
