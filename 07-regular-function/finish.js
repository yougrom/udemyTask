/** ЗАДАЧА 7 - Объявление и вызов функции
 *
 * 1. Объявите функцию, использую ключевое слово "function"
 *
 * 2. Не указывайте параметры функции
 *
 * 3. Внутри функции выведите в консоль своё имя
 *
 * 4. Вызовите функцию
 */
 const myNameIs = function() {
    const myName = 'Yuriy';
    console.log(myName);
} 
myNameIs();
// Example 2
function printMyName() {
    const thisIsMyName = 'Yuriy';
    console.log(thisIsMyName);
}
printMyName();