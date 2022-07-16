import React from 'react';
import {GrLocation} from 'react-icons/gr';
// import Proptypes from 'prop-types';
import '../../asset/scss/JobsStyle.scss'
// import {Link} from 'react-router-dom';

export default function JobCard(props) {
    return(
        <div className="job-card">
            <div className="job-card-left">
                <div className="job-card-location">
                    <GrLocation value={{color: 'red', size: '15px'}}/>
                    <span>Da Nang</span>
                </div>
                <div className="job-card-title">Software Engineer</div>
                <div className="job-card-salary">
                    <span>Salary</span>
                    <span>$1500</span>
                </div>
                <div className="job-card-position-type">
                    <span>Position type</span>
                    <span>Full time</span>
                </div>
                <div className="job-card-company">
                    <span>Company</span>
                    <span>O2R2</span>
                </div>
                <button></button>
            </div>
            <div className="job-card-right">
                <div className="job-card-title-child">Software Engineer</div>
                <div className="job-card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cupiditate fugit labore numquam veritatis! Ab asperiores aut commodi dicta eius ipsa maxime, numquam, obcaecati quam rem sed velit veritatis!</div>
                <div className="job-card-description"></div>
                <div className="job-card-createAt"></div>
                <a className="read-more"></a>
            </div>
        </div>
    )
}