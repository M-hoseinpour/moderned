import React from 'react'
import './meet.css'

function Meet() {
    return (
        <div className='meet' >
            <div className='meet-imgs'>
                <img data-aos="fade-up" data-aos-duration="2000" src='https://blog.catalpha.com/hs-fs/hubfs/blog_images/team-of-professionals-fpo.jpg?width=480&name=team-of-professionals-fpo.jpg'></img>
                <img data-aos="fade-right" data-aos-duration="2000" src='https://pplv.co/wp-content/uploads/2016/08/iStock_77934241_SMALL.jpg'></img>
                <img data-aos="fade-left" data-aos-duration="2000" src='https://blog.catalpha.com/hs-fs/hubfs/Stock%20images/Multiethnic%20group%20of%20business%20people%20working%20together%20in%20office.jpg?width=1000&name=Multiethnic%20group%20of%20business%20people%20working%20together%20in%20office.jpg'></img>
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="2000" className='meet-description'>
                <h1>Meet our designers</h1>
                <p>We constantly challenge ourselves to push boundaries and create innovative products. We do this in cooperation with top designers. While all of our designers have a unique style, they are united by a shared passion for design, an eye for detail, and high standards of quality and craftsmanship.</p>
                <button>meet our designers<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Meet
