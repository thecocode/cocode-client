import { ExploreEvents, ExploreProjects, Hero, Intro, Testimonials } from '../../components';

export function Home() {
  return (
    <div>
      <Hero />
      <div
        className={` absolute w-[70vw] ml:w-[50vw] top-[-25vw] left-[-25vw] aspect-square  -z-10 rounded-full`}
      ></div>
      <div className='absolute top-[25vh] right-[25vw]'>
        <img src='./assets/hero-svg-1.svg' alt='' />
      </div>
      <div className='absolute top-[55vh] left-[15vw]'>
        <img src='./assets/hero-svg-2.svg' alt='' />
      </div>
      <div className='absolute z-[-10] top-[90vh]'>
        <img className=' w-[60%] ml:w-[80%]' src='./assets/hero-svg-3.svg' alt='' />
      </div>
      <div className='absolute  w-[25vw] rounded-tl-[50vw] rounded-bl-[50vw] aspect-[1/2] top-[95vh] right-[0] -z-10 rounded bg-[#E5CBF9]'></div>
      <Intro />
      <ExploreEvents />
      <ExploreProjects />
      <Testimonials />
    </div>
  );
}
