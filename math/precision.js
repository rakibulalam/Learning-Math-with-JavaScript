import { floor } from './floor.js';
// export const precision = (number) => number - (number - number % 1);
export const precision = (number) => number - floor(number);
console.log(precision(10.25236554));
