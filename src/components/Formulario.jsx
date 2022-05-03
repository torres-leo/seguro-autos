import React, { Fragment } from 'react';
import { MARCAS, Years, Planes } from '../constants';

const Formulario = () => {
	return (
		<>
			<form action=''>
				<div className='my-5 flex flex-col items-stretch'>
					<label htmlFor='' className='block mb-3 font-bold self-center text-gray-500 uppercase'>
						Marca
					</label>
					<select
						name='marca'
						id='marca'
						className='w-1/2 p-3 self-center bg-white border border-orange-500 rounded-lg text-center text-gray-700'>
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
						className='w-1/2 p-3 bg-white border border-orange-500 rounded-lg text-center text-gray-700 self-center'>
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
								<input type='radio' name='plan' value={plan.id} />
							</Fragment>
						))}
					</div>
				</div>

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
