import { power } from './power.js';
/**
 * @description handle large exponents.
 * @param {*} base 
 * @param {*} exponent 
 * @param {*} modulus 
 */
export const modularExponentiation = (base, exponent = 2, modulus) => {
	if (modulus === 1) return 0;
	let value = 1;
	for (let i = 0; i < exponent; i++) {
		value = (value * base) % modulus;
	}
	return value;
};
