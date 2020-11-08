import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import * as ROUTES from './routers';
import Home from './pages/Home';

import store from './store';

import GlobalStyles, { Container, Wrapper } from './styles/GlobalStyles';

const NoMatchRoute = () => <div>404 Page</div>;
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
                            <Route component={NoMatchRoute} />
                        </Switch>
                    </Wrapper>
                </Container>

                <GlobalStyles />
            </Provider>
        </BrowserRouter>
    );
};

export default App;
