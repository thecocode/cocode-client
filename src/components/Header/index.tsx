import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '../../hooks';
import { ScreenTypes } from '../../types';
import { List, X as Cross } from '@phosphor-icons/react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Logo() {
  return (
    <NavLink to='/'>
      <svg
        className='min-w-[150px] w-[20%] mb-[-2px]'
        width='190'
        height='26'
        viewBox='0 0 190 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.368 21.336C14.28 21.336 16.968 20.076 18.844 18.116L15.848 15.428C14.728 16.716 13.132 17.584 11.368 17.584C8.148 17.584 5.404 14.728 5.404 11.368C5.404 8.036 8.148 5.18 11.368 5.18C13.132 5.18 14.728 6.048 15.848 7.336L18.844 4.648C16.968 2.66 14.28 1.428 11.368 1.428C5.852 1.428 1.148 5.964 1.148 11.368C1.148 16.772 5.852 21.336 11.368 21.336Z'
          fill='black'
        />
        <rect
          x='25'
          y='3.83398'
          width='31'
          height='15.1667'
          rx='7.58333'
          stroke='black'
          strokeWidth='4'
        />
        <path
          d='M74.368 21.336C77.28 21.336 79.968 20.076 81.844 18.116L78.848 15.428C77.728 16.716 76.132 17.584 74.368 17.584C71.148 17.584 68.404 14.728 68.404 11.368C68.404 8.036 71.148 5.18 74.368 5.18C76.132 5.18 77.728 6.048 78.848 7.336L81.844 4.648C79.968 2.66 77.28 1.428 74.368 1.428C68.852 1.428 64.148 5.964 64.148 11.368C64.148 16.772 68.852 21.336 74.368 21.336Z'
          fill='black'
        />
        <rect
          x='87'
          y='4'
          width='31'
          height='15.1667'
          rx='7.58333'
          stroke='black'
          strokeWidth='4'
        />
        <path
          d='M127.072 21H133.96C140.428 21 145.02 16.996 145.02 11.368C145.02 5.74 140.428 1.764 133.96 1.764H127.072V21ZM131.188 17.248V5.516H134.492C138.16 5.516 140.764 7.952 140.764 11.368C140.764 14.812 138.16 17.248 134.492 17.248H131.188ZM163.017 5.488V1.764H148.205V21H163.017V17.276H152.349V13.048H162.009V9.324H152.349V5.488H163.017Z'
          fill='black'
        />
      </svg>
    </NavLink>
  );
}

const navlinks = [
  { label: 'Leaderboard', to: '/leaderboard' },
  { label: 'Projects', to: '/projects' },
  { label: 'Events', to: '/events' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'About Us', to: '/about-us' },
];

export function Header() {
  const { screenType } = useMediaQuery();
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isMobileNavbarVisible && (
          <motion.div
            key='mobile-nav'
            initial={{ y: '-100%' }}
            animate={{ y: 0, transformOrigin: 'top' }}
            exit={{ y: '-100%', transformOrigin: 'bottom' }}
            transition={{ type: 'just' }}
            className='absolute inset-0 bg-[#F7EDFF] flex flex-col'
          >
            <button
              className='mt-navbar-y mr-navbar-x self-end'
              onClick={() => setIsMobileNavbarVisible(false)}
            >
              <Cross size={24} />
            </button>
            <nav className='flex h-full'>
              <ul className='flex flex-col gap-4 items-center grow self-center'>
                {navlinks.map(({ label, to }) => (
                  <li key={label}>
                    <NavLink to={to} className='block p-3'>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <header className='px-navbar-x py-navbar-y flex justify-between items-center'>
        <Logo />
        {screenType === ScreenTypes.MOBILE || screenType === ScreenTypes.TABLET ? (
          <button
            onClick={() => {
              setIsMobileNavbarVisible(true);
            }}
          >
            <List size={24} alt='menu icon' />
          </button>
        ) : (
          <nav>
            <ul className='flex gap-[clamp(12px,1.25vw,20px)]'>
              {navlinks.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className='px-[clamp(8px,1.25vw,16px)] py-[clamp(6px,0.85vw,12px)] text-navlink'
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
