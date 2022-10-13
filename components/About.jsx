import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Hello and welcome! My name is Abdullahi and I have recently developed (no pun intended) a passion for developing things. I decided to transition into Tech because developers appeared to have a sense of empowerment driven by their ability to code. And I want to be empowered.
          After a rocky road of trying to teach myself how to code, I enrolled to the School of Code being selected out of 1800+ candidates. Fast forward to today, and I have worked in agile teams, taken part in pair/team programming and applied computational thinking to code.
          My main focus currently is to find a suitable role for me, where I can grow and develop my skills. My secondary focus is doing what I can to help tech be more accessible, particularly to those who come from disadvantaged backgrounds.
          </p>
          <p className='py-2 text-gray-600'>
            I had my first experience with programming in 2015 when I did a computer science GCSE, I found myself always making excuses to &quot;revise&quot; Python. I simply enjoyed it more than any other subject I was doing. However I somehow convinced myself after school that my talents were needed elsewhere. 7 years later and my life has done a complete 360 and I&#39;m back doing what I love. 
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
