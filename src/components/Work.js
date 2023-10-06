import React from 'react';
import Img1 from '../assets/AI.jpg';

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-8 lg:flex-row'>
          <div>
            <h2 className='h2 leading-tight text-accent
            '>My Latest <br/> Work.</h2>
            <p className='max-w-sm mb-16'>
              I have done work from Research to Full-Stack Development.
            </p>
            <p className='max-w-sm mb-16'>
              Contact me <br/> Mail: yash612@gmail.com <br/> Phone: +91-8791898759
            </p>
            <a href='https://github.com/humblecoder612' className='btn btn-sm py-4'>View all my projects</a>
            </div> 
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient' >3 Research Papers Published</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
              <span className='text-3x1 text-white'><a href='https://www.researchgate.net/profile/Yash-Chaudhary-6'>Explore More</a></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  
  </section>;
};

export default Work;
