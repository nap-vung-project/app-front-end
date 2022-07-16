import React from 'react';
import '../../src/asset/scss/JobsStyle.scss';

import JobCard from '../components/jobs/JobCard';
import RecentCampaign from "../components/jobs/RecentCampaign";

export default function Jobs()
{
    return(
        <div className="u--content-layout">
            <div className="u--content-jobs-card">
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
            </div>
            <div className="u--left-side">
                <RecentCampaign/>
            </div>
        </div>
    )
}
