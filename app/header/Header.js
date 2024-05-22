import React from 'react';
import Image from 'next/image';
import manimage from '@/public/images/man-image.svg';
import Link from 'next/link';

export default function Header() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0'> 
            <div className='w-full lg:w-1/2 lg:order-last'>
                <Image src={manimage} alt="" className='w-full h-auto lg:h-[400px] object-cover' />
            </div>
            <div className='w-full lg:w-1/2 lg:ml-8'>
                <p className='text-3xl lg:text-6xl font-bold mb-2'>Jenkins</p>
                <p className='text-lg lg:text-xl font-semibold mb-4'>Build great things at any scale</p>
                <p className='mb-4'>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.</p>
                <p className='mb-6 lg:mb-8'>We stand with the people of Ukraine. Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the Ukrainian Red Cross</p>
                <a href="https://www.jenkins.io/doc/" className='inline-block bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 rounded-[7px] mr-2 mb-2 lg:mb-0 lg:mr-4'>Documentation</a>
                <a href="https://www.jenkins.io/download/" className='inline-block bg-[#d24939] hover:bg-slate-800 text-white py-2 px-4 rounded-[7px]'>Download</a>
            </div>
        </div>
    );
}
