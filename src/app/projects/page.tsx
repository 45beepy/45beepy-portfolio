import React from 'react';
import Link from "next/link"



// Components for different routes
const page = () => (
  <div className='bg-slate-200 w-full min-h-screen'>
    <div className= 'w-full h-full relative pt-28 px-28'>
      <h1 className='text-blue-700 text-3xl mb-2'>
        pravin's portfolio
      </h1>
      <div className='flex space-x-4 mb-3'>
        <section className='text-xl  text-red-500 hover:w-auto hover:text-slate-600'>
          <Link href='/'>
            <button>about</button>
          </Link>
        </section>
        <section className='text-xl  text-yellow-400 hover:w-auto hover:text-slate-600'>
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
      <div className='flex h-80 font-mono font-light'>
        <div className='relative mr-8'>
          <h2 className='realative text-green-700 text-xl hover:text-blue-400  mt-1 mb-0'>
              <Link href="https://github.com/45beepy/twitter-clone">Twitter Clone</Link>
            </h2>
          <div className='flex w-80 mt-3 mb-3 space-x-5'>
            <p className='relative font-light text-gray-600'>
            A replica of Twitter's core features. It utilizes React and NextJS for the front end and Firebase for backend services,
            including real-time updates, authentication, and data storage. The project includes tweeting, following users, and liking
            posts
            </p>
          </div>
        </div>
        <div className='relative mr-8'>
          <h2 className='realative w-80 text-green-700 text-xl hover:text-blue-400  mt-1 mb-0'>
              <Link href="https://github.com/45beepy/Water-Quality-Forecasting-using-Machine-Learning">Water Quality Forecasting</Link>
            </h2>
          <div className='flex w-80 mt-3 mb-3 space-x-5'>
            <p className='relative font-light text-gray-600'>
            To predict future water quality by analyzing historical data harnessing Machine Learning. The project focuses on creating a reliable model to forecast
            parameters like pH and contaminant levels, aiding in water resource management and safety.
            </p>
          </div>
        </div>
        <div className='relative mr-8'>
          <h2 className='realative w-80 text-green-700 text-xl hover:text-blue-400  mt-1 mb-0'>
              <Link href="https://github.com/45beepy/library-management">Libary Management</Link>
            </h2>
          <div className='flex w-80 mt-3 mb-3 space-x-5'>
            <p className='relative font-light text-gray-600'>
            A Website to logs books read, tracking reading progress and managing book records with features for adding, updating,
            and deleting entries.
            </p>
          </div>
        </div>
      </div>
      <footer>
      <p className='font-extralight text-black'>*to know more about the project click on its title.*</p>
    </footer>
    </div>
  </div>
);

export default page
