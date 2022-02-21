import React, { useContext, useState } from 'react';
import GithubContext from '../context/github/githubContext';

const Search = () => {
	const githubContext = useContext(GithubContext);

	const [text, setText] = useState('');

	const searchSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			githubContext.searchAlert('Please enter a user');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	const searchInput = (e) => {
		setText(e.target.value);
	};

	return (
		<div>
			<form className='d-flex pt-2 mb-2' onSubmit={searchSubmit}>
				<input
					type='text'
					className='form-control me-2'
					placeholder='Search GitHub Users...'
					aria-label='Search'
					value={text}
					onChange={searchInput}
				/>
				<button className='btn btn-dark' type='submit' title='Search'>
					Search
				</button>
				{githubContext.users.length > 0 && (
					<div className='ms-2'>
						<button
							className='btn btn-danger'
							title='Clear'
							onClick={githubContext.clearUsers}
						>
							Clear
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default Search;
