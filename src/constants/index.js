export const MARCAS = [
	{ id: 1, nombre: 'Europeo' },
	{ id: 2, nombre: 'Americano' },
	{ id: 3, nombre: 'Asiático' },
];

const YearMax = new Date().getFullYear();
export const Years = Array.from(new Array(10), (value, index) => YearMax - index);

export const Planes = [
	{ id: 1, nombre: 'Básico' },
	{ id: 2, nombre: 'Completo' },
];
