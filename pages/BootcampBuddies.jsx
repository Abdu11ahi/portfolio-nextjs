import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import BootcampBuddies from '../public/assets/projects/BootcampBuddies.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={BootcampBuddies}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Bootcamp Buddies</h2>
          <h3>React JS / CSS / Postgres</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           This was the first full stack team project that I took part in 9 weeks after starting the course. I was blessed with a great team and it gave me a great chance to put everything I learnt so far into practice, altogether. I was able to work on both the front end the backend and built my confidence with things I was struggling on (CSS!). The project brief was to build a full stack application that would focus on helping fellow bootcampers who were struggling. Our team got together for the first time and had to plan, design and code out our solution in 3 days, then create a presentation and present by the 4th. Our solution was to create an application that showed useful resources and links from each week of the bootcamp up until the current week we were on. It was a high stress environment but looking back, it was one of my favourite week in the bootcamp.
          </p>
          <a
            href='https://github.com/fireclint/crypto-react-firebase'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://cryptobase-yt.web.app/'
            target='_blank'
            rel='noreferrer'
          >
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Postgres
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Jest
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Routes
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Cypress
              </p>
                <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NodeJs
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
