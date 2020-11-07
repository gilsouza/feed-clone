import React from 'react';
import Feed from './../Feed';

import { Header, Container, Title, Avatar } from './styles';

const Main = () => {
    return (
        <Container>
            <Header>
                <Avatar size={25} />
                <Title>Home</Title>
            </Header>
            <Feed />
        </Container>
    );
};

export default Main;
