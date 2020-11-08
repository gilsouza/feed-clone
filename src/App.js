import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Dayjs from 'dayjs';
import locale from 'dayjs/locale/pt-br';

import * as ROUTES from './routers';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import store from './store';

import GlobalStyles, { Container, Wrapper } from './styles/GlobalStyles';

Dayjs.locale(locale);

const App = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Container>
                    <Wrapper>
                        <Switch>
                            <Route exact path={ROUTES.ROOT}>
                                <Redirect to={ROUTES.HOME} />
                            </Route>
                            <Route
                                path={[ROUTES.HOME, ROUTES.POST_DETAIL]}
                                exact
                                component={Home}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </Wrapper>
                </Container>

                <GlobalStyles />
            </Provider>
        </BrowserRouter>
    );
};

export default App;
