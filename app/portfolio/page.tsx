import React from 'react'
import Image from 'next/image'
const Portfolio = () => {
  return (
   <section className='pro__sector'>
       <h2 className='text-6xl'>Portfolio</h2>
          <div className='project__container'>
              <div className='project__card'>
                  <Image className="project-image" width={35} height={35}  src="/first.jpg" alt="Project One Image" />
                  <h3>Project One</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              <div className='project__card'>
                  <Image className="project-image" width={35} height={35}  src="/sec.jpg" alt="Project One Image" />
                  <h3>Project two</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              <div className='project__card'>
                  <Image className="project-image" width={35} height={35} src="/third.jpg" alt="Project One Image" />
                  <h3>Project Three</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              <div className='project__card'>
                  <Image className="project-image" width={35} height={35} src="/fourth.jpg" alt="Project One Image" />
                  <h3>Project Four</h3>
                  <p className="subtext">This is my project and some text about it. I enjoyed making this project.</p>
                  <hr/>
                  <p className="subtext"><a className="project-link" href="">View here</a></p>              
              </div>
              
          </div>
   </section>
  )
}

export default Portfolio