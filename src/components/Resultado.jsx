import React, { useCallback, useMemo, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, Planes } from '../constants';

const Resultado = () => {
	const { resultadoCot, datos } = useCotizador();
	const { marca, year, plan } = datos;
	const yearRef = useRef(year);

	// const [nombreMarca] = useCallback(
	// 	MARCAS.filter((m) => m.id === Number(marca)),
	// 	[resultadoCot]
	// );
	// const [nombrePlan] = useCallback(
	// 	Planes.filter((p) => p.id === Number(plan)),
	// 	[resultadoCot]
	// );

	const [nombreMarca] = useMemo(() => MARCAS.filter((m) => m.id === Number(marca)), [resultadoCot]);

	const [nombrePlan] = useMemo(() => Planes.filter((p) => p.id === Number(plan)), [resultadoCot]);

	if (resultadoCot === 0) {
		return null;
	}
	return (
		<div className='bg-gray-200 text-center mt-5 p-5 shadow rounded-md'>
			<h2 className='text-gray-500 font-bold text-3xl'>Resumen</h2>
			<p className='my-2'>
				<span className='font-bold text-gray-700'>Marca: </span>
				{nombreMarca.nombre}
			</p>
			<p className='my-2'>
				<span className='font-bold text-gray-700'>Plan: </span>
				{nombrePlan.nombre}
			</p>
			<p className='my-2'>
				<span className='font-bold text-gray-700'>Año del Auto: </span>
				{yearRef.current}
			</p>
			<p className='my-2 text-2xl'>
				<span className='font-bold text-gray-700'>Cotización: </span>
				{resultadoCot}
			</p>
		</div>
	);
};

export default Resultado;
