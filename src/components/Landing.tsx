'use client';

import { RefObject, useRef } from 'react';
import Nav from './Nav';
import Hero from './Hero';
import TurnUp from './animations/TurnUp';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';
import program1 from '@/assets/program1.png';
import program2 from '@/assets/program2.png';
import program3 from '@/assets/program3.jpg';

export default function Landing() {
  const heroBelowRef = useRef(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Nav
        programRef={programRef}
        aboutRef={aboutRef}
        heroBelowRef={heroBelowRef}
        contactRef={contactRef}
      />
      <div className='pt-[73px] w-full h-[70vh] bg-my-primary flex justify-center items-center'>
        <Hero />
      </div>
      <section
        className='w-full h-[30vh] grid place-items-center bg-gtob-gradient'
        ref={heroBelowRef}
      >
        <button
          className='bg-[#65A037] text-2xl rounded-full py-5 px-10 shadow-2xl relative -top-2 hover:top-1 hover:shadow-sm duration-500 ease-in-out cursor-pointer'
          onClick={() => {
            scrollToSection(contactRef);
          }}
        >
          지금 신청하기
        </button>
      </section>
      <section className='bg-[#F6EDD9] h-[100vh] ' ref={aboutRef}>
        <div className='md:container w-full h-full'>
          <p className='w-full h-full flex flex-col justify-center items-center'>
            <TurnUp className='bg-my-primary w-4/5 h-1/5 my-5 text-2xl relative flex justify-center items-center text-center'>
              <FaQuoteLeft className='absolute left-0 top-0' />
              <span>
                기업 환경과 조직의 역량을 강화하며, 더 나아가 개인의 웰빙과
                행복을 증진시키기 위해 노력합니다. <br />
                이를 위해, 생활습관의학에 기반한 교육 서비스를 제공하고
                있습니다.
              </span>
              <FaQuoteRight className='absolute right-0 bottom-1' />
            </TurnUp>
          </p>
        </div>
      </section>
      <section className='bg-[#F6EDD9] h-[100vh]' ref={programRef}>
        <div className='md:container h-full flex flex-col justify-center items-center'>
          <div className='mt-60'>교육서비스 안내</div>
          <TurnUp className='bg-[##FFF0CA] w-4/5 h-1/3 my-5 text-2xl text-center flex'>
            <Image src={program1} alt='programimage' width={300} height={300} />
            <span>10년 젊어지는 생활습관의학 실천법</span>
          </TurnUp>
          <TurnUp className='bg-[##FFF0CA] w-4/5 h-1/3 my-5 text-2xl text-center flex'>
            <Image src={program2} alt='programimage' width={300} height={300} />
            <span>직무스트레스해소를 위한 감정아로마테라피</span>
          </TurnUp>
          <TurnUp className='bg-[##FFF0CA] w-4/5 h-1/3 my-5 text-2xl text-center flex'>
            <Image src={program3} alt='programimage' width={300} height={300} />
            <span>거북목 방지를 위한 통증예방클리닉</span>
          </TurnUp>
        </div>
      </section>
      <section className='bg-[#F6EDD9] h-[100vh] '>
        <div className='md:container w-full h-full flex flex-col justify-center items-center'>
          <TurnUp className='bg-my-primary w-4/5 h-1/5 my-5 text-2xl relative flex justify-center items-center text-center'>
            <FaQuoteLeft className='absolute left-0 top-0' />
            <span>
              근거기반(Evidence Base Medicine)생활습관의학 교육 서비스는
              스트레스 회복 탄력성, 소진예방, 회복적수면, 신체활동, 건강식,
              소통적팀웍의 다양한 교육 컨텐츠로 구성되어 있습니다.
            </span>
            <FaQuoteRight className='absolute right-0 bottom-1' />
          </TurnUp>
          <TurnUp className='bg-my-primary w-4/5 h-1/5 my-5 text-2xl relative flex justify-center items-center text-center'>
            <FaQuoteLeft className='absolute left-0 top-0' />
            <span>
              기업 및 조직에서의 생활습관의학은 선택이 아닌 필수 입니다.
              생활습관 개선은 긍정적 기업문화와 나아가 개인의 삶의질 향상 및
              조직의 긍정적인 효과를 가져 옵니다.” 이창현 소장
            </span>
            <FaQuoteRight className='absolute right-0 bottom-1' />
          </TurnUp>
        </div>
      </section>
      <section className='h-[100vh] bg-btog-gradient' ref={contactRef}>
        <div className='md:container'>TEL</div>
      </section>
    </main>
  );
}
