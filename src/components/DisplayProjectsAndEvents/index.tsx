import React, { useEffect, useState } from 'react';

interface Event {
  name: string;
  img: string;
}

interface Project {
  name: string;
  img: string;
  stars: number;
}

interface DisplayProps {
  type: 'projects' | 'events';
  filteredList: Event[] | Project[];
}

type EVENTS = Event[];
type PROJECTS = Project[];

const EVENTS = [
  {
    name: 'Event Name',
    img: "url('./assets/placeholder-1.png')",
  },
  {
    name: 'Event Name',
    img: "url('./assets/placeholder-2.png')",
  },
  {
    name: 'Event Name',
    img: "url('./assets/placeholder-3.png')",
  },
  {
    name: 'Event Name',
    img: "url('./assets/placeholder-4.png')",
  },
  {
    name: 'Event Name',
    img: "url('./assets/placeholder-5.png')",
  },
  {
    name: 'Event Name',
    img: "url('./assets/placeholder-1.png')",
  },
];

const PROJECTS = [
  {
    name: 'Apple',
    img: "url('./assets/placeholder-1.png')",
    stars: 121,
  },
  {
    name: 'Banana',
    img: "url('./assets/placeholder-2.png')",
    stars: 142,
  },
  {
    name: 'Orange',
    img: "url('./assets/placeholder-3.png')",
    stars: 223,
  },
  {
    name: 'Watermelon',
    img: "url('./assets/placeholder-4.png')",
    stars: 474,
  },
  {
    name: 'Strawberry',
    img: "url('./assets/placeholder-5.png')",
    stars: 105,
  },
  {
    name: 'Pomogranate',
    img: "url('./assets/placeholder-1.png')",
    stars: 216,
  },
];

type DisplayList = EVENTS | PROJECTS;
export default function DisplayProjectsAndEvents({ type, filteredList }: DisplayProps) {
  const [displayList, setDisplayList] = useState<DisplayList>(() => {
    if (type === 'projects') {
      return PROJECTS;
    } else {
      return EVENTS;
    }
  });

  return (
    <div className='font-poppins text-sm mt-12 mb-32'>
      <div className='main-grid w-[80vw] h-[90vh] my-10 mx-auto grid ml:grid-cols-4 ml:grid-rows-3 grid-cols-2 grid-rows-[repeat(20_,_minmax(0,_1fr))] justify-items-center gap-4'>
        {filteredList.length > 0 && (
          <div className='one flex flex-col justify-center w-full h-full ml:col-start-1 ml:col-end-2 ml:row-start-2 ml:row-end-3 col-start-1 col-end-2 row-start-1 row-end-7'>
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: filteredList[0].img }}
            ></div>
            <div className='name h-fit'>
              {filteredList[0].name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(filteredList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
        )}
        {filteredList.length > 1 && (
          <div className='two flex flex-col justify-center w-full h-full ml:col-span-2 ml:row-start-1 ml:row-end-3 col-start-2 col-end-[-1] row-start-1 row-end-6'>
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: filteredList[1].img }}
            ></div>
            <div className='name h-fit'>
              {filteredList[1].name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(filteredList[1] as Project).stars}
                </span>
              )}
            </div>
          </div>
        )}
        {filteredList.length > 2 && (
          <div className='three flex flex-col justify-center w-full h-full ml:col-start-4 ml:col-end-[-1] ml:row-start-1 ml:row-end-2 col-start-1 col-end-2 row-start-7 row-end-[13]'>
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: filteredList[2].img }}
            ></div>
            <div className='name h-fit'>
              {filteredList[2].name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(filteredList[2] as Project).stars}
                </span>
              )}
            </div>
          </div>
        )}
        {filteredList.length > 3 && (
          <div className='four flex flex-col justify-center w-full h-full ml:row-start-3 ml:row-end-[-1] ml:col-start-1 ml:col-end-2 col-start-2 col-end-[-1] row-start-6 row-end-[14]'>
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: filteredList[3].img }}
            ></div>
            <div className='name h-fit'>
              {filteredList[3].name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(filteredList[3] as Project).stars}
                </span>
              )}
            </div>
          </div>
        )}
        {filteredList.length > 4 && (
          <div className='five flex flex-col justify-center w-full h-full ml:col-start-2 ml:col-end-4 ml:row-start-3 ml:row-end-[-1] col-start-1 col-end-2 row-start-[13] row-end-[-1]'>
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: filteredList[4].img }}
            ></div>
            <div className='name h-fit'>
              {filteredList[4].name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(filteredList[4] as Project).stars}
                </span>
              )}
            </div>
          </div>
        )}
        {filteredList.length > 5 && (
          <div className='six flex flex-col justify-center w-full h-full ml:row-start-2 ml:row-end-[-1] ml:col-start-4 col-start-2 col-end-[-1] row-start-[14] row-end-[-1]'>
            <div
              className='image w-full h-[90%] bg-cover bg-center rounded-lg'
              style={{ backgroundImage: filteredList[5].img }}
            ></div>
            <div className='name h-fit'>
              {filteredList[5].name}
              {type === 'projects' && (
                <span className='display-stars flex gap-1'>
                  <img className='w-[1rem]' src='./assets/github.svg' alt='' />
                  <img className='w-[1rem]' src='./assets/star.svg' alt='' />
                  {(filteredList[5] as Project).stars}
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <a
        className='flex items-center text-md px-6 py-4 rounded-full w-fit gap-2 justify-evenly mx-auto outline outline-2 '
        href={`/${type}`}
      >
        <span>View More</span>
        <img src='./assets/arrow.svg' />
      </a>
    </div>
  );
}
