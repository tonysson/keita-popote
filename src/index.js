import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { DataProvider } from './Context/Context';

import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<DataProvider>
			<React.StrictMode>
				<HelmetProvider>
					<App />
				</HelmetProvider>
			</React.StrictMode>
		</DataProvider>
	</Router>,
);


