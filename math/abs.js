/**
 * @description Absolute method
 * @param {Intiger|Float|Double} number 
 */
export const abs = (number) => number * ((number < 0) * -1 + (number > 0));
