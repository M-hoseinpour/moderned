import React from 'react'
import News_item from './News_item'
import './news.css'

function News() {
    return (
        <div className='news'>
            <News_item description="Critical Thinking. As much as you need your creative juices flowing, you will also need" title='What Skills Do I Need to Break into Interior Design ?' img='https://www.thebalancecareers.com/thmb/okeWU7ZokdGTe8Br1QFxZfhpDoI=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-169997731-575ed2535f9b58f22eb1eb1d.jpg' />
            <News_item description="To become an architect, you need to complete a bachelor's or master's degree program in architecture" title='How to Become an Architect ?' img='https://www.thebalancecareers.com/thmb/odRzfEbJ4BHUXFsk8J-gKI0qar0=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/engineer-using-laptop-at-desk-with-robotics-554996409-59aaf065054ad9001014f617.jpg' />
            <News_item description="Agricultural engineers attempt to solve agricultural problems concerning power supplies, the efficiency of machinery, the use of structures and facilities." title='What Is an Agricultural Engineer ?' img='https://www.thebalancecareers.com/thmb/-POjGmtLtUCJK_dY_CxhYffGIV0=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-154319842-4c12c21d1a9f4e079a7db4fc125f39cf.jpg' />
            <News_item description="The average Manager salary in the United States is $150,448 as of June 28, 2021. " title='Find out What the Highest Paying Management Jobs Are' img='https://www.thebalancecareers.com/thmb/w10EKdW_hn6L9fRG01NrYOHXZr0=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/143382528-56a0f0e83df78cafdaa69beb.jpg' />
        </div>
    )
}

export default News
