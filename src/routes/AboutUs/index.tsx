import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { BaseButton } from '../../components/Button/index';
import {Flower} from './Flower'
import {OurTeam} from './OurTeam';
import {Buttons} from './Buttons'
import { LeftArrow1, LeftArrow2, LeftArrow3, LeftArrow4 } from './Icons';

export function AboutUs() {
  const { screenType } = useMediaQuery();
  return (
    <div className={`flex flex-col 

    `}>
      <div className={`w-[90%] flex mx-auto mt-16 gap-8 
       ${screenType !== ScreenTypes.TABLET ? "" : 'gap-5 mx-auto max-w-[50%] justify-center'}

      `}>
        <div className='block'>
          <img className={`
        
          `} src='./assets/ABOUT.svg' />
        </div>
        <div className='block '>
          <img className={`
          
          `} src='./assets/US.svg' />
        </div>
        <div className={`relative top-5 left-14
        ${screenType !== ScreenTypes.TABLET ? "" : 'hidden'}
        `}>
          <img src='./assets/Line.svg' />
        </div>
      </div>

      <div className={`flex w-[90%] mx-auto mt-[5%] flex-col shrink
    
      `}>
        <p  className={`w-[50%] text-[1.1rem] shadow-text-shadow leading-[146%] font-500% text-[#000] text-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
          ${screenType !== ScreenTypes.TABLET ? "" : 'w-[70%] text-center justify-center font-400 mx-auto text-[0.9rem] mt-2'}
          
        `
      
        }>
      CoCode is a budding learner-centric tech-based community that aims to nurture and support those building a career in tech.
        </p>
     </div>
     
      <div className='flex w-[90%] mt-[5%] mx-auto' >
          <Buttons />
     
      </div>

      <div className={`flex justify-end relative z-[-1]
      ${
        screenType === ScreenTypes.TABLET ? '' : 'bottom-[45vh] z-[-1]'
      }
      `}>
        <Flower />
      </div>
      <div className={`flex mx-auto mt-[-15%]  justify-center items-center w-[50%] text-center text-[#000] shrink-0 font-[Lato] font-[300] leading-[146%]
       ${screenType === ScreenTypes.TABLET ? ' mt-[-32%] z-999' : ' '}

      `}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
      </div>

      <div className='flex mx-auto justify-center mt-[20%]'>
              <img className={`w-[70%]
            
              `}
              src='./assets/team.svg'></img>

      </div>


    <p className='flex mx-auto mt-[4%] w-[25%] z-99 justify-center items-center w-[50%] text-center text-[#000] shrink-0 font-[28px] font-[Lato] font-[300] leading-[146%]'>  This community has been built by the following amazing people here: </p>
    <img className='relative w-[17vw] mx-auto bottom-[8rem] left-[11rem]' src='./assets/Star.png' />
   
    <img className='relative w-[17vw] z-[-1] right-[2rem] top-[20rem]' src='./assets/Star.png' />

             
             

   
<div className='flex w-[90%] mx-auto'>
    
   
     <OurTeam />
  </div>            
   </div>
    
   
  );
}
