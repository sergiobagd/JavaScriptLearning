// 1 Переменные 
// camelCase
// const firstName = 'Sergey';
// // const age = 20; //number
// const isProgrammer = true; //boolean

// const _ = 'private';
// const $ = 'some value';

// const if = 'error' // error
// const withNum5 = '5';
// const 5withNum = 'error' // error

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2022;
// const birthYear = 2002;

// const age = currentYear + birthYear
// const a = 10;
// const b = 5;

// let c = 32;
// c = c + a;
// c += a;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);
// console.log(c)

// 4 Типы данных
// const isProgrammer = true;
// const name = 'Sergey';
// const age = 20;
// let x

// console.log(typeof isProgrammer);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// 5 Приоритет операторов 
// const fullAge = 20;
// const birthYear = 2002;
// const currentYear = 2022;

// // > < >= <=
// const isfullAge = currentYear - birthYear >= fullAge;
// console.log(isfullAge);

// 6 Условные операторы
const courseStatus = 'failed'; // ready, failed, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно начать проходить!')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс провален...')
// };


// const isReady = true;

// if (isReady) {
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Всё готово!') : console.log('Всё не готово!');


// const num1 = 42; // number
// const num2 = '42'; // string

// console.log(num1 === num2)

// 7 Булевая логика


// 8 Функции

// function calculateAge(year) {
//     return 2022 - year
// };

// // const myAge = calculateAge(2002);
// // console.log(myAge);

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Сергей', 2023)

// 9 Массивы
// const cars = ['Mazda', 'Mersedes', 'Ford']
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Mazda', 'Mersedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }


// 11 Объекты
const person = {
    firstName: 'Sergey',
    lastName: 'Bagdasaryan',
    year: 2002,
    languages: ['Armenian', 'Russian', 'English', 'French'],
    hasWife: false,
    greet: function() {
        console.log('Barev dzes!')
    }
}

console.log(person.greet)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)