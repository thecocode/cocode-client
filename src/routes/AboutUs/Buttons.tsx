

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
      <div className={`w-[50%] flex flex-col gap-5
      ${screenType === ScreenTypes.TABLET ? '' : ''}
      `}>
   
          <div className='flex'>
          <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow1}
                extendedClassNames={`mt-[1.3vw] w-[243px] h-[60px] text-[#2129EF]  border-[1px] border-blue-bor 
                ${
                  screenType === ScreenTypes.TABLET ? 'text-[13px] w-[135px]  gap-1 h-[52px]' : null
                }`}
                
                />

                <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow1}
                extendedClassNames={`mt-[1.3vw] w-[243px] h-[60px] text-[#2129EF]  border-[1px] border-blue-bor 
                ${
                  screenType === ScreenTypes.TABLET ? 'text-[13px] w-[135px] mx-auto gap-1 h-[52px]' : null
                }`}
                />
          </div>
  
          <div className='flex'>
          <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow1}
                extendedClassNames={`mt-[1.3vw] w-[243px] h-[60px] text-[#2129EF]  border-[1px] border-blue-bor 
                ${
                  screenType === ScreenTypes.TABLET ? 'text-[13px] w-[135px] gap-1 h-[52px]' : null
                }`}
                />
                <BaseButton
                  title= "Join Discrd"
            
                LeftIcon={LeftArrow1}
                extendedClassNames={`mt-[1.3vw] w-[243px] h-[60px] text-[#2129EF]  border-[1px] border-blue-bor 
                ${
                  screenType === ScreenTypes.TABLET ? 'text-[13px] w-[135px]  gap-1 h-[52px]' : null
                }`}
                />
          </div>
  
      </div>
    )
}