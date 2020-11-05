import React from 'react';

import { Container, Wrapper } from './styles';
// import Menu from './../../components/Menu';
import Main from './../../components/Main';
// TODO: Implementar loading
// import Spinner from '../../components/Spinner';
import withSplashScreen from './../../components/SplashScreen';

const Home = () => {
    // TODO: Rever tamanho do container
    return (
        <Container>
            <Wrapper>
                {/* <Menu></Menu> */}
                {/* {userState.isLoading ? (
                    <Spinner />
                ) : ( */}
                <Main />
                {/* )} */}
            </Wrapper>
        </Container>
    );
};

export default withSplashScreen(Home);
