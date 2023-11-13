import { useMediaQuery } from '../../hooks';
import { ScreenTypes } from '../../types';
import { DiscordButton } from '../Button';

export function Intro() {
  const { screenType } = useMediaQuery();
  return (
    <div className='flex flex-col ml:flex-row gap-10 items-center justify-evenly my-32 z-[5] mx-4 ml:mx-24 shadow-md ml:h-[450px] bg-white py-[clamp(90px,9.375vw,120px)] px-[clamp(45px,4.688vw,60px)] ml:gap-6'>
      <div className='text-md font-poppins text-center ml:text-left'>
        <div className='flex items-center'>
          <p className='ml:w-[50%]'>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, which dont look even slightly believable
          </p>
          {screenType === ScreenTypes.MID_LAPTOP || screenType === ScreenTypes.LARGE_LAPTOP ? (
            <DiscordButton />
          ) : null}
        </div>
        <div className='pb-4 w-fit border-black border-b-2 flex items-center justify-center ml:justify-start mt-[32px] mx-auto ml:mx-0 ml:mr-auto ml:mt-[54px]'>
          <div className='flex items-center '>
            <span className=' relative inline-block w-[40px] aspect-square rounded-full outline outline-1'></span>
            <span className=' relative  left-[-15px] bg-white z-10 inline-block w-[40px] aspect-square rounded-full outline outline-1'></span>
            <span className=' relative  left-[-30px] inline-block w-[40px] z-20 bg-white aspect-square rounded-full outline outline-1'></span>
          </div>
          <p>+124 others</p>
        </div>
      </div>
      {screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET ? (
        <DiscordButton />
      ) : null}
    </div>
  );
}
