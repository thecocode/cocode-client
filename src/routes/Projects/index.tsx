import { useState } from "react";
import DisplayProjectsAndEvents from "../../components/DisplayProjectsAndEvents";
import { Searchbar } from "../../components/Searchbar";
import { ListItem } from "../../types";

const PROJECTS = [
  {
    name: "Apple",
    img: "url('./assets/placeholder-1.png')",
    stars: 121
  },
  {
    name: "Banana",
    img: "url('./assets/placeholder-2.png')",
    stars: 142
  },
  {
    name: "Orange",
    img: "url('./assets/placeholder-3.png')",
    stars: 223
  },
  {
    name: "Watermelon",
    img: "url('./assets/placeholder-4.png')",
    stars: 474
  },
  {
    name: "Strawberry",
    img: "url('./assets/placeholder-5.png')",
    stars: 105
  },
  {
    name: "Pomogranate",
    img: "url('./assets/placeholder-1.png')",
    stars: 216
  }
];
export function Projects() {
  const [filteredList , setFilteredList] = useState<ListItem[]>(PROJECTS)
  return <div className="flex flex-col gap-8">
    <Searchbar type = 'projects' setFilteredList = {setFilteredList} list = {PROJECTS}/>
    <DisplayProjectsAndEvents type="projects" filteredList={filteredList}/>

  </div>;
}
