import { useState, createContext } from 'react';
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
	const [datos, setDatos] = useState({
		marca: '',
		year: '',
		plan: '',
	});

	const [error, setError] = useState('');
	const [resultadoCot, setResultadoCot] = useState(0);

	const handleChangeDatos = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const cotizarSeguro = () => {
		// base
		let resultado = 2000;

		//Obtener diferencia de años
		const diferencia = obtenerDiferenciaYear(datos.year);
		// console.log(diferencia);

		// Hay que restar el 3% por cada año que pase
		resultado -= (diferencia * 3 * resultado) / 100;
		// console.log('3%: ', resultado);

		// Europeo 30%
		// Americano 15%
		// Asiatico 5%
		resultado *= calcularMarca(datos.marca);
		// console.log('% según marca: ', resultado);

		// Plan basico incrementa 20%
		// Plan completo incrementa 50%
		resultado *= calcularPlan(datos.plan);

		// Colocar solamente dos decimales
		// FORMA 1:
		// resultado = Number(resultado.toFixed(2));
		// console.log('plan: ', resultado);
		// FORMA 2:
		// formateando dinero
		resultado = formatearDinero(resultado);
		// console.log('plan: ', resultado);
		setResultadoCot(resultado);
	};

	return (
		<CotizadorContext.Provider value={{ datos, handleChangeDatos, error, setError, cotizarSeguro, resultadoCot }}>
			{children}
		</CotizadorContext.Provider>
	);
};

export { CotizadorProvider };
export default CotizadorContext;
