import React, {useState} from 'react';
import '../asset/scss/JobsStyle.scss';
// import banner-jobs from'../asset/images/banner-jobs.png';

import JobCard from '../components/jobs/JobCard';
import RecentCampaign from "../components/jobs/RecentCampaign";
import {Pagination, PaginationItem} from '@mui/material';


export default function Jobs()
{
    // let [page, setPage] = useState(1);
    // const PER_PAGE = 24;
    //
    // const count = Math.ceil(data.length / PER_PAGE);
    // const _DATA = usePagination(data, PER_PAGE);
    //
    // const handleChange = (e, p) => {
    //     setPage(p);
    //     _DATA.jump(p);
    // };

    return(
        <div id="jobs-uyen">
            <div className="header">
                fjdhf
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
                        <Pagination
                            count={30} color="primary"
                            />
                    </div>
                    <div className="u--left-side">
                        <RecentCampaign/>
                    </div>
                </div>
            </div>
        </div>
    )
}
