import React from "react";
import { BsGeoAlt } from 'react-icons/bs';
function BoxInfor() {
  return (
      <div className="boxdetaill__main_content">
        <h3>BENEFITS FOR YOU</h3>
        <ul className="benefit">
          <li>In-depth knowledge sharing sessions</li>
          <li>Flexible in-office and remote work arrangements</li>
          <li> Great Place to Work-Certified</li>
        </ul>
        <h3>JOB DESCRIPTION</h3>
        <ul className="benefit">
          <li>
            The company has a positive learning culture and runs training
            programs to provide every employee.
          </li>
          <li>In addition, the QC department has many other activities:</li>
        </ul>
        <h3>JOB REQUIREMENTS</h3>
        <ul className="benefit">
          <li>
            Able to read, analyze and understand Functional and Non-functional
            requirements
          </li>
          <li>
            Able to elicit and interpret requirements and business practices
          </li>
          <li>
            4+ years of hands-on experience in Web and API/BE testing or Mobile
            and API/BE testing
          </li>
        </ul>
        <h3> WORK LOCATION</h3>
        <ul className="benefit">
          <li><BsGeoAlt/> In-depth knowledge sharing sessions</li>
          <li><BsGeoAlt/> Flexible in-office and remote work arrangements</li>
        </ul>
      </div>
  );
}
export default BoxInfor;
