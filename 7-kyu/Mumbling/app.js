// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let arr = s.split('')
	// console.log(arr);
	let accumArr = [];
	for (let i = 0; i < arr.length; i++) {
		arr = arr.slice(arr[0], arr[i])
		console.log(arr);
		// for (let j = 1; j <= i.length; j++) {
		// 	accumArr.push(arr[i])

		// }

}
	// console.log(accumArr);





}


accum('abcd')