import {useEffect, useState} from 'react';

import React from 'react';
export function useWindowWidth () {
  let [width, setWidth] = useState (window.innerWidth);
  function handleWidth () {
    setWidth (window.innerWidth);
  }
  useEffect (
    () => {
      window.addEventListener ('resize', handleWidth);

      return () => window.removeEventListener ('resize', handleWidth);
    },
    [window.innerWidth]
  );
  return {width}
}
