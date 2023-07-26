import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { BaseButton } from '../../components/Button/index';
import { Flower } from '../../components/AboutUs/Flower';
import { OurTeam } from '../../components/AboutUs/OurTeam';
import { Buttons } from '../../components/AboutUs/Buttons';
import { LeftArrow1, LeftArrow2, LeftArrow3, LeftArrow4 } from '../../components/AboutUs/Icons';

export function AboutUs() {
  const { screenType } = useMediaQuery();
  const onSmallScreen = screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET;
  return (
    <div
      className={`flex flex-col 

    `}
    >
      <div
        className={`w-[90%] flex mx-auto mt-16 gap-8 
       ${!onSmallScreen ? '' : 'gap-5 mx-auto max-w-[50%] justify-center'}

      `}
      >
        <div className='block'>
          <img
            className={`
        
          `}
            src='./assets/ABOUT.svg'
          />
        </div>
        <div className='block '>
          <img
            className={`
          
          `}
            src='./assets/US.svg'
          />
        </div>
        <div
          className={`relative top-5 left-14
        ${!onSmallScreen ? '' : 'hidden'}
        `}
        >
          <img src='./assets/Line.svg' />
        </div>
      </div>

      <div className='w-[90%] mx-auto'>
        <p
          className={`w-[70%] text-clamp(16px,1.8vw,28px) font-lato text-lg font-medium text-[#000] shrink mt-[clamp(42px,4.6vh,70px)] leading-[146%]
          ${!onSmallScreen ? 'text-shadow-lg ' : 'w-[70%] text-center font-normal mx-auto text-shadow-default'}
          
        `}
        >
          CoCode is a budding learner-centric tech-based community that aims to nurture and support
          those building a career in tech.
        </p>
      </div>

      <div className='flex w-[90%] mt-[5%] mx-auto'>
        <Buttons />
      </div>

      <div
        className={`flex justify-end relative z-[-1]
      ${onSmallScreen ? '' : 'bottom-[45vh] z-[-1]'}
      `}
      >
        <Flower />
      </div>

      <div
        className={`flex mx-auto mt-[-15%] font-light text-lg  text-center text-[#000] shrink-0 font-lato 
       ${onSmallScreen ? 'z-999' : ' '}

      `}
      >
        Alone, we can do so little; together, we can do so much
      </div>

      {/* Team & text above */}
      <div className='flex mx-auto justify-center mt-[20%]'>
        <img className={`w-[70%]`} src='./assets/team.svg' />
      </div>

      <p className='mx-auto mt-[4%] w-[25%] z-99 w-[50%] text-center text-[#000]  font-lg font-poppins font-light'>
        {' '}
        This community has been built by the following amazing people here:{' '}
      </p>
      <img
        className='relative w-[17vw] mx-auto bottom-[12rem] left-[10rem]'
        src='./assets/Star.png'
      />

      <img className='relative w-[17vw] z-[-1] right-[2rem] top-[12rem]' src='./assets/Star.png' />

      <div className='flex w-[100vw] mb-[10vw]'>
        <OurTeam />
      </div>
    </div>
  );
}
