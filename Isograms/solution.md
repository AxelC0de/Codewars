
isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case

====================
function isIsogram(str){
  //...
}
====================
Test.assertSimilar( isIsogram("Dermatoglyphics"), true );
Test.assertSimilar( isIsogram("isogram"), true );
Test.assertSimilar( isIsogram("aba"), false, "same chars may not be adjacent" );
Test.assertSimilar( isIsogram("moOse"), false, "same chars may not be same case" );
Test.assertSimilar( isIsogram("isIsogram"), false );
Test.assertSimilar( isIsogram(""), true, "an empty string is a valid isogram" );

====================
- [x] 1. Приводим строку к нижнему регистру, преобразуем в массив arrComp  - это будет экземпляр для сравнения
2.
- [x] 3. Преобразуем исходную  строку str  в массив arr split('')
- [x] 4. Используем Set для того, чтобы оставить только уникальные значения
   uniqueArr = new Set(arr)
- [x] 5. Преобразуем обьект обратно в массив backToArr =[...uniqueArr]
6. Если длина массивов arrComp и arrComp равна - то True, иначе False