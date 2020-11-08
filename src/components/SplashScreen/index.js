import React, { useEffect } from 'react';
import { Container, TwitterIcon, Loading } from './styles.js';

import { useSelector, useDispatch } from 'react-redux';
import {
    selectUser,
    fetchUserInfo,
} from './../../store/features/user/userSlice';

const SplashScreen = () => {
    return (
        <Container>
            <TwitterIcon />
            <Loading>
                <span>Carregando dados de usuário</span>
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

        if (userState.isLoading) return SplashScreen();
        return <WrappedComponent {...props} />;
    };
};

export default withSplashScreen;
