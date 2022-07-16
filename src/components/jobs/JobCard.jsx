import React from 'react';
import {GrLocation} from 'react-icons/gr';
// import Proptypes from 'prop-types';
import '../../asset/scss/JobsStyle.scss'
// import {Link} from 'react-router-dom';


import ApplyButton from "../button/ApplyButton";
export default function JobCard(props)
{
    return(
        <div className="job-card">
            <div className="job-card-left">
                <div className="job-card-location">
                    <GrLocation className="job-card-location-icon"/>
                    <span>Da Nang</span>
                </div>
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
                        </tbody>
                    </table>
                </div>
                <ApplyButton></ApplyButton>
            </div>
            <div className="job-card-right">
                <div className="job-card-title-child">Software Engineer</div>
                <br/>
                <div className="job-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate fugit labore numquam veritatis! Ab asperiores aut commodi dicta eius ipsa maxime, numquam, obcaecati quam rem sed velit veritatis!</div>
                <br/>
                <div className="job-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate debitis eligendi enim exercitationem iste, tempora. Architecto corporis culpa, doloremque ducimus enim illum minus nam non quas rem sed?</div>
                <br/>
                <div className="job-card-createAt">July 17th, 2022</div>
                <a className="read-more"></a>
            </div>
        </div>
    )
}