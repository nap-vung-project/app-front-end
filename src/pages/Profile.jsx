import React from 'react';
import '../asset/scss/ProfileStyle.scss'

import ProfileCard from "../components/profile/ProfileCard";
import ChildJobCard from "../components/jobs/ChildJobCard";
import AppliedJobs from "../components/profile/AppliedJobs";
import {CgProfile} from "react-icons/cg";

export default function Profile() {
    return(
        <div id="profile-uyen">
            <div className="profile-intro">
                <CgProfile/>
                <span>Profile</span>
            </div>
            <div className="profile-content">
                <ProfileCard/>
                <div className="profile-content-jobs-preview">
                    <ChildJobCard/>
                    <ChildJobCard/>
                </div>
            </div>
            <div className="profile-follow">
                <div className="profile-follow-applied">
                    <AppliedJobs/>
                </div>
            </div>
        </div>
    )
}