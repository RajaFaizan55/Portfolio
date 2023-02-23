import React from 'react'

import WhatIDo from './what-i-do/What-i-do';

import responsiveIcon from '../../assets/responsive.png'
import framWorkIcon from '../../assets/framwork.png'
import cssIcon from '../../assets/css.png'
import crossCapIcon from '../../assets/cross-cap.png'
import gitIcon from '../../assets/git.png'
import developmentIcon from '../../assets/development.png'
import educationIcon from '../../assets/education.svg'
import experienceIcon from "../../assets/experience.svg";
import Education from './education';
import ProgressBar from './progress-bar';
import Tag from './tag';

const MainPage = () => {
  return (
    <div className=" wraper ml-26rem bg-white flex-1  rounded-md py-5 px-10 justify-start ">
      <h1 className="font-bold text-4xl mb-10 " id="about-me">
        About Me
      </h1>
      <p className="tracking-normal leading-8 text-justify">
        Over the past 1 year, I have worked with clients and big Companies for
        their startups to help them reach their goals with 100% satisfaction.
        Ranging from basic custom website projects (HTML,CSS, Javascript,
        Bootstrap and Tailwind) to high-end large Scale Web App projects as
        Single Page Apps (React.js), I worked on variety of projects including
        ERP , Political pixels etc.
      </p>
      <ul className="list-disc ml-6 leading-10 mb-7">
        <li>
          Designed and developed front-end webpages using JavaScript, HTML5, and
          CSS/Bootstrap/Tailwind.
        </li>
        <li>I can create single page application using React.js and Redux.</li>
        <li>Strong command of Sass and Tailwind.</li>
        <li>Knowledge with version control systems (Git).</li>
      </ul>
      <span>
        My aim is to bring across your message and identity in the most creative
        way. I created websites for many famous brand companies.
      </span>
      <h1 className="font-bold text-4xl my-10 " id="what-i-do">
        What I Do
      </h1>
      {/* ////////// What i do section //////////// */}
      <div className="grid  sm:grid-cols-2 gap-12">
        <WhatIDo
          icon={responsiveIcon}
          title={"Responsive Design"}
          desc={
            "Using responsive utility variants to build adaptive user interfaces. "
          }
          bgColor={"#FCF4FF"}
        />
        <WhatIDo
          icon={framWorkIcon}
          title={"Frameworks"}
          desc={
            "I have expertise in following frontend frameworks. React.js and some knowledge about Vue.js. "
          }
          bgColor={"#E5E2D9"}
        />
        <WhatIDo
          icon={cssIcon}
          title={"PSD/XD/Figma to HTML"}
          desc={
            "I will do convert responsive and pixel perfect - sketch to html, psd to html, xd to html, figma to html, using bootstrap, Sass , Tailwind css"
          }
          bgColor={"#FCF4FF"}
        />
        <WhatIDo
          icon={crossCapIcon}
          title={"Cross browser compatibility"}
          desc={
            "GIT(Gitlab/GitHub) - Workflows, Rebasing, Merging Strategies etc., "
          }
          bgColor={"#FFFAFA"}
        />
        <WhatIDo
          icon={gitIcon}
          title={"Git"}
          desc={
            "I have good knowledge of git. Git is used to tracking changes in the source code, enabling multiple developers to work together on non-linear development. "
          }
          bgColor={"#F0E1E9"}
        />
        <WhatIDo
          icon={developmentIcon}
          title={"Web Development"}
          desc={
            "As a skilled web developer, I possess expertise in a range of modern web development technologies including HTML, CSS, JavaScript, React.js, Tailwind CSS, and Sass. With these tools, I am capable of crafting high-quality, visually stunning websites that are both functional and user-friendly"
          }
          bgColor={"#F3FAFF"}
        />
      </div>
      <h1 className="font-bold text-4xl my-10 " id="resume">
        {" "}
        Resume
      </h1>
      {/* ///////// Resume section ////////// */}
      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <h1 className="text-2xl mb-5 flex">
            <img src={educationIcon} alt="img" className="w-10 mr-4" />{" "}
            <span className="font-bold">Education</span>
          </h1>
          <Education
            bgColor={"#FFF4F4"}
            date={"2017- 2021"}
            title={"BSCS (BS in Computer Sience)"}
            desc={"University Of Gujrat"}
          />
          <Education
            bgColor={"#FFF1FB"}
            date={"2015- 2017"}
            title={"FSC (Pre Engineering)"}
            desc={"The Superior Group Of Colleges"}
          />
          <Education
            bgColor={"#FDF2F2"}
            date={"2012- 2014"}
            title={"Matriculation"}
            desc={"Govt School Jandanwala"}
          />
        </div>
        <div>
          <h1 className="text-2xl mb-5 flex">
            {" "}
            <img alt="icon" src={experienceIcon} className="w-10 mr-4" />{" "}
            <span className="font-bold">Experience</span>
          </h1>
          <Education
            bgColor={"#EEF5FA"}
            date={"1 Year"}
            title={"React js Developer"}
            desc={"SprintX"}
          />
          <Education
            bgColor={"#F2F4FF"}
            date={"6 Months"}
            title={"Frontend Developer"}
            desc={"The AppMakers"}
          />
          <Education
            bgColor={"#EEF5FA"}
            date={"2 Months"}
            title={"Frontend Developer"}
            desc={"The Fabolous"}
          />
        </div>
      </div>

      {/* ///////// skills /////// */}
      <div className="grid sm:grid-cols-2 gap-12  ">
        <div>
          <h1 className="font-bold text-4xl my-10 ">Working Skills</h1>
          <ProgressBar title={"React js"} percentage={"80%"} />
          <ProgressBar title={"Html"} percentage={"80%"} />
          <ProgressBar title={"Css"} percentage={"80%"} />
          <ProgressBar title={"Tailwind"} percentage={"80%"} />
          <ProgressBar title={"Bootstrap"} percentage={"70%"} />
        </div>
        <div>
          <h1 className="font-bold text-4xl my-10 ">Knowledges</h1>
          <div className="flex flex-wrap">
            <Tag text={"React-Hook-Form"} />
            <Tag text={"Redux"} />
            <Tag text={"Redux toolkit"} />
            <Tag text={"Sass"} />
            <Tag text={"Javascript"} />
            <Tag text={"Typescript"} />
            <Tag text={"Git"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage