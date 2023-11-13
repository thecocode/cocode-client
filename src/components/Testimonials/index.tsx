/* eslint-disable no-console */
import { useState } from 'react';
import { useMediaQuery } from '../../hooks';
import { ScreenTypes } from '../../types';

const testimonials = [
  {
    name: 'Ellie Ramsay 1',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
  {
    name: 'Ellie Ramsay2',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
  {
    name: 'Ellie Ramsay3',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
  {
    name: 'Ellie Ramsay4',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
  {
    name: 'Ellie Ramsay5',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
  {
    name: 'Ellie Ramsay6',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
  {
    name: 'Ellie Ramsay7',
    position: 'Product Designer',
    message:
      'I am quite happy to choose Printasia for my visiting card. I got good quality in advocate section of visiting cards. Best experience I ever had.',
  },
];

export function Testimonials() {
  const { screenType } = useMediaQuery();
  const [testimonialInFocus, setTestimonialInFocus] = useState(0);
  const [position, setPosition] = useState(25);
  const [startPosition, setStartPosition] = useState(0);

  return (
    <div className='relative'>
      <img
        className='absolute h-[16%] ml:h-[20%] aspect-square ml:top-[-10%] top-[-8%] right-[10%]'
        src='./assets/testimonial-star.svg'
      />
      <div
        className='swiping-component overflow-hidden flex h-[100vh] flex-col justify-evenly bg-[#ffefc5]'
        onTouchStart={(e) => {
          if (screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET) {
            const currentTouchPosition = e.changedTouches[0].clientX;
            setStartPosition(currentTouchPosition);
          }
        }}
        onTouchEnd={(e) => {
          if (screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET) {
            const currentTouchPosition = e.changedTouches[0].clientX;
            if (testimonialInFocus <= testimonials.length) {
              if (currentTouchPosition < startPosition) {
                setPosition((prev) => prev - 50);
                setTestimonialInFocus((prev) => prev + 1);
              } else if (currentTouchPosition > startPosition) {
                if (testimonialInFocus !== 0) {
                  setPosition((prev) => prev + 50);
                  setTestimonialInFocus((prev) => prev - 1);
                }
              }
            }
          }
        }}
      >
        <div
          className='carousel flex relative w-fit transition-all duration-1000'
          style={{ left: `${position}%` }}
        >
          {testimonials.map((val, index) => (
            <div
              key={val.name}
              className={`carousel-item flex items-center justify-center w-[50vw] aspect-square transition-all duration-1000 cursor-pointer`}
              onClick={() => {
                if (index === testimonialInFocus - 1) {
                  setPosition((prev) => prev + 50);
                  setTestimonialInFocus((prev) => prev - 1);
                }

                if (index === testimonialInFocus + 1) {
                  setPosition((prev) => prev - 50);
                  setTestimonialInFocus((prev) => prev + 1);
                }
              }}
            >
              <div
                className={`content 

                ${index === testimonialInFocus - 1 && 'translate-x-[-25%]'} 
                ${index === testimonialInFocus + 1 && 'translate-x-[25%]'}
                ${testimonialInFocus === index ? 'onfocus scale-[1.5]' : 'cursor-pointer'}
                w-[75%] tb:w-[50%] bg-white py-[4rem] shadow-md relative text-center pt-[2rem] pb-[1rem] transition-all duration-1000 aspect-[4/3] flex justify-center rounded-md
                `}
              >
                <img
                  className='review-image w-[40%] left-[30%] top-[-30px] p-0 transition-all duration-1000 tb:left-[35px] tb:w-[80px] tb:top-[-40px] absolute rounded-full outline outline-[5px] outline-white bg-white'
                  src='./assets/testimonialimg.svg'
                />
                <div className='w-3/4 m-auto flex flex-col justify-center pt-[1.5rem]  ml:text-sm '>
                  <p className='text-xs'>{val.message}</p>
                  <p className='mt-4 text-xs pb-2 font-bold'>{val.name}</p>
                  <p className=' text-[0.65rem] pb-4 text-gray-400'>{val.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
