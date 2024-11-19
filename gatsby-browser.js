import React from 'react';

export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    require('intersection-observer');
  }
};

export const wrapRootElement = ({ element }) => <React.StrictMode>{element}</React.StrictMode>;
