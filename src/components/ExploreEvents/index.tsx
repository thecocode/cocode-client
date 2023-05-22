import React from 'react'
import { MarqueeTitle } from '../MarqueeTitle';
import DisplayProjectsAndEvents from '../DisplayProjectsAndEvents';

export function ExploreEvents() {
  return (
    <div className='my-12'>
        
        <MarqueeTitle content = 'EXPLORE EVENTS'/>
        <DisplayProjectsAndEvents type = 'events' />
    </div>
  )
}
