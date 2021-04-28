import React from 'react';

const Nav = (props) => {
  // Add state here....
  return(

    <nav>
      {props.toggle ? <h3>Logo nav</h3> : ''} 
      
    </nav>
  );
}

export default Nav;