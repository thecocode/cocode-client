

import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { BaseButton } from '../../components/Button/index';
import { LeftArrow1, LeftArrow2, LeftArrow3, LeftArrow4 } from './Icons';


export function Buttons () {
    const { screenType } = useMediaQuery();


    const socials = [
        {
            icon: LeftArrow1,
            socialColor: '#2129EF' ,
            name: 'Join Discord'
        },
        {
            icon: LeftArrow2,
            socialColor: '#05669C' ,
            name: 'Join Twitter'
        },
        {
            icon: LeftArrow3,
            socialColor: '#886A3D' ,
            name: 'Join GitHub'
        },
        {
            icon: LeftArrow4,
            socialColor: '#000' ,
            name: 'Join Insta'
        },
    ]
    return(
   
      <div className={`w-[50%] grid grid-cols-2 gap-0
        
           ${screenType !== ScreenTypes.TABLET ? "" : 'mx-auto w-[80%] gap-x-5 gap-y-5'}
           ${screenType !== ScreenTypes.MID_LAPTOP ? "" : 'w-[65%]'}
           ${screenType !== ScreenTypes.LARGE_LAPTOP ? "" : 'w-[45%] g-x-0'}
      `}>

        { 
            socials.map((social, key) => (
                 <BaseButton
                title= {social.name}
              key={key}
              LeftIcon={social.icon}
              extendedClassNames={`mt-[1.3vw] max-w-[16rem] gap-2 h-[3.4rem] text-[${social.socialColor}]  border-[1px] border-blue-bor ${
                screenType === ScreenTypes.TABLET ? 'text-[13px] max-w-[8rem] gap-2 h-[2.5rem]' : null
              }
              ${ screenType === ScreenTypes.MID_LAPTOP  ? 'text-[13px] max-w-[9rem] gap-1 h-[2.8rem]' : null}
              `}
            />
            ))

        }



      </div>

    )
}