import React from 'react'
import Carousel from 'react-elastic-carousel'
import './carousel.css'

function Carousel_custom() {
    return(
    <div className="carousel-section">
        <div className='carousel'>
            <div class="card"  data-aos="flip-right">
                <div className="bar"><img src='https://modciti.com/wp-content/uploads/2018/05/16033-Valley-Vista-Blvd2.jpg'></img></div>
            </div>
            <div className="card"  data-aos="flip-right">
                <div className="bar"><img src='https://modciti.com/wp-content/uploads/2018/05/16033-Valley-Vista-Blvd32.jpg'></img></div>
            </div>
            <div className="card"  data-aos="flip-right">
                <div className="bar"><img src='https://modciti.com/wp-content/uploads/2018/05/16033-Valley-Vista-Blvd.jpg'></img></div>
            </div>
            <div className="card"  data-aos="flip-right">
                <div className="bar"><img src='https://www.dexigner.com/images/article/26515/Dilido_by_SAOTA_04_thumb.jpg'></img></div>
            </div>
        </div>
    </div>
    )
}

export default Carousel_custom
