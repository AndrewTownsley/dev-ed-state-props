import React from 'react';

function Tweet(props) {
  return(
    <>
      <h3>{props.name}</h3>
      <h3>{props.tweet}</h3>
    </>
  )
  }

  export default Tweet;