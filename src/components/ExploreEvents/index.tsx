import React from 'react';
import { MarqueeTitle } from '../MarqueeTitle';
import DisplayProjectsAndEvents from '../DisplayProjectsAndEvents';

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

export function ExploreEvents() {
  return (
    <div className='my-12'>
      <MarqueeTitle content='EXPLORE EVENTS' />
      <DisplayProjectsAndEvents type='events' filteredList={EVENTS} />
    </div>
  );
}
