import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import WithRouterSample from './WithRouterSample';

const H3 = styled.h3`
    text-align: center;
`;

const P = styled.p`
    text-align: center;
`;

const data = {
    GgongSamNal : {
        name: '김민석',
        description: '꽁치삼치날치집사'
    },
    Rachel: {
        name: '정원정',
        description: '제4의 고양이'
    }
}

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if ( !profile ) {
        return <div>
            <P>존재하지 않는 사용자입니다.</P>
        </div>
    }
    return (
        <div>
            <H3>
                {username}({profile.name})
            </H3>
            <P>{profile.description}</P>
            <WithRouterSample />
        </div>
    );
}

export default withRouter(Profile);