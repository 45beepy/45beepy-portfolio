"use client"
import React, { useState } from 'react';
import Link from "next/link";
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
          <div className='lg:hidden text-green-700' >
            <button onClick={toggleMenu} className='text-3xl'>
              {menuOpen ? <RiCloseFill /> : <CiMenuFries />}
            </button>
          </div>
        </div>
        <div className={`lg:flex lg:space-x-4 lg:mb-3 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
            <Link href='/'>
              <button>about</button>
            </Link>
          </section>
          <section className='text-xl text-yellow-400 hover:w-auto hover:text-slate-600'>
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
        <div className='flex flex-col lg:flex-row h-auto lg:h-80 font-mono font-light mt-3 lg:mt-0'>
          <div className='relative mr-0 lg:mr-8 mb-4 lg:mb-0'>
            <h2 className='relative text-green-700 text-xl hover:text-blue-400 mt-1 mb-0'>
              <Link href="https://github.com/45beepy/twitter-clone-firebase">Twitter Clone</Link>
            </h2>
            <div className='flex w-full lg:w-80 mt-3 mb-3'>
              <p className='relative font-light text-gray-600'>
                A replica of Twitter's core features. It utilizes React and NextJS for the front end and Firebase for backend services,
                including real-time updates, authentication, and data storage. The project includes tweeting, following users, and liking
                posts.
              </p>
            </div>
          </div>
          <div className='relative mr-0 lg:mr-8 mb-4 lg:mb-0'>
            <h2 className='relative w-full lg:w-80 text-green-700 text-xl hover:text-blue-400 mt-1 mb-0'>
              <Link href="https://github.com/45beepy/Water-Potability-Prediciton">Water Potability Analysis</Link>
            </h2>
            <div className='flex w-full lg:w-80 mt-3 mb-3'>
              <p className='relative font-light text-gray-600'>
                To predict future water quality by analyzing historical data harnessing Machine Learning. The project focuses on creating a reliable model to forecast
                parameters like pH and contaminant levels, aiding in water resource management and safety.
              </p>
            </div>
          </div>
          <div className='relative mr-0 lg:mr-8 mb-4 lg:mb-0'>
            <h2 className='relative w-full lg:w-80 text-green-700 text-xl hover:text-blue-400 mt-1 mb-0'>
              <Link href="https://github.com/45beepy/Haiku-Haven">Haiku Haven</Link>
            </h2>
            <div className='flex w-full lg:w-80 mt-3 mb-3'>
              <p className='relative font-light text-gray-600'>
              A web platform for creating and storing haikus with unique AI-generated cover images. Using Cloudinary for high-resolution image generation, the site supports full CRUD functionality, allowing users to easily manage their haiku collections.
              </p>
            </div>
          </div>
        </div>
        <footer className='mt-5'>
          <p className='font-extralight text-black'>*To know more about the project, click on its title.*</p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
