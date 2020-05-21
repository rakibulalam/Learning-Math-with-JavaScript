export const floorSqrt = (number) => {
	if (number === 0 || number === 1) return number;
	let i = 1,
		result = 1;
	while (result <= number) {
		i++;
		result = i * i;
	}
	return i - 1;
};
console.log(floorSqrt(2));
