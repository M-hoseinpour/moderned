import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './header.css'
import Navbar from './Navbar'
import Social from './Social'



function Header() {
    const [background, setBackground] = useState("url('https://images.adsttc.com/media/images/54b4/9502/e58e/ce52/8e00/0197/slideshow/%E5%A4%96%E8%A6%B3%E5%A4%95%E6%99%AF4.jpg?1421120756')")
    const [text1, setText1] = useState('Whatever good things we')
    const [text2, setText2] = useState('Build end up building us')
    const [fade, setFade] = useState(false)

    const texts = ['Whatever good things we','Build end up building us','Architecture is visual art and', 'the bulidings speak for us' ,'We shape our buildings', 'thereafter they shape us' ]
    const backgrounds = ['url("https://img.wallpapersafari.com/desktop/1920/1080/64/44/cL6ZFH.jpg")', 'url("https://www.kazakov.de/wp-content/uploads/2019/01/heydar-aliyev-center-07.jpg")', 'url("https://images.adsttc.com/media/images/54b4/9502/e58e/ce52/8e00/0197/slideshow/%E5%A4%96%E8%A6%B3%E5%A4%95%E6%99%AF4.jpg?1421120756")']
    let i=0;
    let j=2;
    useEffect(() => {
        // const interval2 = setInterval(() => {
        //     setFade(!fade)
        // }, 6000)
        const interval = setInterval(() => {
            setBackground(backgrounds[i])
            setText1(texts[j])
            setText2(texts[j + 1])
            i++
            j += 2
            if(i===3){i=0}
            if(j===6){j=0}
        }, 8000);
        return () => clearInterval(interval);
      }, []);
    
    
    return (
        <div className='header' style={{backgroundImage:background}}>
            <div className="title-bar">
             <div className="title">
                <div className="title-inner">
                <div className="cafe">
                    <div className='cafe-inner'>{text1}</div>
                </div>
                <div class="mozart">
                    <div class="mozart-inner">{text2}</div>
                </div>
                </div>
                </div>
                <div className='description'>
                <small>Architecture is both the process and the product of planning, designing, and constructing
                    buildings or other structures. Architectural works, in the material form of buildings, are often
                    perceived as cultural symbols and as works of art. Historical civilizations are often identified
                    with their surviving architectural achievements.
                </small>
                </div>               
            </div>
            
            <Navbar />
            <Social />
            <div className='flip'>
                <div class="wordCarousel">
                    <span>Principles of design: </span>
                    <div className='flips'>
                        <ul class="flip4">
                            <li>Emphasis</li>
                            <li>Balance and alignment</li>
                            <li>Contrast</li>
                            <li>Proportion</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='subtitle'>
                <div className='sub-section'>
                    <div className='up-title'>Top Architect :</div>
                    <div className='botton-title'>Antoni Gaudí</div>
                </div>
                <div className='sub-section'>
                    <div className='up-title'>Best Architecture :</div>
                    <div className='botton-title'>Gardens by the Bay</div>
                </div>
            </div>
        </div>
    )
}

export default Header
