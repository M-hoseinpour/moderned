import React, { useState, useEffect } from 'react'
import '../App.css'

const Fader = ({ text }) => {

    const [text1, setText1] = useState('Whatever good things we')
    const [text2, setText2] = useState('Build end up building us')

    const texts = ['Whatever good things we','Build end up building us','Architecture is visual art and', 'the bulidings speak for us' ,'We shape our buildings', 'thereafter they shape us' ]

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 5000);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <>
            <p className={fadeProp.fade}>{text}</p>
        </>
    )
}
export default Fader