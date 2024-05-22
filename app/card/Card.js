import React from 'react';
import Image from 'next/image';
import download from "@/public/images/download-icon.webp";

export default function Card() {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-evenly mt-8 lg:mt-16'>
                <div className='flex w-full lg:w-[370px] bg-slate-500 p-5 relative h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110 mb-8 lg:mb-0'>
                    <Image src={download} alt='' className='h-10 w-10 mr-4 lg:mr-6' />
                    <div>
                        <p className='text-lg lg:text-xl font-semibold'>Continuous Integration and Continuous Delivery</p>
                        <p className='mt-2 text-sm lg:text-base'>As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project.</p>
                    </div>
                </div>
                <div className='flex w-full lg:w-[370px] bg-slate-500 p-5 relative h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110 mb-8 lg:mb-0'>
                    <Image src={download} alt='' className='h-10 w-10 mr-4 lg:mr-6' />
                    <div>
                        <p className='text-lg lg:text-xl font-semibold'>Easy installation</p>
                        <p className='mt-2 text-sm lg:text-base'>Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.</p>
                    </div>
                </div>
                <div className='flex w-full lg:w-[370px] bg-slate-500 p-5 relative h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110 mb-8 lg:mb-0'>
                    <Image src={download} alt='' className='h-10 w-10 mr-4 lg:mr-6' />
                    <div>
                        <p className='text-lg lg:text-xl font-semibold'>Easy configuration</p>
                        <p className='mt-2 text-sm lg:text-base'>Jenkins can be easily set up and configured via its web interface, which includes on-the-fly error checks and built-in help.</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-evenly mt-8 lg:mt-16'>
                <div className='flex w-full lg:w-[370px] bg-slate-500 p-5 relative h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110 mb-8 lg:mb-0'>
                    <Image src={download} alt='' className='h-10 w-10 mr-4 lg:mr-6' />
                    <div>
                        <p className='text-lg lg:text-xl font-semibold'>Plugins</p>
                        <p className='mt-2 text-sm lg:text-base'>With hundreds of plugins in the Update Center, Jenkins integrates with practically every tool in the continuous integration and continuous delivery toolchain.</p>
                    </div>
                </div>
                <div className='flex w-full lg:w-[370px] bg-slate-500 p-5 relative h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110 mb-8 lg:mb-0'>
                    <Image src={download} alt='' className='h-10 w-10 mr-4 lg:mr-6' />
                    <div>
                        <p className='text-lg lg:text-xl font-semibold'>Extensible</p>
                        <p className='mt-2 text-sm lg:text-base'>Jenkins can be extended via its plugin architecture, providing nearly infinite possibilities for what Jenkins can do.</p>
                    </div>
                </div>
                <div className='flex w-full lg:w-[370px] bg-slate-500 p-5 relative h-auto z-0 rounded-lg transition-all duration-300 hover:scale-110'>
                    <Image src={download} alt='' className='h-10 w-10 mr-4 lg:mr-6' />
                    <div>
                        <p className='text-lg lg:text-xl font-semibold'>Distributed</p>
                        <p className='mt-2 text-sm lg:text-base'>Jenkins can easily distribute work across multiple machines, helping drive builds, tests and deployments across multiple platforms faster.</p>
                    </div>
                </div>
            </div>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" className='mx-auto my-8 lg:my-16 w-full lg:w-[80%] h-[300px] lg:h-[500px]'></iframe>
        </>
    );
}
