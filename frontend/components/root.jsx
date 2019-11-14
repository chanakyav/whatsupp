import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';

import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <ActionCableProvider url='ws://localhost:3000/cable'>
                <App />
            </ActionCableProvider>
        </HashRouter>
    </Provider>
);

export default Root;