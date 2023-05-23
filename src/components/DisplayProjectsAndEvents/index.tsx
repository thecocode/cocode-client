import React, { useEffect, useState } from 'react';
import './styles.css';

interface DisplayProps {
  type: 'projects' | 'events';
}

interface Event {
  name: string;
  img: string;
}

interface Project {
  name: string;
  img: string;
  stars: number;
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
    name: 'Project Name',
    img: "url('./assets/placeholder-1.png')",
    stars: 123,
  },
  {
    name: 'Project Name',
    img: "url('./assets/placeholder-2.png')",
    stars: 123,
  },
  {
    name: 'Project Name',
    img: "url('./assets/placeholder-3.png')",
    stars: 123,
  },
  {
    name: 'Project Name',
    img: "url('./assets/placeholder-4.png')",
    stars: 123,
  },
  {
    name: 'Project Name',
    img: "url('./assets/placeholder-5.png')",
    stars: 123,
  },
  {
    name: 'Project Name',
    img: "url('./assets/placeholder-1.png')",
    stars: 123,
  },
];

type DisplayList = EVENTS | PROJECTS;

export default function DisplayProjectsAndEvents({ type }: DisplayProps) {
  const [displayList, setDisplayList] = useState<DisplayList>(() => {
    if (type === 'projects') {
      return PROJECTS;
    } else {
      return EVENTS;
    }
  });

  return (
    <div className='font-poppins text-sm mt-12 mb-32'>
      <div className='flex flex-1'>
        <div className='flex-cont'>
          <div className='flex-child'>
            <div className='display-image' style={{ backgroundImage: displayList[0].img }}></div>
            <div className='display-name'>
              {displayList[0].name}
              {type === 'projects' && (
                <span className='display-stars'>
                  <img src='./assets/github.svg' alt='' />
                  <img src='./assets/star.svg' alt='' />
                  {(displayList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
          <div className='flex-child'>
            <div className='display-image' style={{ backgroundImage: displayList[2].img }}></div>
            <div className='display-name'>
              {displayList[2].name}
              {type === 'projects' && (
                <span className='display-stars'>
                  <img src='./assets/github.svg' alt='' />
                  <img src='./assets/star.svg' alt='' />
                  {(displayList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className='flex-cont'>
          <div className='flex-child'>
            <div className='display-image' style={{ backgroundImage: displayList[1].img }}></div>
            <div className='display-name'>
              {displayList[1].name}
              {type === 'projects' && (
                <span className='display-stars'>
                  <img src='./assets/github.svg' alt='' />
                  <img src='./assets/star.svg' alt='' />
                  {(displayList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
          <div className='flex-child'>
            <div className='display-image' style={{ backgroundImage: displayList[3].img }}></div>
            <div className='display-name'>
              {displayList[3].name}
              {type === 'projects' && (
                <span className='display-stars'>
                  <img src='./assets/github.svg' alt='' />
                  <img src='./assets/star.svg' alt='' />
                  {(displayList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className='flex-cont'>
          <div className='flex-child'>
            <div className='display-image' style={{ backgroundImage: displayList[4].img }}></div>
            <div className='display-name'>
              {displayList[4].name}
              {type === 'projects' && (
                <span className='display-stars'>
                  <img src='./assets/github.svg' alt='' />
                  <img src='./assets/star.svg' alt='' />
                  {(displayList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
          <div className='flex-child'>
            <div className='display-image' style={{ backgroundImage: displayList[5].img }}></div>
            <div className='display-name'>
              {displayList[5].name}
              {type === 'projects' && (
                <span className='display-stars'>
                  <img src='./assets/github.svg' alt='' />
                  <img src='./assets/star.svg' alt='' />
                  {(displayList[0] as Project).stars}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-2 '>
          <div className='flex-cont'>
            <div className='flex-child'>
              <div className='display-image' style={{ backgroundImage: displayList[0].img }}></div>
              <div className='display-name'>
                {displayList[0].name}
                {type === 'projects' && (
                  <span className='display-stars'>
                    <img src='./assets/github.svg' alt='' />
                    <img src='./assets/star.svg' alt='' />
                    {(displayList[0] as Project).stars}
                  </span>
                )}
              </div>
            </div>
            <div className='flex-child'>
              <div className='display-image' style={{ backgroundImage: displayList[1].img }}></div>
              <div className='display-name'>
                {displayList[1].name}
                {type === 'projects' && (
                  <span className='display-stars'>
                    <img src='./assets/github.svg' alt='' />
                    <img src='./assets/star.svg' alt='' />
                    {(displayList[0] as Project).stars}
                  </span>
                )}
              </div>
            </div>
            <div className='flex-child'>
              <div className='display-image' style={{ backgroundImage: displayList[2].img }}></div>
              <div className='display-name'>
                {displayList[2].name}
                {type === 'projects' && (
                  <span className='display-stars'>
                    <img src='./assets/github.svg' alt='' />
                    <img src='./assets/star.svg' alt='' />
                    {(displayList[0] as Project).stars}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className='flex-cont'>
            <div className='flex-child'>
              <div className='display-image' style={{ backgroundImage: displayList[3].img }}></div>
              <div className='display-name'>
                {displayList[3].name}
                {type === 'projects' && (
                  <span className='display-stars'>
                    <img src='./assets/github.svg' alt='' />
                    <img src='./assets/star.svg' alt='' />
                    {(displayList[0] as Project).stars}
                  </span>
                )}
              </div>
            </div>
            <div className='flex-child'>
              <div className='display-image' style={{ backgroundImage: displayList[4].img }}></div>
              <div className='display-name'>
                {displayList[4].name}
                {type === 'projects' && (
                  <span className='display-stars'>
                    <img src='./assets/github.svg' alt='' />
                    <img src='./assets/star.svg' alt='' />
                    {(displayList[0] as Project).stars}
                  </span>
                )}
              </div>
            </div>
            <div className='flex-child'>
              <div className='display-image' style={{ backgroundImage: displayList[5].img }}></div>
              <div className='display-name'>
                {displayList[5].name}
                {type === 'projects' && (
                  <span className='display-stars'>
                    <img src='./assets/github.svg' alt='' />
                    <img src='./assets/star.svg' alt='' />
                    {(displayList[0] as Project).stars}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
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
