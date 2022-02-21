import React from 'react';
import RepoItem from './RepoItem';

const UserRepos = ({ repos }) => {
	return repos.map((repo) => {
		const { id } = repo;

		return <RepoItem repo={repo} key={id} />;
	});
};

export default UserRepos;
