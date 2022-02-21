import React from 'react';
import preLoader from '../preLoader.gif';

const PreLoader = () => {
	return (
		<>
			<img src={preLoader} alt='Loading...' className='preLoader' />
		</>
	);
};

export default PreLoader;
