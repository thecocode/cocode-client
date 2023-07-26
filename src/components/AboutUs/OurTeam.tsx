import React from 'react';
import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { Link } from 'react-router-dom';



export function OurTeam() {
  const { screenType } = useMediaQuery();

  const onSmallScreen = screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET;
  const main = "max-w-[18.75rem] max-h-[25rem] relative "
  const image = "w-[100%] h-[75%] cover"
  const division = "flex justify-between mt-3"
  const name = "text-lg font-poppins normal font-medium leading-normal "
  const place = "font-poppins text-xs normal text-[#666] leading-normal font-extralight"

  return (

    <div
      className={` mt-[-25%] gap-y-16  mx-auto z-999
      
    ${screenType !== ScreenTypes.TABLET ? '' : 'grid grid-cols-2  gap-x-[1rem] mx-auto w-[90%]'}
      ${screenType !== ScreenTypes.LARGE_LAPTOP ? '' : 'grid grid-cols-3 gap-x-[10rem]'}
      ${screenType !== ScreenTypes.MID_LAPTOP ? '' : 'grid grid-cols-3 gap-x-[5rem]'}

 `}
    >




      {/* Person 1 */}
      <div
        className={`${main}
    `}
      >
        <img className={`${image}`} src='./assets/pooja.jpeg' />
        <div>
          <div className={`${division}`}>
            <p className={`${name}`}>
              Pooja
            </p>
            <Link to={'https://github.com/poojasanwal'} target='_blank'>
             <img src='./assets/Vector-6.svg' />
            </Link>
           
          </div>
          <div
            className={`${place}`}
          >
            Founder
          </div>
        </div>
      </div>


      {/* Person 2 */}

      <div
        className={`${main}
        ${!onSmallScreen ? 'top-[10vh]' : 'top-[0vh]'}
      
   `}
      >
        <img className={`${image}`} src='./assets/prajwal.jpeg' />
        <div>
          <div className={`${division}`}>
            <p className={`${name} `}>
              Prajwal
            </p>
            <Link to={"https://github.com/OMGATE23"} target='_blank'>
                <img src='./assets/Vector-6.svg' />
            </Link>
          
          </div>
          <div
         className={`${place}`}
          >
            Product Designer
          </div>
        </div>
      </div>


      {/* Person 3 */}

      <div
        className={`${main}
    ${!onSmallScreen ? 'top-[20vh]' : 'top-[0vh]'}
  
   `}
      >
        <img className={`${image}`} src='./assets/Harry.jpeg' />
        <div>
        <div className={`${division}`}>
            <p className={`${name} `}>
              Prashant
            </p>
            <Link to={"https://github.com/iHarryD"} target='_blank'>
                 <img src='./assets/Vector-6.svg' />
            </Link>
         
          </div>
          <div
            className={`${place}`}
          >
            Developer
          </div>
        </div>
      </div>



      {/* Person 4 */}

      <div
        className={`${main}
 
   `}
      >
        <img className={`${image}`} src='./assets/Om.jpeg' />
        <div>
        <div className={`${division}`}>
            <p className={`${name} `}>Om</p>
            <Link to={"https://github.com/OMGATE23"} target='_blank'>
              <img src='./assets/Vector-6.svg' />
            </Link>
            
          </div>
          <div
            className={`${place}`}
          >
            Developer
          </div>
        </div>
      </div>



      {/* Person 5 */}

      <div
        className={`${main}
        ${!onSmallScreen ? 'top-[10vh]' : ' top-[0vh]'}
  
   `}
      >
        <img className={`${image}`} src='./assets/priti.jpeg' />
        <div>
        <div className={`${division}`}>
            <p className={`${name} `}>
              Priti
            </p>
            <Link to={"https://github.com/pritipsingh"} target='_blank'>
             <img src='./assets/Vector-6.svg' />
            </Link>
           
          </div>
          <div
            className={`${place}`}
          >
            Developer
          </div>
        </div>
      </div>




      {/* Person 6 */}

      <div
        className={`${main}
    ${!onSmallScreen ? 'top-[20vh]' : ' top-[0vh]'}

   `}
      >
        <img className={`w-[100%] h-[75%] cover `} src='./assets/pic.png' />
        <div>
        <div className={`${division}`}>
            <p className={`${name} `}>
              Person Name
            </p>
            <Link to={"https://github.com/pritipsingh"} target='_blank'>
             <img src='./assets/Vector-6.svg' />
            </Link>
          
          </div>
          <div
            className={`${place}`}
          >
            Web Developer
          </div>
        </div>
      </div>
    </div>
   
  );
}
