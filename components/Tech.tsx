import Image from "next/image";
import React from "react";

const Tech = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-start gap-8">
      <div>
        <h1 className="card-text">WORK EXPERIENCE</h1>
        <div className="flex flex-col justify-start items-start gap-1">
          <h4 className="h4">RiddhaSoft Pvt.Ltd.</h4>
          <p>August 2023 - December 2023</p>
        </div>
      </div>
      <div>
        <h1 className="card-text">TECHNICAL SKILL</h1>
        <div className="flex flex-col sm:flex-row w-full justify-between items-start ">
          <div className="sm:w-1/2 w-full flex gap-10">
            <div>
              <h3 className="h4 mb-2">Framework & Library</h3>
              <ul className="flex flex-col gap-3">
                <li>MERN Stack</li>
                <li>UI/UX:Figma</li>
                <li>Tailwind</li>
                <li>Shadcn</li>
              </ul>
            </div>
            <div>
              <h3 className="h4 mb-2">Tools</h3>
              <ul className="flex flex-col gap-3">
                <li>Git and GitHub</li>
                <li>Vercel</li>
                <li>PostMan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
