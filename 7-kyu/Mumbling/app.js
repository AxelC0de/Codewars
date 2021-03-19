function disemvowel(str) {
	let arr = str.split('');
	console.log(arr);

	str = [];

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] !== 'a'
			&& arr[i] !== 'e'
			&& arr[i] !== 'i'
			&& arr[i] !== 'o'
			&& arr[i] !== 'u'
			&& arr[i] !== 'A'
			&& arr[i] !== 'E'
			&& arr[i] !== 'I'
			&& arr[i] !== 'O'
			&& arr[i] !== 'U'

			)
		{
			str.push(arr[i])
	}
	}

	str = str.join('')
return str;
}
console.log(disemvowel('This website is for losers LOL!'));
