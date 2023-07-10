import React from 'react'
import Image from 'next/image'
const Portfolio = () => {
  return (
   <section className='pro__sector'>
       <h2 className='sm:text-2xl md:text-5xl'>Portfolio</h2>
          <div className='project__container'>
              <div className='project__card'>
                  <Image className="project-image" width={1000} height={1000}  src="/first.jpg" alt="Project One Image" />
                  <h3 className=' mb-5 '>Project One</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              <div className='project__card'>
                  <Image className="project-image" width={1000} height={1000}  src="/sec.jpg" alt="Project One Image" />
                  <h3  className=' mb-5 '>Project two</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              <div className='project__card'>
                  <Image className="project-image" width={1000} height={1000} src="/third.jpg" alt="Project One Image" />
                  <h3 className=' mb-5 '>Project Three</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              <div className='project__card'>
                  <Image className="project-image" width={1000} height={1000} src="/fourth.jpg" alt="Project One Image" />
                  <h3 className=' mb-5 '>Project Four</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              
          </div>
   </section>
  )
}

export default Portfolio