import React from 'react';

import Header from './../../components/Header';

import { Container, Body, NotFoundText } from './styles';

const NotFound = () => {
    return (
        <Container>
            <Body>
                <Header />
                <NotFoundText>Esta conta não existe</NotFoundText>
            </Body>
        </Container>
    );
};

export default NotFound;
