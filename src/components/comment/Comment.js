import React, { useEffect } from 'react'
import './comment.css'
import AOS from 'aos';
import 'aos/dist/aos.css'



function Comment() {

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    return (
        <div className='comment-section'>
            <div className='comments'>
                    <div className='comment' data-aos="fade-up">
                        <div className='comment-name'>
                            <img alt='girl with laptop' src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_X_Free_courses_for_engineering_students_in_2021.jpg'></img>
                        </div>
                        <div className='comment-description'>
                            <h1>Architecture, building and planning</h1>
                            <p>To get on to a related degree, you will usually need a minimum of two A levels, with three A levels and A/B grades required for the most popular courses. Entry requirements range from CCD to AAB, with the universities and colleges most commonly asking for BBB. In addition, you normally require five GCSEs at grade C or above, including maths and English. Planning and landscape architecture degrees do not normally require specific A level subjects. Some degrees in building and surveying may also require or prefer maths/science A levels</p>
                            <button>
                                Learn More
                            </button>
                        </div>
                        

                    </div>
                    
            </div>
            
            <div className='comments'>
                    <div className='comment comment-2' data-aos="fade-up">
                        
                        <div className='comment-description'>
                            <h1>What Is Manufacturing Engineering?</h1>
                            <p>Manufacturing engineering is a branch of engineering that focuses on improving the production of an item, whether that’s through making product design changes or creating more effective manufacturing processes. Job duties of manufacturing engineers can include developing solutions to production issues, performing cost-benefit analyses, or operating computer-aided design software to design and produce products and systems. Professionals in this field sometimes go by the title plant engineer or process engineer.</p>
                            <button>
                                Learn More
                            </button>
                        </div>
                        <div className='comment-name comment-name2'>
                            <img alt='girl with laptop' src='https://www.designingbuildings.co.uk/w/images/0/0d/Engineers.jpg'></img>
                        </div>

                    </div>
                    
            </div>
            
        </div>
    )
}

export default Comment
