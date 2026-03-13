import React from "react";

const Tech = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-start gap-12">

      {/* Work Experience */}
      <div className="sm:w-1/3 w-full">
        <h1 className="card-text mb-4">WORK EXPERIENCE</h1>
        <div className="flex flex-col gap-1">
          <h4 className="h4">RiddhaSoft Pvt.Ltd.</h4>
          <p>August 2023 - December 2023 (Internship)</p>
          <p>January 2024 - February 2025 (Full Time)</p>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="sm:w-2/3 w-full">
        <h1 className="card-text mb-4">TECHNICAL SKILL</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          <div>
            <h3 className="h4 mb-2">Framework & Libraries</h3>
            <ul className="flex flex-col gap-2">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="h4 mb-2">Languages</h3>
            <ul className="flex flex-col gap-2">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>

          <div>
            <h3 className="h4 mb-2">Tools & Technology</h3>
            <ul className="flex flex-col gap-2">
              <li>Git & GitHub</li>
              <li>Vercel</li>
              <li>Postman</li>
              <li>VS Code</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Tech;
