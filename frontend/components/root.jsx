import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ActionCableProvider } from "react-actioncable-provider";

import App from './App';

const localhostWebSocket = "ws://localhost:3000/cable";
const herokuappWebSocket = "wss://whatsupp-chat.herokuapp.com/cable";
const currWebSocket = window.location.hostname === 'localhost' ? localhostWebSocket : herokuappWebSocket

const Root = ({ store }) => (
	<Provider store={store}>
		<HashRouter>
			<ActionCableProvider url={currWebSocket}>
				<App />
			</ActionCableProvider>
		</HashRouter>
	</Provider>
);

export default Root;