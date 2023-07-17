import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { ListItem } from '../../types';

type SearchProp = {
  type: 'projects' | 'events';
  setFilteredList: React.Dispatch<React.SetStateAction<ListItem[]>>;
  list: ListItem[];
};

export function Searchbar({ type, setFilteredList, list }: SearchProp) {
  const [displayFilters, setDisplayFilters] = useState(false);
  const [selectedFilter, setSelectedFilters] = useState('name');

  const filterRef = useRef<HTMLUListElement>(null);
  const filterBtnRef = useRef<HTMLButtonElement>(null);

  function handleClickOutside(e: any) {
    if (
      filterRef.current &&
      !filterRef.current.contains(e.target) &&
      !filterBtnRef.current?.contains(e.target)
    ) {
      setDisplayFilters(false);
    } else {
      setDisplayFilters(true);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='mt-12 relative w-[70%] mx-auto'>
      <div className='flex justify-around text-sm text-center  shadow-lg rounded-xl m-auto'>
        <div className=' w-[80%] flex justify-center'>
          <input
            onChange={(e) => {
              setFilteredList((prev) => {
                const newL = prev.filter((el) =>
                  el.name.toLowerCase().includes(e.target.value.toLowerCase()),
                );

                return newL;
              });
            }}
            className='block w-full py-4 pl-8 m-auto'
            placeholder={`Search any ${type} . . .`}
            type='text'
          />
          <button aria-label='search button'>
            <img className='p-4' src='./assets/searchIcon.svg' />
          </button>
        </div>
        <div className='w-[20%] flex flex-col align-middle relative p-4 border-l-2  '>
          <button
            ref={filterBtnRef}
            onClick={() => setDisplayFilters((prev) => !prev)}
            className=' w-full h-full flex justify-center gap-6 items-center'
          >
            <img src='./assets/filter.svg' />
            <div className='ml:block hidden'>Filters</div>
          </button>
          <ul
            className={` ${
              displayFilters ? 'block' : ' hidden'
            } absolute top-[100%] right-[-25%] tb:right-0 w-full min-w-[100px] flex flex-col align-top text-left`}
            ref={filterRef}
          >
            <li
              className={` py-2 ${
                selectedFilter === 'name' ? 'bg-blue-200' : 'bg-blue-100'
              } text-sm`}
              onClick={() => {
                setSelectedFilters('name');
                setFilteredList((prev) => {
                  const newL = [...prev].sort((a, b) => (a.name > b.name ? 1 : -1));
                  // debugger;
                  return newL;
                });
              }}
            >
              <label className='relative flex justify-center gap-4 text-left'>
                <input
                  type='radio'
                  value='name'
                  name='filter'
                  className='w-full hidden h-full z-10 absolute'
                  placeholder='By name'
                />
                By names
              </label>
            </li>
            {type === 'projects' && (
              <li
                className={` py-2 ${
                  selectedFilter !== 'name' ? 'bg-blue-200' : 'bg-blue-100'
                } text-sm`}
                onClick={() => {
                  setSelectedFilters('stars');
                  setFilteredList((prev) => {
                    const newL = [...prev].sort((a, b) => {
                      const starsA = a.stars !== undefined ? a.stars : Number.NEGATIVE_INFINITY;
                      const starsB = b.stars !== undefined ? b.stars : Number.NEGATIVE_INFINITY;
                      return starsB - starsA;
                    });
                    return newL;
                  });
                }}
              >
                <label className='relative flex justify-center gap-4 text-left'>
                  <input
                    type='radio'
                    name='filter'
                    value='stars'
                    className='w-full hidden h-full z-10 absolute'
                    placeholder='By name'
                  />
                  By stars
                </label>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
