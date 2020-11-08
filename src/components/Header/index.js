import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from './../../routers';

import { Container, Avatar, Title, ArrowLeftIcon } from './styles';

const renderHomeAvatarHeader = () => {
    return (
        <Container>
            <Avatar size={30} />
            <Title>Home</Title>
        </Container>
    );
};

const renderPostDetailHeader = (goBack) => {
    return (
        <Container>
            <ArrowLeftIcon onClick={goBack} />
            <Title>Post</Title>
        </Container>
    );
};

const Header = ({ match: { path }, history: { goBack } }) => {
    if (path === ROUTES.POST_DETAIL) return renderPostDetailHeader(goBack);
    else return renderHomeAvatarHeader();
};

export default withRouter(Header);
