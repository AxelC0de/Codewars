делаем из строки массив
выстраиваем числа по порядку в массиве

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // [1, 2, 3, 4, 5]


в возрастающем порядке
function sortfunction(a, b){
  return (a — b)
}


! в убывающем порядке
function sortfunction(a, b){
  return (b - a)
}

делаем новый массив и в него складываем первое и последнее число

делаем из массива строки с разделителем пробел
var myVar4 = a.join('')


====================

самое удачное решение из Ката:

function highAndLow(numbers){
  var arr = numbers.split(' ').sort(function(a, b) { return a - b });
  return arr[arr.length -1] + ' ' + arr[0];
}