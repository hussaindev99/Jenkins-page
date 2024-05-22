import React from 'react';
import Image from 'next/image';
import gitlogo from "@/public/images/github-logo.png";
import warninglogo from "@/public/images/warning-image.png";
import bysa from "@/public/images/by-sa.svg";
import Link from "next/link"
export default function Footer() {
    return (
        <div className='bg-[#1077ad] py-10 lg:flex lg:justify-center w-full '>
            {/* Column group 1 */}
            <div className='flex flex-col items-center justify-canter mb-10 lg:mb-0 lg:w-[300px] lg:mr-5 ml-5'>
                <div className='flex mb-5'>
                    <Link href="https://github.com/hussaindev99" className='flex items-center mr-3'>
                        <Image src={gitlogo} alt='' className='h-[20px] w-[20px]' />
                        <p className='text-[12px] font-semibold text-white'>Improve this page</p>
                    </Link>
                    <Link href="https://github.com/issues" className='flex items-center'>
                        <Image src={warninglogo} alt='' className='h-[20px] w-[20px]' />
                        <p className='text-[12px] font-semibold text-white'>Report page issue</p>
                    </Link>
                </div>
                <Link href="/">
                    <Image src={bysa} alt='' className='my-2 h-8 w-20' />
                </Link>
                <p className='text-[10px] font-semibold text-white'>The content driving this site is licensed under the Creative Commons Attribution-ShareAlike 4.0 license.</p>
            </div>
            {/* Column group 2 */}
            <div className='flex flex-wrap justify-center lg:w-[150px] lg:mr-10'>
                <div className='w-[150px] mb-5 mr-5'>
                    <hr className='border-white w-full' />
                    <p className='text-white font-semibold py-3 mt-0'>Resources</p>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Downloads</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Blog</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Documentation</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Plugins</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Security</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Contributing</p></Link>
                </div>
            </div>
            {/* Column group 3 */}

            <div className='flex flex-wrap justify-center lg:w-[150px] lg:mr-10'>
                <div className='w-[150px] mb-5 mr-5'>
                    <hr className='border-white w-full' />
                    <p className='text-white font-semibold py-3 mt-0'>Resources</p>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Structure and Governance</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Issue Tracker</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Roadmap</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>GitHub</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Security</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Jenkins on Jenkins</p></Link>
                </div>
            </div>
            {/* Column group 4 */}

            <div className='flex flex-wrap justify-center lg:w-[150px] lg:mr-10'>
                <div className='w-[150px] mb-5 mr-5'>
                    <hr className='border-white w-full' />
                    <p className='text-white font-semibold py-3 mt-0'>Resources</p>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Forum</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Events</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Mailing List</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Chats</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Special Interest Group</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Reddit</p></Link>
                </div>
            </div>

            {/* Column group 5 */}

            <div className='flex flex-wrap justify-center lg:w-[150px] lg:mr-10'>
                <div className='w-[150px] mb-5 mr-5'>
                    <hr className='border-white w-full' />
                    <p className='text-white font-semibold py-3 mt-0'>Resources</p>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Code of Conduct</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Press Information</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Merchandise</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Artwork</p></Link>
                    <Link href="/"><p className='text-[12px] font-light text-white hover:underline'>Awards</p></Link>
                </div>
            </div>
        </div>
    );
}
    