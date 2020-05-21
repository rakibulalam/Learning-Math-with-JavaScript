import { floor } from './floor.js';
export const sqrt = (number) => {
	if (number === 0 || number === 1) return number;

	let lower = 0,
		higher = number;
	while (lower <= higher) {
        let mid =floor((lower + higher) / 2);
        console.log(mid)
		if (mid * mid >= number) higher = mid - 1;
		else lower = mid + 1;
	}
	return higher;
};

console.log(sqrt(20));
