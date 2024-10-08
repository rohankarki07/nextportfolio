import Projects from "@/components/Projects";

const Page = () => {
  return (
    <div className="p-6">
      <div className="h2">
        Hello there,
        <sup className="body">
          <span>rohan</span>
        </sup>
      </div>
      <div className="h2 mt-7">
        Rohan is a frontend React and Next.js developer focused on creating
        intuitive and efficient user experiences. He excels in responsive and
        dynamic web applications.
      </div>
      <hr className="h-6 mt-5 mb-5 border-[#898D94]" />
      <Projects />
    </div>
  );
};

export default Page;
