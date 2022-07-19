import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { GiRank1 } from "react-icons/gi";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";

function SumaryJob() {
  return (
      <div className="exconten__summary ">
        <ul className="summary att">
          <li className="summary_icon">
            <BsCalendar2Event />
          </li>
          <li className="summary_infor">
            <p className="sumary_lable">JOB POSTING DATE</p>
            <p className="sumary_content">26/08/2020</p>
          </li>
        </ul>
        <ul className="summary att">
          <li className="summary_icon">
            {" "}
            <GiRank1 />
          </li>
          <li className="summary_infor">
            <p className="sumary_lable">RANK</p>
            <p className="sumary_content">Intern</p>
          </li>
        </ul>
        <ul className="summary att">
          <li className="summary_icon">
            <TbLayoutDashboard />
          </li>

          <li className="summary_infor">
            <p className="sumary_lable">CAREER</p>
            <p className="sumary_content">IT-Software</p>
          </li>
        </ul>
        <ul className="summary att">
          <li className="summary_icon">
            <FaRegLightbulb />
          </li>
          <li className="summary_infor">
            <p className="sumary_lable">SKILL</p>
            <p className="sumary_content">
              Testing, Selenium, QC, Agile, Software Testing
            </p>
          </li>
        </ul>
        <ul className="summary language">
          <li className="summary_icon">
          <GrLanguage />
          </li>
          <li className="summary_infor">
          <p className="sumary_lable">LANGUAGE</p>
            <p className="sumary_content">English</p>
          </li>
        </ul>
      </div>
  );
}
export default SumaryJob;
