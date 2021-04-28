import React from 'react';

const Video = (props) => {
  return(
    <section>
      <h2>Video Component</h2>
      <h5>{props.num}</h5>
      <button onClick={props.setToggle}>Toggle Video</button>
    </section>
  )
}

export default Video;