// 1 Функции
// Function Declaration
// function greet(name) {
//     console.log('Привет, ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2, ', name)
// }




// greet('Васек')
// greet2('Серега')
// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции 
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval) //clearTimeout
//     } else {
//     console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции 
// function greet(nameA) {
//     console.log('Привет, ', nameA)
// }

// const arrow = (nameA, age) => {
//     console.log('Привет, ', nameA, age)
// }

// const arrow2 = nameA => console.log('Привет, ', nameA)

// // arrow2('Sergey')

// const pow2 = num => {
//     return num ** 2
// }

// const pow3 = num => num ** 2


// console.log(pow3(5))

// 4 Параметры по умолчанию 
// const sum = (a = 2, b = a * 2) => a + b 
// console.log(sum())

// function sumAll(...all) {
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// 5 Замыкания
// function createMember(nameA) {
//     return function(lastName) {
//         console.log(nameA, lastName)
//     }
// }

// const logWithLastName = createMember('Sergey')
// console.log(logWithLastName('Bagdasaryan'))
// console.log(logWithLastName('Terentyev'))


