import { render } from '@testing-library/react';
import React from 'react';
// import components...
import Tweet from './Tweet';

function Timeline(props) {
  const name = 'Andrew Townsley';
  return(
    <section>
      <h2>Your Timeline:</h2>
      <h3>{props.me}</h3>
      <h3>{props.job}</h3>
      <Tweet username = {name} />
    </section>
  )
}

export default Timeline;