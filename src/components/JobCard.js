import React from 'react';
import Proptypes from 'prop-types';
import '../asset/scss/JobsStyle.scss';

export default function JobCard(props) {
    return(
        <div>
            <div className="job--card--left">
                <div className="job__card__location"></div>
                <div className="job__title"></div>
                <div className="job__salary"></div>
                <div className="job__position__type"></div>
                <div className="job__company"></div>
                <button></button>
            </div>
            <div className="job__card_right">
                <div className="job__title__child"></div>
            </div>
        </div>
    )
}