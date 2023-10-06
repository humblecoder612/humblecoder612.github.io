import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: "Intelligent Traffic Signal",
    description: "Used computer vision and image processing to detect accidents & adjust signal timers at the 4-Road intersection based on the number of vehicles and prioritizing emergency vehicles",
    link: 'https://github.com/humblecoder612/Intelligent_traffic'
  },
  {
    name: "Social Distance Tracker",
    description: "Using YOLO-V4 to detect people in the Image and calculated the distance between them to decide whether they are maintaining social distance.",
    link: 'https://github.com/humblecoder612/social-distance-tracker'
  },
  {
    name: "Forest Fire Predictor",
    description: "Used Keras and Kmeans to predict the percentage of fire and locate hotspots for the next fire leading to Top 10 in BIT Mesra Hackathon.",
    link: 'https://main.alcromido.now.sh/'
  },
  {
    name: "Quick-Code",
    description: "Created an online coding editor and compiler supporting many programming languages.",
    link: 'http://yash612.pythonanywhere.com'
  },

]

const Services = () => {
  return <div className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div variants={fadeIn('right',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'> I have multiple years of work in Machine learning/Deep learning from Computer vision to NLP, to display that project.<br/> I explored Full-Stack Developement such as MERN and Flask/Django with React.<br/> I dipped my knowledge in Salesforce too, getting certified as Salesforce Platform Developer.
          </h3>
          <a href='https://github.com/humblecoder612' className='btn btn-sm py-4'>See my work</a>
        </motion.div>
        <motion.div variants={fadeIn('left',0.5)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}>
          {services.map((service, index) => {
            const { name, description, link } = service;
            return (
            <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
              <div className='max-w-[476px]'><h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
              <p className='font-secondary leading-tight'>{description}</p></div>
              <div className='flex flex-col flex-1 items-end'>
                <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight></BsArrowUpRight>
                </a>
                <a href={link} className='text-gradient text-sm'>Click here</a>
              </div>
            </div>
            );
          })}

        </motion.div>

      </div>
    </div>

  </div>;
};

export default Services;
