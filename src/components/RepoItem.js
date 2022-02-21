import React from 'react';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RepoItem = ({ repo }) => {
	const { html_url, name, description, stargazers_count, updated_at, forks } =
		repo;

	// Format user last update date
	const lastUpdate = new Date(updated_at).toLocaleString('en-US');

	return (
		<div className='row'>
			<div className='col-sm'>
				<div className='card my-2'>
					<h3 className='repos d-flex m-2 mb-0'>
						<a
							href={html_url}
							target='_blank'
							className='text-decoration-none me-auto'
						>
							{name}
						</a>
						<p className='m-0 repoPublic'>
							<span className='badge bg-secondary'>
								{repo.private === false ? 'Public' : 'Private'}
							</span>
						</p>
					</h3>

					<p className='mx-2 repoDesc'>
						<i>{description}</i>
					</p>
					<p>
						<FontAwesomeIcon icon={faStar} className='text-warning ms-2' />
						<span className='ms-1'>{stargazers_count}</span>
						<FontAwesomeIcon
							icon={faCodeBranch}
							className='ms-3 text-success'
						/>{' '}
						{forks}
					</p>
					<p className='mx-2 updateDesc'>
						{' '}
						<b>Last Update:</b> {lastUpdate}
					</p>
				</div>
			</div>
		</div>
	);
};

export default RepoItem;
