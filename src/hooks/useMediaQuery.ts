import { useEffect, useState } from 'react';
import { useThrottle } from './useThrottle';
import { ScreenTypes } from '../types';

const queries = {
  largeLaptop: '(min-width: 1400px)',
  midLaptop: '(min-width: 900px) and (max-width: 1400px)',
  tablet: '(min-width: 480px) and (max-width: 900px)',
  mobile: '(max-width: 480px)',
};

function getScreenType() {
  const isLargeLaptop = window.matchMedia(queries.largeLaptop).matches;
  if (isLargeLaptop) {
    return ScreenTypes.LARGE_LAPTOP;
  }
  const isMidLaptop = window.matchMedia(queries.midLaptop).matches;
  if (isMidLaptop) {
    return ScreenTypes.MID_LAPTOP;
  }
  const isTablet = window.matchMedia(queries.tablet).matches;
  if (isTablet) {
    return ScreenTypes.TABLET;
  }
  return ScreenTypes.MOBILE;
}

export function useMediaQuery() {
  const [screenType, setScreenType] = useState<ScreenTypes>(() => getScreenType());
  const handleResizing = useThrottle(() => setScreenType(getScreenType), 500);

  useEffect(() => {
    window.addEventListener('resize', () => handleResizing());

    return () => window.removeEventListener('resize', () => handleResizing());
  }, []);

  return { screenType };
}

// tweak if ssr added
