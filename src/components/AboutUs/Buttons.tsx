import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { BaseButton } from '../Button/index';
import { LeftArrow1, LeftArrow2, LeftArrow3, LeftArrow4 } from './Icons';
import { Link } from 'react-router-dom';

export function Buttons() {
  const { screenType } = useMediaQuery();
  const onSmallScreen = screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET;
  const onMediumScreen = screenType === ScreenTypes.MID_LAPTOP;
  const onLargeScreen = screenType === ScreenTypes.LARGE_LAPTOP;

  const buttonStyle = "mt-[1.3vw]  gap-4 h-[3.4rem]  leading-[136%] font-poppins font-medium  border-1 border-border-blue"

 

  return (
    <div
      className={`w-[clamp(425px, 40%, 40vw)] grid grid-cols-2 gap-x-4 gap-y-2
      ${!onSmallScreen ? '' : ' mx-auto'}
      `}
    >



  

      {/* Discord Butto */}
     
<Link to = {"https://discord.com/invite/WfZjwtPRYE"} target='_blank' >
 <BaseButton
        title={'Join Discord'}
        LeftIcon={LeftArrow1}
        extendedClassNames={` text-[#2129EF]  ${buttonStyle} border-1 border-[#3897B5]
        ${
          onSmallScreen ? 'text-[13px] w-[163px]' : "w-[243px]"
        }
${onMediumScreen ? 'text-[16px] ' : null}
      
                `}
      /> 

</Link>   
 
      
<Link to = {"https://twitter.com/thecocode"} target='_blank' >

         <BaseButton
    
        title='Join Twitter'
        LeftIcon={LeftArrow2}
        extendedClassNames={`text-[#05669C]  ${buttonStyle}
        ${
          onSmallScreen ? 'text-[13px] w-[163px]' : "w-[243px]"
        }
${onMediumScreen ? 'text-[16px] ' : null}

                `}
      />
   </Link>  
  
     <Link to = {"https://github.com/thecocode"} target='_blank' >

 

      {/* Github Button */}
         <BaseButton
        title='Join GitHub'
        LeftIcon={LeftArrow3}
        
        extendedClassNames={`text-[#886A3D]  ${buttonStyle}
        ${
          onSmallScreen ? 'text-[13px] w-[163px]' : 'w-[243px]'
        }
        ${onMediumScreen ? 'text-[16px] ' : null}
      
                `}
      /> 
        
</Link>
{/* Linkedin Butto */}

 

        <Link to = {"https://www.linkedin.com/company/thecocode"} target='_blank' >         
 
 <BaseButton

        title='Join Linkedin'
        LeftIcon={LeftArrow4}
        extendedClassNames={` text-[#000] ${buttonStyle} 
        ${
          onSmallScreen ? 'text-[13px] w-[163px]' : 'w-[243px]'
        }
${onMediumScreen ? 'text-[16px] ' : null}

                `}
      /> 
     
      </Link>
 
     
    </div>
  );
}
