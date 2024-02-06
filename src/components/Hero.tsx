import { useRef } from 'react';
import Image from 'next/image';
import title from '@/assets/herotitle.png';
import TurnUp from './animations/TurnUp';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const introduceRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className='md:container flex flex-col md:flex-row justify-evenly items-center'
      ref={containerRef}
    >
      {/* <h1 className='text-7xl'>나의 생활습관연구소</h1> */}
      <div ref={introduceRef}>
        <p className='h-full flex flex-col justify-center items-start font-black text-5xl text-my-fourth'>
          <TurnUp
            className='text-3xl sm:text-7xl  md:leading-snug'
            triggerRef={containerRef}
          >
            조직역량강화
            <br />
            긍정적기업문화
          </TurnUp>
          {/* <TurnUp className='py-7' triggerRef={containerRef}>
            영양 운동 수면 중독관리 스트레스관리 긍정적관계
          </TurnUp> */}
          <TurnUp
            className='text-2xl sm:text-5xl pt-7 md:leading-snug'
            triggerRef={containerRef}
          >
            6가지 카테고리의 <br />
            과학적 관리
          </TurnUp>
        </p>
      </div>
      <div ref={logoRef} className='i_title '>
        <TurnUp triggerRef={containerRef}>
          <Image
            src={title}
            sizes='(mix-width: 768px) 33vw, 100vw'
            alt='생활습관연구소'
            priority
          />
        </TurnUp>
      </div>
    </section>
  );
};

export default Hero;
