import { useState } from 'react';
import './styles.css';

export function Testimonials() {
  const [position, setPosition] = useState(25);
  const [onFocus, setOnFocus] = useState(0);

  const DISPLAY_LIST = [1, 2, 3, 4, 5];
  const DISPLAYLIST = [
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

  const [startPosition, setStartPosition] = useState(0);
  return (
    <div className='relative'>
      <img
        className='absolute h-[16%] ml:h-[20%] aspect-square ml:top-[-10%] top-[-8%] right-[10%]'
        src='./assets/testimonial-star.svg'
      />
      <div
        className='swiping-component'
        onTouchStart={(e) => {
          setStartPosition(e.changedTouches[0].clientX);
        }}
        onTouchEnd={(e) => {
          if (e.changedTouches[0].clientX < startPosition && onFocus !== DISPLAY_LIST.length - 1) {
            setPosition((prev) => prev - 50);
            setOnFocus((prev) => prev + 1);
          } else {
            if (onFocus !== 0) {
              setPosition((prev) => prev + 50);
              setOnFocus((prev) => prev - 1);
            }
          }
        }}
      >
        <div className='carousel' style={{ left: `${position}%` }}>
          {DISPLAYLIST.map((val, index) => (
            <div
              key={index}
              className={`carousel-item ${onFocus === index ? 'onfocus' : 'cursor-pointer'} `}
              onClick={() => {
                if (index === onFocus - 1) {
                  setPosition((prev) => prev + 50);
                  setOnFocus((prev) => prev - 1);
                }

                if (index === onFocus + 1) {
                  setPosition((prev) => prev - 50);
                  setOnFocus((prev) => prev + 1);
                }
              }}
            >
              <div 
                className={`content 
                ${index === onFocus - 1 && 'transform-left' } 
                ${index === onFocus + 1 && 'transform-right' }
                `}
                
              >
                <img className='review-image' src='./assets/testimonialimg.svg' />
                <div className='w-3/4 m-auto flex flex-col justify-center text-[0.55rem] ml:text-sm '>
                  <p className=''>{val.message}</p>
                  <p className='mt-4 pb-2 font-bold'>{val.name}</p>
                  <p className='text-xs pb-4 text-gray-400'>{val.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
