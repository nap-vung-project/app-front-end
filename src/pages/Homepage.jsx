import React from 'react';
import HeaderNavigation from '../components/Header/HeaderNavigation';
import '../asset/scss/Homepage.scss';
import Slider from '../components/Slider/Slider';
import Search from '../components/Search/Search';
import TopEmployer from '../components/TopEmployers/TopEmployers';
import BestJob from '../components/BestJobs/BestJob';
import Partner from '../components/Partners/Partner';
import ListImg from '../components/ListImg/ListImg';
import Footer from '../components/Footer/Footer';

export default function Homepage() {
    return(
        <div className='container'>
            <div className="header">
                <HeaderNavigation></HeaderNavigation>
            </div>
            <div className="content">
                    <Slider></Slider>
                    <Search></Search>
                    <TopEmployer></TopEmployer>
                    <BestJob></BestJob>
                    <Partner></Partner>
                    <ListImg></ListImg>
                <div className='footer'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}