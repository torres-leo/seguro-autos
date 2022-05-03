import React from 'react';
import Formulario from './Formulario';

const AppSeguto = () => {
	return (
		<>
			<header className='my-10'>
				<h1 className='text-white text-center text-4xl font-bold tracking-wide'>
					Cotizador de Seguros de Autos
				</h1>
			</header>
			<main className='bg-white xsm:w-2/4 md:w-2/4 lg:w-2/4 mx-auto shadow rounded-lg p-10'>
				<Formulario />
			</main>
		</>
	);
};

export default AppSeguto;
