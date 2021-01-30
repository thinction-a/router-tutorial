import React from 'react';
import qs from 'qs';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
`;

const P = styled.p`
    text-align: center;
`;

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <H1>소개</H1>      
            <P>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</P>
            {showDetail&&<P>detail값을 true로 설정하셨군요!</P>}
        </div>
    );
}

export default About;