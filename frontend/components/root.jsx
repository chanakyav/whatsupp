import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
// import { ActionCableProvider } from 'react-actioncable-provider';

import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <ActionCableProvider url='wss://whatsupp-chat.herokuapp.com/cable'> */}
                <App />
            {/* </ActionCableProvider> */}
        </HashRouter>
    </Provider>
);

export default Root;