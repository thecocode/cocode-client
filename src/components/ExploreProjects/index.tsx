import React from 'react';
import { MarqueeTitle } from '../MarqueeTitle';
import DisplayProjectsAndEvents from '../DisplayProjectsAndEvents';

export function ExploreProjects() {
  return (
    <div className='my-12'>
      <MarqueeTitle content='EXPLORE PROJECTS' />
      <DisplayProjectsAndEvents type='projects' />
    </div>
  );
}
