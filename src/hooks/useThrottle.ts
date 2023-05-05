import { useCallback } from 'react';

export function useThrottle<A, R>(callback: (...args: A[]) => R, delayInMilliSeconds = 500) {
  const throttledCallback = useCallback(() => {
    let isWaiting = false;
    let latestArgs: A[] | null = null;
    function timeoutCallback() {
      if (latestArgs) {
        callback(...latestArgs);
        latestArgs = null;
        isWaiting = true;
        setTimeout(() => {
          timeoutCallback();
        }, delayInMilliSeconds);
      } else {
        isWaiting = false;
      }
    }
    return (...args: A[]) => {
      if (isWaiting) {
        latestArgs = args;
        return;
      }
      callback(...args);
      isWaiting = true;
      setTimeout(() => {
        timeoutCallback();
      }, delayInMilliSeconds);
    };
  }, [callback, delayInMilliSeconds]);
  return throttledCallback();
}
