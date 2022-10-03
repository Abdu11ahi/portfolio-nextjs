import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg';
import Houseplanner from '../public/assets/projects/HousePlanner.png';
import BootcampBuddies from '../public/assets/projects/BootcampBuddies.png';
import MemeGenerator from '../public/assets/projects/MemeGenerator.png';
import Typescript from '../public/assets/projects/Typescript-todo.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='House Planner'
            backgroundImg={Houseplanner}
            projectUrl='/OurHouse'
            tech='NextJs'
          />
          <ProjectItem
            title='BootcampBuddies'
            backgroundImg={BootcampBuddies}
            projectUrl='/BootcampBuddies'
            tech='React JS'

          />
          <ProjectItem
            title='Meme Generator'
            backgroundImg={MemeGenerator}
            projectUrl='/MemeGenerator'
            tech='React JS'

          />
          <ProjectItem
            title='Typescript'
            backgroundImg={Typescript}
            projectUrl='/Typescript'
            tech='TypeScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
