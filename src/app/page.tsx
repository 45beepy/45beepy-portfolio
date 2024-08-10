import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import pfp from './images/pfp1.jpg';
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// Components for different routes
const page = () => (
  <div className='bg-slate-200 w-full min-h-screen '>
    <div className= 'w-full h-full relative pt-28 px-28'>
    <h1 className='text-blue-700 text-3xl mb-2'>
        pravin's portfolio
      </h1>
      <div className='flex space-x-4 mb-1'>
        <section className='text-xl text-yellow-400 hover:w-auto hover:text-slate-600'>
          <Link href='/'>
            <button>about</button>
          </Link>
        </section>
        <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
          <Link href="/projects">
            <button>projects</button>
          </Link>
        </section>
        <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
          <Link href="/certificates">
            <button>certificates</button>
          </Link>
        </section>
        <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
          <Link href='/socials'>
            <button>socials</button>
          </Link>
        </section>
      </div>
      <div className='flex mt-3 space-x-5'>
        <div className='w-80 h-80 flex justify-start text-gray-600 text-sm font-mono'>
          <p>
            Full Stack and Machine Learning Developer
        <br></br>
        <br />
        Pravin is a final-year computer science undergraduate student at SRMIST, KTR. He is a Full Stack developer who is currently on a quest to master Machine Learning. His strong skillsets include DSA and FullStack development (MERN). When he’s not busy coding, you’ll likely find him immersed in a sci-fi novel or catching up on the latest movies.
          <br />
          <br />
          He is currently trying to land a job as a Software Developer.
          </p>
        </div>
        <div className=' px-10'>
          <Image
            src={pfp}
            width={200}
            height={200}
            alt='Profile Picture'
            className='shadow-lg' />
        </div>
      </div>
      <footer className='flex justify-start space-x-3'>
        <div className='text-2xl text-black duration-100 hover:text-purple-700 hover:-translate-y-1 hover:scale-500'>
          <Link href='https://github.com/45beepy'> <FaGithub />
          </Link>
        </div>
        <div className='text-2xl text-orange-400 duration-100 hover:text-orange-700 hover:-translate-y-1 hover:scale-500'>
          <Link href='https://leetcode.com/u/45beepy/'>
            <SiLeetcode />
          </Link>
        </div>
        <div className='text-2xl text-blue-600 duration-100 hover:text-blue-800 hover:-translate-y-1 hover:scale-500'>
          <Link href='https://www.linkedin.com/in/pravin-panneerselvam-9bb12a1b2/'> <FaLinkedin />
          </Link>
        </div>
      </footer>
    </div>
  </div>
);



export default page;
