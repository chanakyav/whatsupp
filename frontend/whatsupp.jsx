import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
        // only for testing
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDom.render(<Root store={store}/>, root);
});