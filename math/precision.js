import { floor } from './floor.js';
// export const precision = (number) => number - (number - number % 1);
/**
 * @description return precission from the number 
 * @param {Number} number 
 * @return {Number}
 */
export const precision = (number) => number - floor(number);

console.log(precision(10.25236554));
