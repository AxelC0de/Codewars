function highAndLow(numbers) {
	let arr = numbers.split(' ')



	arr.sort(function (a, b) {
		return b -a;
	});

console.log(arr);


	let arrRes = [];



	arrRes.push(arr[0]);
	arrRes.push(arr[arr.length-1])

	arrRes = arrRes.join(' ')
	return console.log(arrRes);

}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")


