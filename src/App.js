import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './pages/About';
import User from './components/User';
import UserNotFound from './components/UserNotFound';

const App = () => {
	return (
		<div className='App'>
			<Navbar />

			<div className='container mt-3'>
				<Alert />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Search />
								<Users />
							</>
						}
					/>
					<Route path='/about' element={<About />} />
					<Route path='/user/:login' element={<User />} />
					<Route path='*' element={<UserNotFound />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
