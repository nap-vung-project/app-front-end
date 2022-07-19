import React, {useState} from 'react';

// import banner-jobs from'../asset/images/banner-jobs.png';

import JobCard from '../components/jobs/JobCard';
import RecentCampaign from "../components/jobs/RecentCampaign";
import HeaderNavigation from "../components/Header/HeaderNavigation";


export default function Jobs()
{
    return(
        <div className="container">
            <div className="header">
                <HeaderNavigation></HeaderNavigation>
            </div>
            <div className="jobs-wrapper">
                <div className="u--banner-layout">
                    <div className="u--banner-layout-image">
                        {/*<img src={require('../asset/images/banner-jobs.png')} alt=""/>*/}
                    </div>
                </div>
                <div className="content-layout">
                    <div className="u--content-jobs-card">
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        <JobCard/>
                        {/*<Pagination*/}
                        {/*    count={30} color="primary"*/}
                        {/*    />*/}
                    </div>
                    <div className="u--left-side">
                        <RecentCampaign/>
                    </div>
                </div>
            </div>
        </div>
    )
}
