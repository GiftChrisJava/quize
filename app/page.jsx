import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
  <div className="h-screen bg-cover bg-center flex items-center justify-center bg-no-repeat backdrop-blur bg-[url('../public/bg2.jpg')]">

  <div className='flex flex-col'>
    <h1 data-aos="fade-left" className="text-gray-700 text-center font-bold text-5xl -mt-[200px]">
      WELCOME TO MALAWI EDUCATION ENHANCEMENT PLATFORM
    </h1>
      
    <h4 className="text-gray-700 text-center font-bold text-xl mt-8 mb-16">
     A website to that simplies what you learn in class to increase your understanding for best grades
    </h4>
     
      <div className="mt-8 flex justify-between max-w-sm mx-auto gap-[100px]">
          <button className="bg-gray-700 text-gray-200 hover:text-green-600 hover:cursor-pointer font-bold rounded-lg shadow-lg py-2 px-4">
            <Link href="/sign-in">Login</Link>
          </button>

          <button className="bg-gray-700 px-4 text-gray-200 hover:text-green-600 hover:cursor-pointer font-bold rounded-lg shadow-lg py-2">
            <Link href="/sign-up">Register</Link>
          </button>
      </div>
  </div>
</div>

  );
}
