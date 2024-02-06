'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { RefObject, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { GiHamburgerMenu } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);
const Nav = ({
  programRef,
  aboutRef,
  heroBelowRef,
  contactRef,
}: {
  programRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  heroBelowRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}) => {
  const navRef = useRef(null);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    gsap.to(navRef.current, {
      duration: 1,
      backgroundColor: '#6D8954',
      scrollTrigger: {
        trigger: heroBelowRef.current,
        start: 'top 10%',
        scrub: 0.5,
      },
    });
  });

  return (
    <nav className='bg-[#f6edd9] w-full fixed z-50' ref={navRef}>
      <div className='md:container flex py-2 justify-between items-center'>
        <Link href={'/'}>
          <Image src={logo} alt='logo' width={220} height={57} priority />
        </Link>
        {/* <div className='md:hidden mr-8 cursor-pointer hover:text-my-primary'>
          <GiHamburgerMenu size={32} />
        </div> */}
        <ol className='hidden md:flex flex-col  md:flex-row justify-center items-center'>
          <li
            onClick={() => {
              scrollToSection(programRef);
            }}
            className='px-5 py-3 cursor-pointer rounded-md transition-colors duration-500 ease-in-out mx-3 hover:bg-[#F6FBF2]'
          >
            프로그램
          </li>
          <li
            onClick={() => {
              scrollToSection(aboutRef);
            }}
            className='px-5 py-3 cursor-pointer rounded-md transition-colors duration-500 ease-in-out mx-3 hover:bg-[#F6FBF2]'
          >
            about
          </li>
          <li
            onClick={() => {
              scrollToSection(contactRef);
            }}
            className='px-5 py-3 cursor-pointer bg-[#65A037] shadow-lg rounded-full transition-colors duration-500 ease-in-out mx-3 hover:bg-[#F6FBF2] hover:shadow-sm'
          >
            신청하기
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Nav;
