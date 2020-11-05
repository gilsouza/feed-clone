import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import * as ROUTES from './routers';
import Home from './pages/Home';

import store from './store';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Route path={ROUTES.HOME} component={Home} />
                </BrowserRouter>

                <GlobalStyles />
            </Provider>
        </>
    );
};

export default App;
