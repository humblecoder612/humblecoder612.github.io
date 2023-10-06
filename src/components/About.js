import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from "../variants";

const About = () => {
  const [ref,inView]= useInView({threshold:0.5});
  
  return (<section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}   className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <p className='mb-6'>I have completed my B.Tech in CSE from MAIT, Delhi.
I have reached Kaggle expert 4 times competing with top data scientist from Nvidia etc. and have a dataset with 65,000 views. Currently I am working in Infosys as a System/Software Engineer.</p>
        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
          <div>
            <div className='text-[40px] font-tertiary text-gradient'>
              {inView ?<CountUp start={0} end={2} duration={1} /> :null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Years of <br/>
              Experience
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient'>
              {inView ?<CountUp start={0} end={70} duration={1} /> :null}
            k+
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Views <br/>
              on Dataset
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient'>
              {inView ?<CountUp start={0} end={10} duration={3} /> :null}
            +
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Projects <br/>
              Completed
            </div>
          </div>
          <div>
            <div className='text-[40px] font-tertiary text-gradient'>
              {inView ?<CountUp start={0} end={3} duration={1} /> :null}
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Research Paper <br/>
              Published
            </div>
          </div>

        </div>
        </motion.div>
      </div>
    </div>
  
  </section>);
};

export default About;
