import React from 'react';
import useCotizador from '../hooks/useCotizador';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.css';

const Error = () => {
	const { error } = useCotizador();

	return (
		<div className='flex flex-col rounded-lg border text-center p-3 bg-red-100 border-red-400 text-red-700 font-bold tracking-wider capitalize w-2/3 centrar'>
			<FontAwesomeIcon icon={faCircleExclamation} size='2xl' className='mb-2' />
			{error}
		</div>
	);
};

export default Error;
