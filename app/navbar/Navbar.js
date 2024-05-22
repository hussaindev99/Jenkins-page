'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@/public/images/search-icon.svg';
import navbaricon from "@/public/images/navbar-icon.png"
export default function Navbar() {
  const [showInput, setShowInput] = useState(null);

  const hiddenInput = () => {
    setShowInput(prevState => !prevState);
  };
  return (
    <div>
      <nav className="bg-gray-800 py-4 h-[70px] items-center w-full">
        <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center ">
          <Link href="/">
            <p className="text-white font-bold text-xl font-[cursive]">Jenkins</p>
          </Link>
          <div class="paste-button">
            <button className='button disabled'>
              cd <span style={{ fontSize: '9px', color: '#9b9d9e' }}>▼</span>
            </button>
            <div class="dropdown-content">
              <a id="top" href="https://cd.foundation/">What is CDF</a>
              <a href="https://jenkins-x.io/">Jenkins X</a>
              <a href="https://tekton.dev/">Tekton</a>
              <a id="bottom" href="https://spinnaker.io/">Spinnaker</a>
            </div>
          </div>
          <div className='hidden md:flex lg:flex'>
            <div className="flex flex-wrap justify-center ">
              <Link href="https://www.jenkins.io/blog/"><p className="text-[#9b9d9e] text-[14px] ml-4  mt-1">Blog</p></Link>
              <Link href="https://stories.jenkins.io/"><p className="text-[#9b9d9e] text-[14px] ml-4 mt-1">Success Stories</p></Link>
              <Link href="https://contributors.jenkins.io/"><p className="text-[#9b9d9e] text-[14px] ml-4 mt-1">Contributor Spotlight</p></Link>
              <div class="paste-button">
                <button className=' text-[#9b9d9e] text-[14px] ml-4'>Documentation <span style={{ fontSize: '10px', color: '#9b9d9e' }}>▼</span></button>
                <div class="dropdown-content">
                  <a id="top" href="https://www.jenkins.io/doc/book/" className='text-[14px] font-[700]'>User Guide</a>
                  <a id="middle" href="https://www.jenkins.io/doc/book/installing/" >-Installing Jenkins</a>
                  <a href="https://www.jenkins.io/doc/book/pipeline/">-Jenkins Pipeline</a>
                  <a href="https://www.jenkins.io/doc/book/managing/">-Managing Jenkins</a>
                  <a href="https://www.jenkins.io/doc/book/security/">-Securing Jenkins</a>
                  <a href="https://www.jenkins.io/doc/book/system-administration/">-System Administration</a>
                  <a href="https://www.jenkins.io/doc/book/troubleshooting/">-Troubleshooting Jenkins </a>
                  <a href="https://www.jenkins.io/doc/book/glossary/">-Terms and Definitions</a>
                  <a href="https://www.jenkins.io/solutions/" className='text-[14px] font-[700]'>Solution Pages</a>
                  <a href="https://www.jenkins.io/doc/tutorials/" className='text-[14px] font-[700]'>Tutorials</a>
                  <a href="https://www.jenkins.io/doc/developer/" className='text-[14px] font-[700]'>Developers Guide</a>
                  <a href="https://www.jenkins.io/participate/meet/" className='text-[14px] font-[700]'>Constributor Guide</a>
                  <a id="bottom" href="https://www.jenkins.io/books/" className='text-[14px] font-[700]'>Books</a>
                </div>
              </div>
              <Link href="https://plugins.jenkins.io/"><p className="text-[#9b9d9e] text-[14px] ml-4 mt-1">Plugins</p></Link>
              <div class="paste-button">
                <button className=' text-[#9b9d9e] text-[14px] ml-4'>Community <span style={{ fontSize: '10px', color: '#9b9d9e' }}>▼</span></button>
                <div class="dropdown-content">
                  <a id="top" href="https://www.jenkins.io/doc/book/" >Overview</a>
                  <a href="https://www.jenkins.io/doc/book/installing/" >Chat</a>
                  <a href="https://www.jenkins.io/doc/book/pipeline/">Meet</a>
                  <a href="https://www.jenkins.io/doc/book/managing/">Event</a>
                  <a href="https://www.jenkins.io/doc/book/security/">Forum</a>
                  <a href="https://www.jenkins.io/doc/book/system-administration/">Issue Tracker</a>
                  <a href="https://www.jenkins.io/doc/book/troubleshooting/">Mailing Lists </a>
                  <a href="https://www.jenkins.io/doc/book/glossary/">Roadmap</a>
                  <a href="https://www.jenkins.io/solutions/" >Account Management</a>
                  <a href="https://www.jenkins.io/doc/tutorials/" className='text-[14px] font-[700]'>Special Interst Groups</a>
                  <a href="https://www.jenkins.io/doc/developer/" >-Advocacy and Outreach</a>
                  <a href="https://www.jenkins.io/participate/meet/" >-Documentation</a>
                  <a href="https://www.jenkins.io/books/" >-Google Summer of Code</a>
                  <a href="https://www.jenkins.io/books/" >-Platform</a>
                  <a id="bottom" href="https://www.jenkins.io/books/" >-User Experience</a>
                </div>
              </div>

              <div class="paste-button">
                <button className=' text-[#9b9d9e] text-[14px] ml-4'>Subprojects <span style={{ fontSize: '10px', color: '#9b9d9e' }}>▼</span></button>
                <div class="dropdown-contents">
                  <a id="top" href="https://www.jenkins.io/projects/" >Overview</a>
                  <a href="https://www.jenkins.io/projects/gsoc/" >Google Summer of Code in Jenkins</a>
                  <a href="https://www.jenkins.io/projects/infrastructure/">Infrastructure</a>
                  <a href="https://www.jenkins.io/projects/jam/">Ci/Cd and Jenkins Area Meetups</a>
                  <a href="https://www.jenkins.io/projects/jcasc/">Jenkins Configuration as Code</a>
                  <a href="https://www.jenkins.io/projects/jenkins-operator/">Jenkins Operator</a>
                  <a href="https://www.jenkins.io/projects/remoting/">Jenkins Remoting</a>
                  <a id="bottom" href="https://www.jenkins.io/sigs/docs/gsod/2020/projects/document-jenkins-on-kubernetes/">Document Jenkins on Kubernets</a>
                </div>
              </div>
              <div class="paste-button">
                <button className=' text-[#9b9d9e] text-[14px] ml-4'>Security <span style={{ fontSize: '10px', color: '#9b9d9e' }}>▼</span></button>
                <div class="dropdown-content">
                  <a id="top" href="https://www.jenkins.io/security/" >Overview</a>
                  <a href="https://www.jenkins.io/security/advisories/" >Security Advisories</a>
                  <a id="bottom" href="https://www.jenkins.io/security/reporting/">Reporting Vulnerabilities</a>
                </div>
              </div>
              <div class="paste-button">
                <button className=' text-[#9b9d9e] text-[14px] ml-4'>About <span style={{ fontSize: '10px', color: '#9b9d9e' }}>▼</span></button>
                <div class="dropdown-content">
                  <a id="top" href="https://www.jenkins.io/security/" >Roadmap</a>
                  <a href="https://www.jenkins.io/security/advisories/" >Press</a>
                  <a id="bottom" href="https://www.jenkins.io/security/reporting/">Awards</a>
                  <a href="https://www.jenkins.io/projects/jam/">Conduct</a>
                  <a id="bottom" href="https://www.jenkins.io/projects/jcasc/">Artwork</a>
                </div>
              </div>
              <Link href="https://www.jenkins.io/download/"><p className="text-[#9b9d9e] text-[14px] ml-4 mt-1">Download</p> </Link>
            </div>
          </div>
          <div className="flex bg-white rounded-[20px] items-center p-1 relative h-auto z-0 transition-all duration-300 hover:scale-110">
            <Image
              src={SearchIcon}
              alt=""
              className="h-5 w-5 ml-2s cursor-pointer"
              onClick={hiddenInput}
            />
            {showInput && (
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Search"
                className="outline-none w-[200px] ml-2 mt-1 md:w-[50px]  sm:justify-center md:justify-center text-[10px]"
              />
            )}
            <button className="bg-[#d6dcdf] text-[#959797] text-[5px] font-[700] ml-2 rounded-md  py-1 w-4 hidden sm:inline-block">CTRL</button>
            <button className="bg-[#d6dcdf] text-[#959797] ml-1 px-1 h-3.5  mr-1 text-[8px] rounded-md hidden sm:inline-block">K</button>
          </div>
          <Image src={navbaricon} className='md:hidden h-8 w-8' />


        </div>
      </nav>
    </div>
  );
}
