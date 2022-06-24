/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Yuriy'
const mySurname = 'Gromov'
const myProfession = 'Web Developer'

// OPTION 1
const personInfo1 =
  'My name is ' + myName + ' ' + mySurname + ' and I am ' + myProfession

console.log(personInfo1)

// OPTION 2
const personInfo2 = `My name is ${myName} ${mySurname} and I am ${myProfession}`

console.log(personInfo2)

//Шаблонные строки

const str = `Я первая строка.
А я вторая строка.

Ну а я третья, но надо мной и подо мной пустая строка и перенос.

Вообще так можно и стихотворение написать.
`;
console.log(str)]

//Многострочные литералы
console.log(`string text line 1
string text line 2`);
// "string text line 1
//  string text line 2"

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// "Fifteen is 15 and not 20."

//Вложенные шаблоны
