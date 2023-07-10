import React from 'react'
import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
export function OurTeam ()  {

  const { screenType } = useMediaQuery();
  return (
    <div className={` mt-[-25%] gap-5 gap-y-16 w-[85%] mx-auto z-999]
    ${screenType !== ScreenTypes.TABLET ? "" : 'grid grid-cols-2 mx-auto'}
      ${screenType !== ScreenTypes.LARGE_LAPTOP ? "" : 'grid grid-cols-3 mx-auto'}
      ${screenType !== ScreenTypes.MID_LAPTOP ? "" : 'grid grid-cols-3 mx-auto'}

 `}> 
         <div className={`max-w-[18.75rem] max-h-[25rem] relative
     ${screenType !== ScreenTypes.TABLET ? "" : ''}
    `}>
       <img className={`w-[100%] h-[75%] cover`} src="./assets/pooja.jpeg" />
       <div>
        <div className={`flex justify-between mt-3`}>
          <p className={`text-[1.75rem] font-Poppins normal font-medium leading-normal `}>Pooja</p>
          <img src="./assets/Vector-6.svg"/>
        </div>
        <div className={`font-Poppins text-[16px] normal text-[#666] leading-normal font-extralight`}>Founder</div>
       </div>
    </div>


   <div className={`max-w-[18.75rem] max-h-[25rem]   relative
        ${screenType !== ScreenTypes.TABLET ? "" : 'top-[0vh]'}
        ${screenType !== ScreenTypes.LARGE_LAPTOP? "" : 'top-[5vh]'}
        ${screenType !== ScreenTypes.MID_LAPTOP ? "" : 'top-[5vh]'}
   `}>
     <img className={`w-[100%] h-[75%] `} src="./assets/prajwal.jpeg" />
     <div>
        <div className={`flex justify-between mt-3`}>
          <p className={`text-[1.75rem] font-Poppins normal font-medium leading-normal `}>Prajwal</p>
          <img src="./assets/Vector-6.svg"/>
        </div>
        <div className={`font-Poppins text-[16px] normal text-[#666] leading-normal font-extralight`}>Product Designer</div>
       </div>
   </div>


   <div className={`max-w-[18.75rem] max-h-[25rem] relative
    ${screenType !== ScreenTypes.TABLET ? "" : 'top-[0vh]'}
    ${screenType !== ScreenTypes.LARGE_LAPTOP ? "" : 'top-[10vh]'}
    ${screenType !== ScreenTypes.MID_LAPTOP ? "" : 'top-[10vh]'}
   `}>
     <img className={`w-[100%] h-[75%] cover`} src="./assets/Harry.jpeg" />
     <div>
        <div className={`flex justify-between mt-3`}>
          <p className={`text-[1.75rem] font-Poppins normal font-medium leading-normal `}>Prashant(Harry)</p>
          <img src="./assets/Vector-6.svg"/>
        </div>
        <div className={`font-Poppins text-[16px] normal text-[#666] leading-normal font-extralight`}>Developer</div>
       </div>
   </div>


   <div className={`max-w-[18.75rem] max-h-[25rem] relative
    ${screenType !== ScreenTypes.TABLET ? "" : ''}
   `}>
     <img className={`w-[100%] h-[75%]`} src="./assets/Om.jpeg" />
     <div>
        <div className={`flex justify-between mt-3`}>
          <p className={`text-[1.75rem] font-Poppins normal font-medium leading-normal `}>Om</p>
          <img src="./assets/Vector-6.svg"/>
        </div>
        <div className={`font-Poppins text-[16px] normal text-[#666] leading-normal font-extralight`}>Developer</div>
       </div>
   </div>


   <div className={`max-w-[18.75rem] max-h-[25rem] relative 
    ${screenType !== ScreenTypes.TABLET ? "" : 'top-[0vh]'}
    ${screenType !== ScreenTypes.LARGE_LAPTOP ? "" : 'top-[10vh]'}
    ${screenType !== ScreenTypes.MID_LAPTOP ? "" : 'top-[10vh]'}
   `}>
     <img className={`w-[100%] h-[75%] cover`} src="./assets/priti.jpeg" />
     <div>
        <div className={`flex justify-between mt-3`}>
          <p className={`text-[1.75rem] font-Poppins normal font-medium leading-normal `}>Priti</p>
          <img src="./assets/Vector-6.svg"/>
        </div>
        <div className={`font-Poppins text-[16px] normal text-[#666] leading-normal font-extralight`}>Developer</div>
       </div>
   </div>
   
   <div className={`max-w-[18.75rem] max-h-[25rem] relative
    ${screenType !== ScreenTypes.TABLET ? "" : ' top-[0vh]'}
    ${screenType !== ScreenTypes.LARGE_LAPTOP ? "" : ' top-[20vh]'}
    ${screenType !== ScreenTypes.MID_LAPTOP ? "" : ' top-[20vh]'}
   `}>
    <img className={`w-[100%] h-[75%] cover `} src="./assets/pic.png" />
    <div>
        <div className={`flex justify-between  mt-3`}>
          <p className={`text-[1.75rem] font-Poppins normal font-medium leading-normal `}>Person Name</p>
          <img src="./assets/Vector-6.svg"/>
        </div>
        <div className={`font-Poppins text-[16px] normal text-[#666] leading-normal font-extralight`}>Web Developer</div>
       </div>
   </div>
    </div>
  )
}

