import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from './../../routers';

import { Container, Avatar, Title } from './styles';

const Header = ({ match: { path }, history: { goBack } }) => {
    const renderHomeAvatarHeader = () => {
        return (
            <Container>
                <Avatar size={30} />
                <Title>Home</Title>
            </Container>
        );
    };

    const renderPostDetailHeader = () => {
        return (
            <Container>
                <Avatar size={30} />
                <Title>Voltar</Title>
            </Container>
        );
    };

    if (path === ROUTES.POST_DETAIL) return renderPostDetailHeader();
    else return renderHomeAvatarHeader();
};

export default withRouter(Header);
