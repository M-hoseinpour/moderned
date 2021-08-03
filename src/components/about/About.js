import React from 'react'
import './about.css'

function about() {
    return (
        <div className='about-section'>
            <div className='about-title-section'>
                <div data-aos="fade-up" className='about-title'>About us</div>
            </div>
            <div className='about-description'>
                <div data-aos="zoom-in-up" className='about-item'>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <p className='about-text'>Excellent RTL Support</p>
                    <p className='about-text-2'>provides 24/7 support</p>
                </div>
                <div data-aos="zoom-in-up" className='about-item'>
                    <i class="fa fa-users" aria-hidden="true"></i>
                    <p className='about-text'>+999 active users</p>
                    <p className='about-text-2'>practical assistances</p>
                </div>
                <div  data-aos="zoom-in-up" className='about-item'>
                    <i class="fas fa-chart-pie"></i>
                    <p className='about-text'>compare group's contribution</p>
                    <p className='about-text-2'>general visual representation</p>
                </div>
                <div data-aos="zoom-in-up" className='about-item'>
                    <i class="fad fa-chart-line"></i>
                    <p className='about-text'>growing without borders</p>
                    <p className='about-text-2'>discovery of 92 countries!</p>
                </div>
            </div>
        </div>
    )
}

export default about
