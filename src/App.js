import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const LINK = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: all .2s;
  :hover {
    font-weight: 700;
  }
`;

function App() {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 60, backgroundColor: 'darkviolet'}}>
        <LINK to="/">Go to Home</LINK>
        <LINK to="/about">Go to About</LINK>
        <LINK to="/profiles">Go to Profiles</LINK>
      </div>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

export default App;