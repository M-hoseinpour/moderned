import React from 'react'

function News_item(props) {
    return (
        <div data-aos="zoom-out" className='news_item'>
            <img alt='news' src={props.img}/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default News_item
