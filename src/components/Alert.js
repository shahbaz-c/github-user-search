import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import GithubContext from '../context/github/githubContext';

const Alert = () => {
	const githubContext = useContext(GithubContext);

	const { alert } = githubContext;

	return (
		alert !== null && (
			<div className={`alert alert-warning`} role='alert'>
				<FontAwesomeIcon icon={faExclamationTriangle} className='me-1' />{' '}
				{alert.msg}
			</div>
		)
	);
};

export default Alert;
