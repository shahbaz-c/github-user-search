import React from 'react';
import { Link } from 'react-router-dom';

const UserCards = ({ user }) => {
	const { login, avatar_url, html_url } = user;

	return (
		<div className='user-profiles mt-3'>
			<div className='row g-5'>
				<div className='col'>
					<div className='card mx-3'>
						<div className='profile-bg'>
							<img src='' alt='' />
						</div>
						<div className='profile-img'>
							<img src={avatar_url} alt={login} />
						</div>
						<div className='user-info'>
							<h2>{login}</h2>
						</div>
						<div className='mx-2 mb-3'>
							<Link
								to={`/user/${login}`}
								className='d-grid btn btn-dark btn-sm mx-2 mb-3'
								title='More'
							>
								More
							</Link>

							<a
								href={html_url}
								target='_blank'
								className='d-grid btn btn-success btn-sm mx-2'
								title='GitHub'
							>
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCards;
