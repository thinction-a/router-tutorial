import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import HistorySample from './HistorySample';
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

function App({ history }) {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 60, backgroundColor: 'darkviolet'}}>
        <LINK to="/">Go to Home</LINK>
        <LINK to="/about">Go to About</LINK>
        <LINK to="/profiles">Go to Profiles</LINK>
        <LINK to="/history">History Example</LINK>
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          //path를 따로 정의하지 않으면 모든 상황에 랜더링됨
          render={({location}) => (
            <div>
              <h2 style={{textAlign: 'center'}}>'{location.pathname}'라는 페이지가 엄서용..</h2>
              <button
                onClick={() => history.push('/')}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                홈으로 돌아가기
              </button>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);