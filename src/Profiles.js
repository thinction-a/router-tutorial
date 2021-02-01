import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const H3 = styled.h3`
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
`;

const Li = styled.li`
    list-style: none;
    text-align: center;
    padding: 1%;
`;

const LINK = styled(NavLink)`
    color: #7b7b7b;
    text-decoration: none;
    :hover {
        color: #4fb948;
    }
`;

const P = styled.p`
    text-align: center;
    color: #4fb948;
    font-size: .875rem;
    font-weight: 700;
`;

const activeStyle = {
    background: '#4fb948',
    color: '#fff',
};

const Profiles = () => {
    return (
        <div>
            <H3>사용자 목록</H3>
            <Route
                path="/profiles"
                exact
                render={() => <P>사용자를 선택해주세요.</P>}
            />
            <ul style={{padding: 0, margin: 0}}>
                <Li>
                    <LINK activeStyle={activeStyle} to="/profiles/GgongSamNal">GgongSamNal</LINK>
                </Li>
                <Li>
                    <LINK activeStyle={activeStyle} to="/profiles/Rachel">Rachel</LINK>
                </Li>
            </ul>
            <Route path="/profiles/:username" component={Profile} />
            {/* <WithRouterSample /> */}
        </div>
    );
}

export default Profiles;