import React from 'react';
import Feed from './../Feed';

import { Header, Container } from './styles';

const Main = () => {
    return (
        <Container>
            <Header>
                <span>Home</span>
            </Header>
            <Feed />
        </Container>
    );
};

export default Main;
