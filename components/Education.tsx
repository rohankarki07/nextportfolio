import Image from "next/image";

const Education = () => {
  return (
    <>
      <h1 className="card-text">EDUCATION</h1>
      <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
        <div className="sm:w-1/2 w-full flex flex-col gap-4">
          <div>
            <h3 className="h3">London Metropolitan University</h3>
            <p className="card-text h4">Islington College, Kathmandu</p>
          </div>
          <div>
            <p>BSc (Hons) Computing</p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full flex justify-end flex-col gap-4 sm:flex-row items-start sm:items-end">
          <div className="w-fit flex flex-col gap-2 justify-end ">
            <div className="flex items-end">
              <Image
                src="/images/court.jpg"
                alt="basketballcourt"
                width={400}
                height={400}
                className="rounded-lg items-start flex"
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
