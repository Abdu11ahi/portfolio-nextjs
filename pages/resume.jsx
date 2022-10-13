import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Abdullahi | Resume</title>
        <meta
          name='description'
          content='I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Abdullahi Mohamoud</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/abdullahi-mohamoud99'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/abdu11ahi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Leadership <span className='px-1'>|</span> Software Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Leadership</p>
            <p className='py-2'>Software Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated Full Stack developer
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Postgres
            <span className='px-2'>|</span>MongoDb
            <span className='px-2'>|</span>Git
            <span className='px-2'>|</span>Cypress
            <span className='px-2'>|</span> NodeJs
            <span className='px-2'>|</span> Auth0
          </p>
          <p className='py-2'>
            <span className='font-bold'>Soft Skills</span>
            <span className='px-2'>|</span>Problem Solving
            <span className='px-2'>|</span>Communication
            <span className='px-2'>|</span>Time Management
            <span className='px-2'>|</span>Team Building
            <span className='px-2'>|</span>Project Management
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            School Of Code
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'>Full stack software engineer</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              - Worked in different teams every week with new partners to peer program with.
            </li>
            <li>
              - Held daily retrospectives and stand ups, allowing our team to work throughout the project iteratively and collectively make decisions every day. This promoted a healthier team dynamic allowing us to complete sprints smoothly.
            </li>
            <li>
              - Worked in an Agile team to deliver a useable product in a short time-frame, then presented to 150+ peers.
            </li>
            <li>
              - Peer programmed and developed communication skills and managed my team as a scrum master to ensure projects were deployed and ready for presentations.
            </li>
          </ul>
        </div>


        {/* Personal Experience
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              
            </span>
            <span className='px-2'>|</span>
          </p>
          <p className='py-1 italic'></p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              -
            </li>
            <li>
              -
            </li>
          </ul>
        </div> */}

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'></span>
            <span className='px-2'></span>
          </p>
          <p className='py-1 italic'>Small business owner / Customer service representative</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              -Communicated with employees, Amazon and Ebay to maintain highest quality of service.
            </li>
            <li>
              -Used Facebook ads to maximise sales and profits. Used Microsoft Excel to manage profits, company dealings and feedback.
            </li>
            <li>
              -Hired and trained employees to successfully carry out, refunds, returns and customer service which enabled me to focus on the future of the business, learning how to managhe my time well.
            </li>
            <li>
              -Communicated daily with managers and dealt with difficult calls, allowing me to learn how to adapt rapidly to different situations and provide a good experience to people who were unfortunately diagnosed with Covid.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
