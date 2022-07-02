/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

//Example 1
const mySurname = function(name) {
    const thisIsMySurname = 'Yuriy';
    console.log('Hello, ' + thisIsMySurname);
    return thisIsMySurname;
}
mySurname();


//Example 2
const hello = function(name){
    return 'Hello, ' + name;
}
console.log(hello('Yuriy')); 
console.log(hello('Nika')); 