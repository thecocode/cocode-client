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
  const filterBtnRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(e: any) {
    if (!filterBtnRef.current?.contains(e.target)) {
      setDisplayFilters(false);
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
              setFilteredList(() => {
                const newL = list.filter((el) =>
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
        <div
          ref={filterBtnRef}
          onClick={() => setDisplayFilters((prev) => !prev)}
          className='w-[20%] flex flex-col align-middle relative py-4 border-l-2  '
        >
          <button className=' w-full h-full flex justify-center gap-6 items-center'>
            <img src='./assets/filter.svg' />
            <div className='ml:block hidden'>Filters</div>
          </button>
          <ul
            className={` ${
              displayFilters ? 'block' : ' hidden'
            } absolute top-[calc(100%+4px)] w-full bg-input-bg rounded-md overflow-y-auto max-h-[180px] `}
          >
            <li
              className='text-sm cursor-pointer'
              onClick={() => {
                setSelectedFilters('name');
                setFilteredList((prev) => {
                  const newL = [...list].sort((a, b) => (a.name > b.name ? 1 : -1));
                  // debugger;
                  return newL;
                });
              }}
            >
              <button className=' w-full pl-4 py-2 text-start transition-colors hover:bg-[#EAEAEA]'>
                By Names
              </button>
            </li>
            {type === 'projects' && (
              <li
                className='text-sm cursor-pointer'
                onClick={() => {
                  setSelectedFilters('stars');
                  setFilteredList((prev) => {
                    const newL = [...list].sort((a, b) => {
                      const starsA = a.stars !== undefined ? a.stars : Number.NEGATIVE_INFINITY;
                      const starsB = b.stars !== undefined ? b.stars : Number.NEGATIVE_INFINITY;
                      return starsB - starsA;
                    });
                    return newL;
                  });
                }}
              >
                <button className=' w-full pl-4 py-2 text-start transition-colors hover:bg-[#EAEAEA]'>
                  By Stars
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
