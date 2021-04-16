Break camelCase

https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"


====================
// complete the function
function solution(string) {

}

====================
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

====================
https://habr.com/ru/post/476082/

Добавление новых элементов

Чтобы добавить новые элементы в массив, мы пишем:

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = arr.splice (2, 0, 100, 101);

Начиная со второго элемента массива будут добавлены числа 100 и 101. Окончательные значения будут следующими:

arr2 // [], так как мы не удалили элемент из массив
аarr // [0, 1, 100, 101, 2, 3, 4, 5, 6, 7, 8]

====================

https://coderoad.ru/586182/%D0%9A%D0%B0%D0%BA-%D0%B2%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2-%D1%81-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%BE%D0%BC-JavaScript

====================
https://coderoad.ru/21077869/Javascript-regex-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D0%B2%D1%81%D0%B5-%D0%B7%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B5-%D0%B1%D1%83%D0%BA%D0%B2%D1%8B
====================
https://qna.habr.com/q/367338
========
https://loremipsum.io/generator/?n=5&t=p
http://www.unit-conversion.info/texttools/count-text-entries/#data
https://stackoverflow.com/questions/34123706/create-dummy-text-using-javascript