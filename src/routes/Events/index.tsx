import { useState } from "react";
import DisplayProjectsAndEvents from "../../components/DisplayProjectsAndEvents";
import { Searchbar } from "../../components/Searchbar";
import { ListItem } from "../../types";

const EVENTS = [
  {
    name: 'Event Name 1',
    img: "url('./assets/placeholder-1.png')",
  },
  {
    name: 'Event Name 2',
    img: "url('./assets/placeholder-2.png')",
  },
  {
    name: 'Event Name 3',
    img: "url('./assets/placeholder-3.png')",
  },
  {
    name: 'Event Name 4',
    img: "url('./assets/placeholder-4.png')",
  },
  {
    name: 'Event Name 5',
    img: "url('./assets/placeholder-5.png')",
  },
  {
    name: 'Event Name 6',
    img: "url('./assets/placeholder-1.png')",
  },
];

export function Events() {
  const [filteredList , setFilteredList] = useState<ListItem[]>(EVENTS)
  return <div className="flex flex-col gap-8">
    <Searchbar type = 'events' setFilteredList = {setFilteredList} list = {EVENTS}/>
    <DisplayProjectsAndEvents type="events" filteredList={filteredList}/>

  </div>;
}
