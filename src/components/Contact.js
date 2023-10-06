import React from 'react';
import Img3 from '../assets/bluelock.jpg';

const Contact = () => {
  return <section className=' py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Extra-Curricular</h4>
            <h2 className='text-[30px] lg:text-[45px] leading-none mb-12'>
            I love playing sports: Played Nationals in Football and Tennis.
Also interested in Esports such as Valorant, where I qualified for Nationals in Redbull Campus Clutch
<br/> I love watching Anime and criticizing movies.
            </h2>
          </div>
        </div>
        <div >
            <img className='rounded-xl' src={Img3} alt='' />
            </div>
          </div>
      </div>
  </section>;
};
export default Contact;
