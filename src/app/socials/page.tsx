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
          <section className='text-xl text-yellow-400 hover:w-auto hover:text-slate-600'>
            <Link href='/socials'>
              <button>socials</button>
            </Link>
          </section>
        </div>
        <div className='inline font-mono mt-5 lg:mt-0'>
          <h1 className='text-4xl text-blue-700 hover:text-slate-400'>
            <Link href="https://www.linkedin.com/in/pravin-panneerselvam-9bb12a1b2/">
              LinkedIn
            </Link>
          </h1>
          <h1 className='text-4xl text-purple-700 hover:text-slate-400'>
            <Link href="https://github.com/45beepy">
              GitHub
            </Link>
          </h1>
          <h1 className='text-4xl text-orange-600 hover:text-slate-400'>
            <Link href="https://leetcode.com/u/45beepy/">
              LeetCode
            </Link>
          </h1>
          <h1 className='text-4xl text-transparent hover:text-slate-400 bg-gradient-to-l from-red-500 via-slate-300 to-red-500 bg-clip-text'>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=pravin.bp.art@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com">
              Gmail
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Page;
