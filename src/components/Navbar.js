import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg border-bottom'>
			<div className='container-fluid'>
				<Link to='/' className='text-decoration-none'>
					<h1 className='navTitle'>
						<FontAwesomeIcon icon={faGithub} className='ms-5 mt-2' /> User
						Search
					</h1>
				</Link>
				<button
					className='navbar-toggler text-primary'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarToggler'
					aria-controls='navbarToggler'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<FontAwesomeIcon icon={faBars} size='lg' className='text-light' />
				</button>
				<div className='collapse navbar-collapse' id='navbarToggler'>
					<ul className='navbar-nav ms-auto me-5'>
						<li className='nav-item'>
							<Link
								to='/'
								className='text-decoration-none text-light nav-link'
								title='Home'
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/about'
								className='text-decoration-none text-light nav-link'
								title='About'
							>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
