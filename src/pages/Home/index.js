import React from 'react';
// import Menu from './../../components/Menu';
// import SideBar from './../../components/SideBar';
import Main from './../../components/Main';
import { Container } from './styles';

import withSplashScreen from './../../components/SplashScreen';

const Home = () => {
    return (
        <Container>
            {/* <Menu/> */}
            <Main />
            {/* <SideBar/> */}
        </Container>
    );
};

export default withSplashScreen(Home);
