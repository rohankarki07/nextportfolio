import Image from "next/image";

const Passion = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="sm:w-1/2 w-full flex gap-3 flex-col">
          <div>
            <p className="card-text h4">THINGS I LOVE</p>
          </div>
          <div>
            <p>Passionate about fitness</p>
            <p>Research on documents</p>
            <p>Nature</p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full flex justify-start sm:justify-end">
          <div>
            <Image
              src="/images/ramen.JPG"
              alt="mine"
              width={400}
              height={400}
              className="w-48"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Passion;
