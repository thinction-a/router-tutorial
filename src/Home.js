import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
`;

const P = styled.p`
    text-align: center;
`;

const Home = () => {
    return (
        <div>
            <H1>홈</H1>
            <P>여기는 홈입니다. 네, 가장 먼저 보이는 페이지죠.</P>
        </div>
    );
}

export default Home;