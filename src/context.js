import React, { useState, useEffect, useContext, useCallback } from 'react';

const url = 'https://api.github.com/users/';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState('mojombo');

	const fetchUserData = useCallback(async () => {
		setLoading(true);

		try {
			const response = await fetch(`${url}${user}`);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	});

	return <AppContext.Provider value={user}></AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
