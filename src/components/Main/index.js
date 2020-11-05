import React from 'react';

import Header from './../Header';
import Feed from './../Feed';

import { Container } from './styles';

const Main = (props) => {
    const { userInfo } = props;

    console.log(userInfo);

    return (
        <Container>
            <Header title="Home"></Header>
            <Feed />
        </Container>
    );
};

export default Main;
