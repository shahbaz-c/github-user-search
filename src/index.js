import React from 'react';
import ReactDOM from 'react-dom';
import GithubState from './context/github/GithubState';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<GithubState>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</GithubState>
	</React.StrictMode>,
	document.getElementById('root')
);
