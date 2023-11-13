import React from 'react';
import { MarqueeTitle } from '../MarqueeTitle';
import DisplayProjectsAndEvents from '../DisplayProjectsAndEvents';

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

export function ExploreProjects() {
  return (
    <div className='my-12'>
      <MarqueeTitle content='EXPLORE PROJECTS' />
      <DisplayProjectsAndEvents type='projects' atMainPage={false} filteredList={PROJECTS} />
    </div>
  );
}
