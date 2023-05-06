import Hero from '../../components/Hero';

export function Home() {
  return (
    <h1 className=''>
      <Hero />
      <div
        className={` absolute w-[70vw] ml:w-[50vw] top-[-25vw] left-[-25vw] aspect-square  -z-10 bg-[#FFEFC5] rounded-full`}
      ></div>
      <div className='absolute top-[25vh] right-[25vw]'>
        <img src='./assets/hero-svg-1.svg' alt = '' />
      </div>
      <div className='absolute top-[55vh] left-[15vw]'>
        <img src='./assets/hero-svg-2.svg' alt="" />
      </div>
      <div className='absolute  top-[90vh]'>
        <img className=' w-[60%] ml:w-[80%]' src='./assets/hero-svg-3.svg' alt="" />
      </div>
      <div className='absolute w-[50vw] top-[110vh] right-[-25vw] aspect-square rounded-full bg-[#E5CBF9]'></div>
    </h1>
  );
}
