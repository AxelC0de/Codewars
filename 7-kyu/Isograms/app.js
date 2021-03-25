function isIsogram(str) {
	let arrComp = str.toLowerCase().split('')
	// console.log(arrComp);
	let arr = str.toLowerCase().split('')
	// console.log(arr);

	let uniqueArr = new Set(arr)
	// console.log(uniqueArr);
	let backToArr = [...uniqueArr]
	// console.log(backToArr);
let res = ''
	if (arrComp.length === backToArr.length || str.length === 0) {
res = true
} else {
		res = false
	}
	return console.log(res);
}

// isIsogram("Dermatoglyphics")
// isIsogram("aba")
isIsogram("moOse")