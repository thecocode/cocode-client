

import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { BaseButton } from '../../components/Button/index';
import { LeftArrow1, LeftArrow2, LeftArrow3, LeftArrow4 } from './Icons';


export function Buttons () {
    const { screenType } = useMediaQuery();


    const socials = [
        {
            icon: LeftArrow1,
            textColor: '#2129EF' ,
            name: 'Join Discord',
            link: 'https://twitter.com/thecocode'
        },
        {
            icon: LeftArrow2,
            textColor: '#05669C' ,
            name: 'Join Twitter',
            link: 'https://twitter.com/thecocode'

        },
        {
            icon: LeftArrow3,
            textColor: '#886A3D' ,
            name: 'Join GitHub',
            link: 'https://twitter.com/thecocode'
        },
        {
            icon: LeftArrow4,
            textColor: '#000' ,
            name: 'Join Insta',
            link: 'https://twitter.com/thecocode'
        },
    ]
    return(
      <div className={`w-[50%] grid grid-cols-2 gap-0
      ${screenType !== ScreenTypes.TABLET ? "" : 'mx-auto w-[80%] gap-x-5 gap-y-5'}
      ${screenType !== ScreenTypes.MID_LAPTOP ? "" : 'w-[60%]'}
      ${screenType !== ScreenTypes.LARGE_LAPTOP ? "" : 'w-[40%] g-x-5 g-y-3'}
      `}>
   
       
          <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow1}
                extendedClassNames={`mt-[1.3vw] max-w-[16rem] gap-3 h-[3.4rem] border-blue-border text-[#2129EF]  border-[1px] border-[#3897B5]`}
               
                
                />

                <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow2}
                extendedClassNames={`mt-[1.3vw] max-w-[16rem] gap-3 h-[3.4rem] border-blue-border text-[#05669C]  border-[1px]border-[#3897B5] `}
                />
         
  
       
          <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow3}
                extendedClassNames={`mt-[1.3vw] max-w-[16rem] gap-3 h-[3.4rem] border-blue-border text-[#886A3D]  border-[1px] border-[#3897B5]`}
                />
                <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow4}
                extendedClassNames={`mt-[1.3vw] max-w-[16rem] gap-3 h-[3.4rem]  text-[#000]  border-[1px] border-[#3897B5]`}
                />
          
  
      </div>
    )
}