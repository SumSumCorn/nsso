import Image from 'next/image';
import hero from '@/assets/hero.png';

export default function Home() {
  return (
    <main>
      <div className='relative w-screen h-[70vh]'>
        <Image src={hero} alt='대문' fill style={{ objectFit: 'cover' }} />
      </div>
      안녕하세요
    </main>
  );
}
