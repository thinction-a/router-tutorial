import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Profile from './Profile';

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

const LINK = styled(Link)`
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
                    <LINK to="/profiles/GgongSamNal">GgongSamNal</LINK>
                </Li>
                <Li>
                    <LINK to="/profiles/Rachel">Rachel</LINK>
                </Li>
            </ul>
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;