import React from 'react';
import Feed from './../Feed';

import { Header } from './styles';

const Main = () => {
    return (
        <>
            <Header>
                <span>Home</span>
            </Header>
            <Feed />
        </>
    );
};

export default Main;
