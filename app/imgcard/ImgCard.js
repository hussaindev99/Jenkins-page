import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import groupphoto from "@/public/images/group-photo.jpg";
import manlong from "@/public/images/Kevin Martens.jpeg";
import summercode from "@/public/images/summer-code.png";
import communityaward from "@/public/images/community-award.png";
import girlimg from "@/public/images/Alyssa Tong.jpg";
import sonar from "@/public/images/sonar.png";
import recap2023 from "@/public/images/recap-2023.png";
import constributor from "@/public/images/Contributor_summit.png";
import yaniv from "@/public/images/Yaniv-nizry.jpg";
import Damien from "@/public/images/Damien DUPORTAL.jpg";
import Mark from "@/public/images/Mark Waite.jpg";
import bruno from "@/public/images/Bruno Verachte.png";
import Wadeck from "@/public/images/Wadeck Follonier.jpg";
import jeanmarc from "@/public/images/Jean-Marc Meessen.jpg";
import centred from "@/public/images/centered-newsletter.png";
import eltric from "@/public/images/elitric-result.svg";
import github from "@/public/images/github-checks.png";
import alexender from "@/public/images/Alexander Brandes.jpg";
import mingyang from "@/public/images/Mingyang Li.png";

export default function ImgCard() {
    return (
        <>
            {/* image card 1 */}
            <div className='flex flex-col lg:flex-row justify-evenly mx-[10%] items-center mb-8 lg:mb-0'>
                <div className='w-full lg:w-[300px] mt-3.5 mb-8 lg:mb-0'>
                    <Link href="https://www.jenkins.io/blog/2024/02/28/jenkins-contributor-summit-and-fosdem-recap/">
                        <div>
                            <Image src={groupphoto} alt='' className='h-[180px] lg:h-[200px] w-full rounded-[10px] relative z-0 transition-all duration-300 hover:scale-110' />
                            <p className='text-lg font-semibold pl-[10px] mt-5 hover:underline'>Jenkins Contributor Summit and FOSDEM Recap</p>
                            <p className='text-sm pl-[10px] mt-2'>The previous in-person Jenkins Contributor Summit took place in 2020, just prior to the lockdowns and precautions that would change the world. Thankfully, on February 2,</p>
                        </div>
                    </Link>
                    <Link href="https://www.jenkins.io/blog/authors/kmartens27/">
                        <div className='flex mt-5'>
                            <Image src={manlong} alt='' className='w-[20px] h-[20px] rounded-[50%]' />
                            <p className='text-sm font-medium text-blue-500 ml-[5px] hover:underline'>Kevin Martens</p>
                            <p className='text-sm font-medium text-slate-500 ml-[20px]'>February 28, 2024</p>
                        </div>
                    </Link>
                </div>

                {/* image card 2 */}
                <div className='w-full lg:w-[300px] mb-8 lg:mb-0'>
                    <Link href="https://www.jenkins.io/blog/2024/02/23/gsoc2024-announcement/">
                        <div>
                            <Image src={summercode} alt='' className='h-[180px] lg:h-[200px] w-full rounded-[10px] relative z-0 transition-all duration-300 hover:scale-110' />
                            <p className='text-lg font-semibold pl-[10px] mt-5 hover:underline'>Google Summer of Code 2024… Here We Come!</p>
                            <p className='text-sm pl-[10px] mt-2'>We are thrilled to announce that Jenkins has been accepted to Google Summer of Code 2024! This will be Jenkins' eighth year as a mentoring.</p>
                        </div>
                    </Link>
                    <Link href="https://www.jenkins.io/blog/authors/alyssat/">
                        <div className='flex mt-8'>
                            <Image src={girlimg} alt='' className='w-[20px] h-[20px] rounded-[50%]' />
                            <p className='text-sm font-medium text-blue-500 ml-[5px] hover:underline'>Alyssa Tong</p>
                            <p className='text-sm font-medium text-slate-500 ml-[20px]'>February 23, 2024</p>
                        </div>
                    </Link>
                </div>

                {/* image card 3 */}
                <div className='w-full lg:w-[300px]'>
                    <Link href="https://www.jenkins.io/blog/2024/01/29/nominate-someone-2024-jenkins-contributor-awards/">
                        <div>
                            <Image src={communityaward} alt='' className='h-[180px] lg:h-[200px] w-full rounded-[10px] relative z-0 transition-all duration-300 hover:scale-110' />
                            <p className='text-lg font-semibold pl-[10px] mt-5 hover:underline'>Nominate Someone – 2024 Jenkins Contributor Awards</p>
                            <p className='text-sm pl-[10px] mt-2'>Jenkins Contributor Awards for 2024 are being run by the Continuous Delivery Foundation (CDF) along with many other CDF Community Awards.</p>
                        </div>
                    </Link>
                    <Link href="https://www.jenkins.io/blog/authors/alyssat/">
                        <div className='flex mt-8'>
                            <Image src={girlimg} alt='' className='w-[20px] h-[20px] rounded-[50%]' />
                            <p className='text-sm font-medium text-blue-500 ml-[5px] hover:underline'>Alyssa Tong</p>
                            <p className='text-sm font-medium text-slate-500 ml-[20px]'>January 29, 2024</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* image card 4 */}
            <div className='flex flex-col lg:flex-row justify-evenly mx-[10%] items-center mb-8 lg:mb-0'>
                <div className='w-full lg:w-[300px] mb-8 lg:mb-0'>
                    <Link href="https://www.jenkins.io/blog/2024/01/25/sonar-vulnerability-report/">
                        <div>
                            <Image src={sonar} alt='' className='h-[180px] lg:h-[200px] w-full rounded-[10px] relative z-0 transition-all duration-300 hover:scale-110' />
                            <p className='text-lg font-semibold pl-[10px] mt-5 hover:underline'>Collaboration is Key - Making the Open-Source Community Safer for Developers</p>
                            <p className='text-sm pl-[10px] mt-2'>Sonar is a code quality and security tool that helps developers write Clean Code. Sonar analyzes code for issues that lead to unreliable, unmaintainable,</p>
                        </div>
                    </Link>
                    <Link href="https://www.jenkins.io/blog/authors/yaniv-git/">
                        <div className='flex mt-6 items-center'>
                            <Image src={yaniv} alt='' className='w-[20px] h-[20px] rounded-[50%]' />
                            <p className='text-sm font-medium text-blue-500 ml-[5px] hover:underline'>Yaniv Nizry</p>
                            <p className='text-sm font-medium text-slate-500 ml-[20px]'>January 25, 2024</p>
                        </div>
                    </Link>
                </div>

                {/* image card 5 */}
                <div className='w-full lg:w-[300px] mb-8 lg:mb-0 mt-5'>
                    <Link href="https://www.jenkins.io/blog/2024/01/25/jenkins-2023-recap/">
                        <div>
                            <Image src={recap2023} alt='' className='h-[180px] lg:h-[200px] w-full rounded-[10px] relative z-0 transition-all duration-300 hover:scale-110 mt-6' />
                            <p className='text-lg font-semibold pl-[10px] mt-5 hover:underline'>Jenkins 2023 Recap</p>
                            <p className='text-sm pl-[10px] mt-2'>The Jenkins Security team has multiple missions, with the most visible to users being the publication of advisories. In 2023, the team published 17 advisories: 4 included In terms of reporting trends,
                                we have seen an increase in people reporting CVEs originating </p>
                        </div>
                    </Link>
                    <main className='flex mt-10'>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px] rounded-[50%] hover:shadow-lg"
                                    data-social="Damien"
                                    aria-label="Damien"
                                    href="https://www.jenkins.io/blog/authors/dduportal/">
                                    <Image src={Damien} alt="" className="w-[20px] h-[20px] rounded-[50%] p-0 m-0 relative z-0 transition-all duration-600 hover:scale-125" />
                                    <span className="overlay">DamienDUPORTAL</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px] rounded-[50%] hover:shadow-lg "
                                    data-social="Mark"
                                    aria-label="Mark"
                                    href="https://www.jenkins.io/blog/authors/markewaite/">
                                    <Image src={Mark} alt="Spotify Logo" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">MarkWaite</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px]  rounded-[50%] hover:shadow-lg"
                                    data-social="bruno"
                                    aria-label="bruno"
                                    href="https://www.jenkins.io/blog/authors/gounthar/"
                                >
                                    <Image src={bruno} alt="Spotify Logo" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">BrunoVerachten</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px] rounded-[50%] hover:shadow-lg"
                                    data-social="Wadeck"
                                    aria-label="Wadeck"
                                    href="https://www.jenkins.io/blog/authors/wadeck/"
                                >
                                    <Image src={Wadeck} alt="Spotify Logo" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">WadeckFollonier</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px]  rounded-[50%] hover:shadow-lg"
                                    data-social="manlong"
                                    aria-label="manlong"
                                    href="https://www.jenkins.io/blog/authors/kmartens27/">
                                    <Image src={manlong} alt="" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">KevinMartens</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[30px] h-[30px] rounded-[50%] hover:shadow-lg relative   z-0 transition-all duration-600 hover:scale-125"
                                    data-social="girlimg"
                                    aria-label="girlimg"
                                    href="https://www.jenkins.io/blog/authors/alyssat/">
                                    <Image src={girlimg} alt="" class="w-[20px] h-[20px] rounded-[50%]" />
                                    <span class="overlay">AlyssaTong</span>
                                </Link>
                            </li>
                        </ul>
                        <p className='text-[14px] font-[500] text-slate-500 ml-[20px]'>February 25, 2024</p>
                    </main>
                </div>

                {/* image card 6 */}
                <div className='w-full lg:w-[300px] mb-8 lg:mb-0'>
                    <Image src={constributor} alt='' className='h-[180px] w-[320px] rounded-[10px] relative z-0  transition-all duration-300 hover:scale-110' />
                    <p className='text-[20px] font-[600] pl-[10px] mt-10  hover:underline'>2024 Jenkins Contributor Summit - Update </p>
                    <p className='text-[13px] pl-[10px] mt-[10px]'>The Jenkins Contributor Summit, being held in Brussels on February 2nd, is now quickly approaching. We are looking forward to meeting
                    If you plan to join us and didn’t let us know yet, don’t forget to register by dropping us a note. </p>
                    <div className='flex mt-5'>
                        <Link href="https://www.jenkins.io/blog/authors/jmmeessen/" className='flex items-center'  >
                            <Image src={jeanmarc} alt='' className='w-[20px] h-[20px] rounded-[50%]' />
                            <p className='text-[13px] font-[500] text-blue-500 ml-[5px] hover:underline'>Jean-Marc Meessen</p>
                        </Link>
                        <p className='text-[14px] font-[500] text-slate-500 ml-[20px]'>January 17, 2024</p>
                    </div>

                </div>
            </div >
            {/* image card 7 */}

            <div className='flex flex-col lg:flex-row justify-evenly mx-[10%] items-center mb-8 lg:mb-0  md:flex-row' >
                <div className='w-full lg:w-[300px] mb-8 lg:mb-0 mt-5   '>
                    <Image src={centred} alt='' className='h-[160px] w-[320px] rounded-[10px] relative z-0  transition-all duration-300 hover:scale-110' />
                    <p className='text-[20px] font-[600] pl-[10px] mt-5  hover:underline'>Jenkins November 2023 Newsletter </p>
                    <p className='text-[13px] pl-[10px] mt-[10px]'>A Jenkins Contributor Summit will be held in Brussels, Belgium on Friday, February 2, 2024. We’ll gather for a day of presentations, planning, and working on the future of Jenkins.
                        Immediately after the Contributor Summit, FOSDEM 2024  </p>


                    <main className='flex mt-12'>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-centerv w-[20px] rounded-[50%] hover:shadow-lg m-0 p-0 "
                                    data-social="Damien"
                                    aria-label="Damien"
                                    href="https://www.jenkins.io/blog/authors/dduportal/">
                                    <Image src={Damien} alt="" class="w-[20px] h-[20px] rounded-[50%] p-0 m-0 relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">Damien{''}DUPORTAL</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px] rounded-[50%] hover:shadow-lg "
                                    data-social="Mark"
                                    aria-label="Mark"
                                    href="https://www.jenkins.io/blog/authors/markewaite/">
                                    <Image src={Mark} alt="Spotify Logo" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">MarkWaite</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px]  rounded-[50%] hover:shadow-lg"
                                    data-social="bruno"
                                    aria-label="bruno"
                                    href="https://www.jenkins.io/blog/authors/gounthar/"
                                >
                                    <Image src={bruno} alt="Spotify Logo" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">BrunoVerachten</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[20px]  rounded-[50%] hover:shadow-lg"
                                    data-social="manlong"
                                    aria-label="manlong"
                                    href="https://www.jenkins.io/blog/authors/kmartens27/">
                                    <Image src={manlong} alt="" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">KevinMartens</span>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link
                                    className="link flex justify-center items-center w-[30px] h-[30px] rounded-[50%] hover:shadow-lg "
                                    data-social="girlimg"
                                    aria-label="girlimg"
                                    href="https://www.jenkins.io/blog/authors/alyssat/">
                                    <Image src={girlimg} alt="" class="w-[20px] h-[20px] rounded-[50%] relative   z-0 transition-all duration-600 hover:scale-125" />
                                    <span class="overlay">AlyssaTong</span>
                                </Link>
                            </li>
                        </ul>
                        <p className='text-[14px] font-[500] text-slate-500 ml-[20px]'>February 25, 2024</p>
                    </main>
                </div >

                {/* image card 8 */}
                < div className='w-[300px]'>
                    <Image src={eltric} alt='' className='h-[160px] w-[320px] rounded-[10px] relative  z-0  transition-all duration-300 hover:scale-110' />
                    <p className='text-[18px] font-[600] pl-[10px] mt-8  hover:underline' >Welcome Basil Crow - new Jenkins Governance Board member </p>
                    <p className='text-[13px] pl-[10px] mt-[10px]'>We would like to announce changes in the Jenkins Governance Board. There has been no election this year,
                        because there was only one candidate per seat. Please welcome Basil Crow! At the same time,</p>
                    <div className='flex mt-10'>
                        <Link href="https://www.jenkins.io/blog/authors/notmyfault/" className='flex items-center'>
                            <Image src={alexender} alt='' className='w-[25px] h-[25px] rounded-[50%]' />
                            <p className='text-[13px] font-[500] text-blue-500 ml-[10px] hover:underline'>Alexander Brandes</p>
                        </Link>
                        <p className='text-[14px] font-[500] text-slate-500 ml-[20px]'>January 17, 2024</p>
                    </div>

                </div >
                {/* image card 9 */}

                < div className='w-[300px]'>
                    <Image src={github} alt='' className='h-[160px] w-[320px] rounded-[10px] relative  z-0 transition-all duration-300 hover:scale-110' />
                    <p className='text-[20px] font-[600] pl-[10px] mt-9  hover:underline' >2024 Jenkins Contributor Summit - Update </p>
                    <p className='text-[13px] pl-[10px] mt-[20px]'>You have a GitHub repo and a Jenkins server. The Jenkins server has jobs for running unit tests, computing code coverages, and executing static .
                    </p>
                    <div className='flex mt-14'>
                        <Link href="https://www.jenkins.io/blog/authors/tslmy/" className='flex'>
                            <Image src={mingyang} alt='' className='w-[25px] h-[25px] rounded-[50%] ' />
                            <p className='text-[13px] font-[500] text-blue-500 ml-[10px] hover:underline'>Mingyang Li</p>
                        </Link>
                        <p className='text-[14px] font-[500] text-slate-500 ml-[20px]'>January 17, 2024</p>
                    </div>
                </div>
            </div >
        </>
    )
}
