import React from 'react';
import Feed from './../Feed';

import { Header, Container, Title } from './styles';

const Main = () => {
    return (
        <Container>
            <Header>
                <Title>Home</Title>
            </Header>
            <Feed />
        </Container>
    );
};

export default Main;
