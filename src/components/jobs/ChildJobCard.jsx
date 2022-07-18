import React from 'react';
import {GrLocation} from "react-icons/gr";
import '../../asset/scss/JobsStyle.scss'
import {CgArrowLongRight} from "react-icons/cg";

export default function ChildJobCard() {
    return(
        <div className="job-card-child">
            <div className="job-card-title">Software Engineer</div>

            <div className="job-card-table">
                <table>
                    <tbody>
                    <tr className="job-card-salary">
                        <td>Salary</td>
                        <td>$1500</td>
                    </tr>
                    <tr className="job-card-position-type">
                        <td>Position type</td>
                        <td>Full time</td>
                    </tr>
                    <tr className="job-card-company">
                        <td>Company</td>
                        <td>O2R2</td>
                    </tr>
                    <tr className="job-card-extra-info">
                        <td>July 18th, 2022</td>
                        <td><a className="read-more">Read more<CgArrowLongRight className="read-more-arrow"/></a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}