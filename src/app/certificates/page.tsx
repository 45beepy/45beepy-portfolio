import React from 'react';
import Link from "next/link"

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
          <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
            <Link href="/projects">
              <button>projects</button>
            </Link>
          </section>
          <section className='text-xl  text-yellow-400 hover:w-auto hover:text-slate-600'>
            <Link href='/certificates'>
              <button>certificates</button>
            </Link>
          </section>
          <section className='text-xl text-red-500 hover:w-auto hover:text-slate-600'>
            <Link href='/socials'>
              <button>socials</button>
            </Link>
          </section>
        </div>
        <div className='text-sm h-80 font-mono'>
          <div className='relative mr-8'>
            <h2 className='realative text-orange-500 text-lg hover:text-blue-400  mt-1 mb-0'>
                <Link href="https://www.credly.com/badges/997a226b-de76-4e2a-95c5-af253ec77626/linked_in?t=rzby9y"> AWS Academy Machine Learning Foundations</Link>
              </h2>
            <div className='flex w-80 mt-0 mb-3 space-x-5'>
              <p className='relative text-gray-600 '>
              Issued by AWS Academy
              </p>
            </div>
          </div>
          <div className='relative mr-8'>
            <h2 className='realative w-80 text-amber-700 text-lg hover:text-blue-400  mt-1 mb-0'>
                <Link href="https://www.coursera.org/account/accomplishments/verify/2H8O8GBRV63B?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Supervised Machine Learning: Regression and Classification</Link>
              </h2>
            <div className='flex w-80 mt-0 mb-3 space-x-5'>
              <p className='relative text-gray-600 font-mono'>
              Issued by Coursera - Stanford
              </p>
            </div>
          </div>
          <div className='relative mr-8'>
            <h2 className='realative w-80 text-green-700 text-lg hover:text-blue-400  mt-1 mb-0'>
                <Link href="https://www.coursera.org/account/accomplishments/verify/XYZ7VHBK2D3A?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Data Analysis with Python</Link>
              </h2>
            <div className='flex w-80 mt-0 mb-3 space-x-5'>
              <p className='relative text-gray-600 font-mono'>
              Issued by Coursera - IBM
              </p>
            </div>
          </div>
          <div className='relative mr-8'>
            <h2 className='realative w-80 text-blue-800 text-lg hover:text-blue-400  mt-1 mb-0'>
                <Link href="https://www.coursera.org/account/accomplishments/verify/AQ95S74GAKET?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Networking and Security Architecture with VMware NSX</Link>
              </h2>
            <div className='flex w-80 mt-0 mb-3 space-x-5'>
              <p className='relative text-gray-600 font-mono'>
              Issued by Coursera - VMware
              </p>
            </div>
          </div>
        </div>
        <footer>
        <p className='font-extralight text-black'>*to view certification click on its title.*</p>
      </footer>
      </div>
    </div>
  );
  
  export default page