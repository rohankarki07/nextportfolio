import Image from "next/image";

const Education = () => {
  return (
    <>
      <h1 className="card-text">EDUCATION</h1>
      <div className="flex w-full justify-between sm:flex-row flex-col items-center">
        <div className="w-1/2 flex flex-col gap-4">
          <div>
            <h3 className="h3">London Metropolitan University</h3>
            <p className="card-text h4">Islington College, Kathmandu</p>
          </div>
          <div>
            <p>BSc (Hons) Computing</p>
          </div>
        </div>
        <div className="w-1/2 justify-end flex flex-col gap-4 items-end">
          <div className="w-fit flex flex-col gap-2 justify-end items-end">
            <div className="flex items-end">
              <Image
                src="/images/court.jpg"
                alt="basketballcourt"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="flex w-fit">
              <p className="small1">Nothing but net and pal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
