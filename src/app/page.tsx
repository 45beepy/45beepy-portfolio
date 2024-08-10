"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pfp from './images/pfp1.jpg';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { RiCloseFill } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <div className='w-full h-full relative pt-28 px-8 lg:px-28'>
        <div className='flex justify-between items-center mb-2'>
          <h1 className='text-blue-700 text-3xl'>
            Pravin's Portfolio
          </h1>
          <div className='lg:hidden text-green-700'>
            <button onClick={toggleMenu} className='text-3xl'>
              {menuOpen ? <RiCloseFill /> : <CiMenuFries />}
            </button>
          </div>
        </div>
        <div className={`lg:flex lg:space-x-4 lg:mb-1 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <section className='text-xl text-yellow-400 hover:w-auto hover:text-slate-600'>
            <Link href='/'>
              <button>About</button>
            </Link>
          </section>
          <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
            <Link href='/projects'>
              <button>Projects</button>
            </Link>
          </section>
          <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
            <Link href='/certificates'>
              <button>Certificates</button>
            </Link>
          </section>
          <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
            <Link href='/socials'>
              <button>Socials</button>
            </Link>
          </section>
        </div>
        <div className='flex flex-col lg:flex-row mt-3 lg:space-x-5'>
          <div className='w-full lg:w-80 lg:h-80 flex justify-start text-gray-600 text-sm font-mono'>
            <p>
              Full-Stack and Machine Learning Developer
              <br />
              <br />
              Pravin is a final-year computer science undergraduate student at SRMIST, KTR. He is a Full Stack developer who is currently on a quest to master Machine Learning. His strong skillsets include DSA and Full-Stack development. When he’s not busy coding, you’ll likely find him immersed in a sci-fi novel or catching up on the latest movies.
              <br />
              <br />
              He is currently trying to land a job as a Software Developer.
            </p>
          </div>
          <div className='flex justify-center items-center px-10 mt-5 lg:mt-0'>
            <Image
              src={pfp}
              width={200}
              height={200}
              alt='Profile Picture'
              className='shadow-lg'
            />
          </div>
        </div>
        <footer className='flex justify-center lg:justify-normal space-x-3 mt-5 py-5'>
          <div className='text-2xl text-black duration-100 hover:text-purple-700 hover:-translate-y-1 hover:scale-500'>
            <Link href='https://github.com/45beepy'>
              <FaGithub />
            </Link>
          </div>
          <div className='text-2xl text-orange-400 duration-100 hover:text-orange-700 hover:-translate-y-1 hover:scale-500'>
            <Link href='https://leetcode.com/u/45beepy/'>
              <SiLeetcode />
            </Link>
          </div>
          <div className='text-2xl text-blue-600 duration-100 hover:text-blue-800 hover:-translate-y-1 hover:scale-500'>
            <Link href='https://www.linkedin.com/in/pravin-panneerselvam-9bb12a1b2/'>
              <FaLinkedin />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;
