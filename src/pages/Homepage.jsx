import React from 'react';
import HeaderNavigation from '../components/HeaderNavigation';
import '../asset/scss/Homepage.scss';
import Slider from '../components/Slider';
import Search from '../components/Search';
import TopEmployer from '../components/TopEmployers';
import BestJob from '../components/BestJob';
import Partners from '../components/Partners/Partners';
import ListImg from '../components/ListImg';
import Footer from '../components/Footer';

export default function Homepage() {
    return(
        <div className='container'>
                <HeaderNavigation/>
            <div className="content">
                    <Slider/>
                    <Search/>
                    <TopEmployer/>
                    <BestJob/>    
                    <Partners/>     
                    <ListImg/>   
                    <Footer/>
            </div>
        </div>
    )
}