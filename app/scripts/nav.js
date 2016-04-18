import React from 'react';
import {Link} from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <h1 className="logo">BRING<span className="logo-span">THE</span>BANDS</h1>
        <Link to="/">SEARCH</Link>
        <Link to="/newUnicorn">VOTE</Link>
         
        
         
      </nav>
    )
  }
});

export default Nav;
