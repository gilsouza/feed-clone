import React from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from './../../routers';

import Header from './../../components/Header';
import Feed from './../../components/Feed';
import PostDetail from './../../components/PostDetail';

import { Container, Body } from './styles';

import withSplashScreen from './../../components/SplashScreen';

const Home = () => {
    return (
        <Container>
            <Body>
                <Header />
                <Feed />
                <Route path={ROUTES.POST_DETAIL} exact component={PostDetail} />
            </Body>
        </Container>
    );
};

export default withSplashScreen(Home);
