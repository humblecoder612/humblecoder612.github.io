import React from 'react';
import Image from "../assets/me_3.png";
import {FaGithub} from 'react-icons/fa';
import {FiLinkedin} from 'react-icons/fi';
import {SiGmail} from 'react-icons/si';

import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 variants={fadeIn('up',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'> Yash <span> Chaudhary </span></motion.h1>
          <motion.div variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'><span className='mr-4 text-white'> I am a Developer in<br/> </span>
          <TypeAnimation sequence={['Python',2000,'Salesforce',2000,'Nodejs/React',2000]} speed={50} className='text-accent' repeat={Infinity} wrapper='span'/>
          </motion.div>
          <motion.p variants={fadeIn('up',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>A Machine Learning Enthusiast who creates
new models to implement it into
applications and sites.
Recently, focusing on Salesforce.</motion.p>
<motion.div variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex  max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
  <a href='https://drive.google.com/drive/folders/1qKHjGoZHKDqMepTDFzqSdOdOq7VMoJlD' className='text-gradient btn-link'>My Resume</a>
</motion.div>
<motion.div variants={fadeIn('up',0.7)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
  <a href='mailto:yash612@gmail.com'><SiGmail/></a>
  <a href='https://github.com/humblecoder612'><FaGithub/></a>
  <a href='https://www.linkedin.com/feed/'><FiLinkedin/></a>
</motion.div>
        </div> 
         <motion.div variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}  className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
         <img src={Image} alt=""/> 
         </motion.div>
      </div>

    </div>
    </section>;
};

export default Banner;
