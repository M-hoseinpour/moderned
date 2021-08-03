import React from 'react'
import './introduction.css'

function Introduction() {
    return (
        <div className='introduction'>
            <div className="custom-shape-divider-top-1627984352">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    
                </svg>
                
            </div>
            <div className='intro'>
                <div data-aos="fade-up-right" data-aos-duration="2500" className='Who'>
                    <h2>Who we are </h2>
                    <h1>Today, we’re building upon our legacy of industry-leading architectural delivery.</h1>
                    <p>
                    We've become an interdisciplinary global design firm by expanding our team beyond architects
                    and interior designers to include researchers, urban designers, nurses, anthropologists, graphic
                    designers and more. At HKS, we view design as a process of discovery. Design research enables us to
                    experiment, to improve — and to design smarter solutions. That’s particularly important as we strive
                        to create a more resilient future.</p>
                </div>
                <div data-aos="flip-up" data-aos-duration="2500" className='intro-img'>
                    <img src='https://images.squarespace-cdn.com/content/v1/51eed906e4b0953024980af9/1418010845397-6111KZEY3E67KYKFR72Q/Ribbon+Chapel+by+Hiroshi+Nakamura+%26+NAP+Co.%2C+Ltd.?format=1000w'></img>
                </div>
            </div>
        </div>
    )
}

export default Introduction
