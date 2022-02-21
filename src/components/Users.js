import React, { useContext } from 'react';
import UserCards from './UserCards';
import PreLoader from './PreLoader';
import GithubContext from '../context/github/githubContext';

const Users = () => {
	const githubContext = useContext(GithubContext);

	const { loading, users } = githubContext;

	if (loading) {
		return <PreLoader />;
	} else {
		return (
			<div className='userGrid'>
				{users.map((user) => {
					return <UserCards key={user.id} user={user} />;
				})}
			</div>
		);
	}
};

export default Users;
