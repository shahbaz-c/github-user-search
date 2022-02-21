import React, { useEffect, useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
	DEFAULT_USERS,
	SEARCH_USERS,
	GET_USER,
	SET_LOADING,
	GET_REPOS,
	CLEAR_USERS,
	SEARCH_ALERT,
	REMOVE_ALERT,
} from '../types';

let clientID;
let clientSecret;

if (process.env.NODE_ENV !== 'production') {
	clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
	clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	clientID = process.env.GITHUB_CLIENT_ID;
	clientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	// Homepage Default Users
	useEffect(() => {
		setIsLoading();

		const gitHubApi = async () => {
			const response = await fetch(
				`https://api.github.com/users?client_id=${clientID}&&client_secret=${clientSecret}`
			);
			const data = await response.json();
			dispatch({
				type: DEFAULT_USERS,
				payload: data,
			});
		};
		gitHubApi();
	}, []);

	// Search Users
	const searchUsers = async (text) => {
		setIsLoading();

		const response = await fetch(
			`https://api.github.com/search/users?q=${text}&client_id=${clientID}&&client_secret=${clientSecret}`
		);
		const data = await response.json();

		dispatch({
			type: SEARCH_USERS,
			payload: data.items,
		});
	};

	// Get User
	const getUser = async (login) => {
		setIsLoading();

		const response = await fetch(
			`https://api.github.com/users/${login}?client_id=${clientID}&&client_secret=${clientSecret}`
		);
		const data = await response.json();

		dispatch({
			type: GET_USER,
			payload: data,
		});
	};

	// Set Loading
	const setIsLoading = () => {
		dispatch({ type: SET_LOADING });
	};

	// Get Repos
	const getRepos = async (login) => {
		setIsLoading();

		const response = await fetch(
			`https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${clientID}&&client_secret=${clientSecret}`
		);
		const data = await response.json();

		dispatch({
			type: GET_REPOS,
			payload: data,
		});
	};

	// Clear Users
	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
	};

	// Search Alert
	const searchAlert = (msg) => {
		dispatch({
			type: SEARCH_ALERT,
			payload: { msg: msg },
		});

		setTimeout(() => {
			dispatch({ type: REMOVE_ALERT });
		}, 3000);
	};

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				alert: state.alert,
				searchUsers,
				getUser,
				getRepos,
				clearUsers,
				searchAlert,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubState;
