// export const sqrt = (number) => {
// 	if (number === 0 || number === 1) return number;

// 	let lower = 0,
// 		higher = number,
// 		precission = 0.000000001;
// 	while (lower <= higher && higher>precission) {
// 		let mid = (lower + higher) / 2;
// 		if (mid * mid >= number) higher = mid - 1;
// 		else lower = mid + 1;
// 	}
// 	return higher;
// };
/**
 * @description Babylonian method for square root;
 * @param {Number} number 
 * @return {Number}
 */
export const sqrt=(number)=>
{
    let precision = 0.0000000000001; //define the precision of your result
    let s = number;

    while ((s - number / s) > precision) //loop until precision satisfied 
    {
        s = (s + number / s) / 2;
    }
    return s;
}
console.log(sqrt(2000));
