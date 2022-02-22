import React, { Fragment, useContext, useEffect } from 'react';
import UserRepos from './UserRepos';
import { useParams } from 'react-router-dom';
import PreLoader from './PreLoader';

import { faArrowLeft, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GithubContext from '../context/github/githubContext';

const User = () => {
	const githubContext = useContext(GithubContext);

	const { getUser, loading, user, getRepos, repos } = githubContext;

	const { login } = useParams();

	const {
		avatar_url,
		html_url,
		name,
		blog,
		location,
		hireable,
		bio,
		company,
		public_repos,
		public_gists,
		followers,
		following,
		twitter_username,
		updated_at,
	} = user;

	// Format user last update date
	const lastUpdate = new Date(updated_at).toLocaleString('en-US');

	useEffect(() => {
		getUser(login);
		getRepos(login);
	}, []);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<>
			<Link to='/'>
				<FontAwesomeIcon
					icon={faArrowLeft}
					title='Back'
					size='2x'
					className='mt-1 text-dark'
				/>
			</Link>

			<div className='card p-4 mt-4 userInfo'>
				<div className='row'>
					<div className='col-sm-4'>
						<div className='card h-100'>
							<img src={avatar_url} className='card-img-top' alt='...' />
							<div className='card-body'>
								<h5 className='card-title'>{login}</h5>

								<b>Bio: </b>
								{bio === null ? (
									`${login} has not provided a bio.`
								) : (
									<p className='card-text'>{bio}</p>
								)}

								<div className='text-center'>
									<a
										href={html_url}
										target='_blank'
										className='btn btn-success btn-sm mt-3'
									>
										Go To GitHub
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-sm'>
						<div className='card p-3 userInfoCard'>
							<h3>{name === null ? login : name}</h3>
							<p>
								{location === null ? (
									''
								) : (
									<Fragment>
										<b className='text-primary'>
											<FontAwesomeIcon
												icon={faMapMarkerAlt}
												className='text-secondary'
											/>{' '}
											<i>{location}</i>
										</b>
									</Fragment>
								)}
							</p>

							{hireable ? (
								<Fragment>
									<p>
										<b>Hireable:</b> <span className='text-success'>Yes</span>
									</p>
								</Fragment>
							) : (
								<Fragment>
									<p>
										<b>Hireable:</b> <span className='text-danger'>No</span>
									</p>
								</Fragment>
							)}

							<p>
								<b>Company:</b>{' '}
								{company === null ? (
									'N/A'
								) : (
									<Fragment>
										<span>{company}</span>
									</Fragment>
								)}
							</p>

							<p>
								<b>Website:</b>{' '}
								{blog === '' ? (
									`N/A`
								) : (
									<Fragment>
										<span className='text-secondary'>{blog}</span>
									</Fragment>
								)}
							</p>

							<p>
								<b>Last Update:</b> {lastUpdate}
							</p>

							{twitter_username === null ? (
								''
							) : (
								<div className='my-2'>
									<a
										href={`https://twitter.com/${twitter_username}`}
										target='_blank'
									>
										<FontAwesomeIcon icon={faTwitter} size='2x' />
									</a>
								</div>
							)}
						</div>

						<div className='col-sm'>
							<div className='card mt-4 p-3'>
								<span className='badge bg-success my-2'>
									Followers: {followers}
								</span>
								<span className='badge bg-primary my-2'>
									Following: {following}
								</span>
								<span className='badge bg-dark my-2'>
									Public Repos: {public_repos}
								</span>
								<span className='badge bg-danger my-2'>
									Public Gists: {[public_gists]}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='card p-4 mt-4 userInfo'>
				<h4 className='text-light'>{login}'s repositories</h4>
				<UserRepos repos={repos} />
			</div>
		</>
	);
};

export default User;
