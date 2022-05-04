import React, { Fragment } from 'react';
import { MARCAS, Years, Planes } from '../constants';
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {
	const { datos, handleChangeDatos, error, setError } = useCotizador();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.values(datos).includes('')) {
			setError('Todos los campos son Obligatorios');
			setTimeout(() => {
				setError('');
			}, 4000);
			return;
		}

		setError('');
	};

	return (
		<>
			<form action='' onSubmit={handleSubmit}>
				<div className='my-5 flex flex-col items-stretch'>
					<label htmlFor='' className='block mb-3 font-bold self-center text-gray-500 uppercase'>
						Marca
					</label>
					<select
						name='marca'
						id='marca'
						className='w-1/2 p-3 self-center bg-white border border-orange-500 rounded-lg text-center text-gray-700'
						onChange={(e) => handleChangeDatos(e)}
						value={datos.marca}>
						<option value=''>-- Selecciona Marca --</option>
						{MARCAS.map((marca) => (
							<option key={marca.id} value={marca.id}>
								{marca.nombre}
							</option>
						))}
					</select>
				</div>

				<div className='my-5 flex flex-col items-stretch'>
					<label htmlFor='' className='block mb-3 font-bold self-center text-gray-500 uppercase'>
						Año
					</label>
					<select
						name='year'
						id='year'
						className='w-1/2 p-3 bg-white border border-orange-500 rounded-lg text-center text-gray-700 self-center'
						onChange={(e) => handleChangeDatos(e)}
						value={datos.year}>
						<option value=''>-- Selecciona Año --</option>
						{Years.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</select>
				</div>

				<div className='my-5 flex flex-col items-stretch'>
					<label htmlFor='' className='block mb-3 font-bold text-gray-500 uppercase self-center'>
						Elige el Plan que desees
					</label>
					<div className='flex gap-3 items-center self-center'>
						{Planes.map((plan) => (
							<Fragment key={plan.id}>
								<label>{plan.nombre}</label>
								<input
									type='radio'
									name='plan'
									value={plan.id}
									onChange={(e) => handleChangeDatos(e)}
								/>
							</Fragment>
						))}
					</div>
				</div>
				{error && <Error />}

				<div className='flex justify-center mt-5'>
					<input
						type='submit'
						className='bg-orange-500 p-3 rounded-lg text-2xl font-bold tracking-wide hover:bg-orange-600 transition-colors cursor-pointer w-6/12'
						value='Cotizar'
					/>
				</div>
			</form>
		</>
	);
};

export default Formulario;
