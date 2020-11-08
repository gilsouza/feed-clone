import React, { useEffect } from 'react';
import { Container, TwitterIcon, Loading } from './styles.js';

import { useSelector, useDispatch } from 'react-redux';
import {
    selectUser,
    fetchUserInfo,
} from './../../store/features/user/userSlice';

const SplashScreen = (textSplash) => {
    return (
        <Container>
            <TwitterIcon />
            <Loading>
                <span>{textSplash}</span>
            </Loading>
        </Container>
    );
};

const withSplashScreen = (WrappedComponent) => {
    return (props) => {
        const userState = useSelector(selectUser);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(fetchUserInfo());
        }, []);

        const textSplash = userState.isLoading
            ? 'Carregando dados de usuário'
            : 'Erro ao obter dados de usuário. Tente novamente.';

        if (userState.isLoading || userState.hasError)
            return SplashScreen(textSplash);
        return <WrappedComponent {...props} />;
    };
};

export default withSplashScreen;
