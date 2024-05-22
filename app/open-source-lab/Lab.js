import React from 'react'
import Image from 'next/image'
import cloudbees from "@/public/images/cloudbees.png"
import sourcelab from "@/public/images/source lab.png"
import cdfunction from "@/public/images/cdfunction.png"
import aws from "@/public/images/aws.png"
import github from "@/public/images/github.png"
import jfrog from "@/public/images/jfrog.png"
import Link from 'next/link'
export default function Lab() {
    return (
        <>
            <div className='bg-[#f2f3f3] text-center pt-20 mt-20'>
                <div className='mb-10 font-semibold'>
                    <p>We thank the following organizations for their major commitments to support the Jenkins project.</p>
                </div>
                <div className='flex flex-wrap justify-center items-center'>
                    <Link href="/"><Image src={cloudbees} alt='' className='h-24 mx-4 mb-4 sm:h-32 sm:mx-8 md:h-40 lg:h-48' /> </Link>
                    <Link href="/"><Image src={sourcelab} alt='' className='h-24 mx-4 mb-4 sm:h-32 sm:mx-8 md:h-40 lg:h-48' /> </Link>
                    <Link href="/"><Image src={cdfunction} alt='' className='h-24 mx-4 mb-4 sm:h-32 sm:mx-8 md:h-40 lg:h-48' /></Link>
                    <Link href="/"><Image src={aws} alt='' className='h-24 mx-4 mb-4 sm:h-32 sm:mx-8 md:h-40 lg:h-48' /></Link>
                    <Link href="/"><Image src={github} alt='' className='h-24 mx-4 mb-4 sm:h-32 sm:mx-8 md:h-40 lg:h-48' /></Link>
                    <Link href="/"><Image src={jfrog} alt='' className='h-24 mx-4 mb-4 sm:h-32 sm:mx-8 md:h-40 lg:h-48' /></Link>
                </div>
                <p className='font-semibold mt-20'>We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</p>
                <div className='flex flex-wrap justify-center items-center mt-6 pb-6 sm:text-[25px]'>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Atlassian</p> </Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Datadog</p> </Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>DigitalOcean</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Discourse</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Fastly</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>IBM</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Netlify</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>PagerDuty</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Sentry</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>Tsinghua University</p></Link>
                    <Link href="/"><p className='px-4 font-semibold text-lg sm:text-sm text-blue-600 hover:underline'>XMission</p></Link>
                </div>
            </div>
        </>
    )
}
