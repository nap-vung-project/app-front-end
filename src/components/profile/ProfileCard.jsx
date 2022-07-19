import React from 'react';
import '../../asset/scss/ProfileStyle.scss'
export default function ProfileCard() {
    return(
        <div className="profile-card">
            <div className="profile-card-personal-info">
                <div className="profile-card-personal-image">
                    <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt=""/>
                </div>
                <div className="profile-card-personal-text">
                    <h3 className="profile-card-personal-name">Nguyen Thi Vinh Uyen</h3>
                    <p className="profile-card-personal-title">Employee</p>
                    <p className="profile-card-personal-address">Son Tra, Da Nang</p>
                </div>
            </div>
            <div className="profile-card-extra-info">
                <table>
                    <tbody>
                        <tr className="profile-card-extra-position">
                            <td>Current Position</td>
                            <td>Front-end Developer</td>
                        </tr>
                        <tr className="profile-card-extra-industry">
                            <td>Industry</td>
                            <td>Information Technology</td>
                        </tr>
                        <tr className="profile-card-extra-number">
                            <td>Phone Number</td>
                            <td>0123456789</td>
                        </tr>
                        <tr className="profile-card-extra-email">
                            <td>E-mail</td>
                            <td>uyen.nguyen@outlook.com</td>
                        </tr>
                        <tr className="profile-card-extra-social">
                            <td>Linkedin</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}