import React, { Fragment } from 'react';
// We can import images through Webpack
import spinner from './spinner.gif';

const Spinner = () => (
  // if there is no other Javascript code, we can git rid of the return
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
