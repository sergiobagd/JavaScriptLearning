// Массивы 
const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
// const people = [
//     {name: 'Sergey', budget: 3500},
//     {name: 'Victoria', budget: 3200},
//     {name: 'Elizabeth', budget: 1500},
// ]
const fib = [1, 1, 2, 3, 5, 8, 13, 21]
// console.log(cars)

// Function
// function addItemToEnd() {

// }

// Method
// cars.push('Hyundai')
// console.log(cars)

// cars.unshift('Lada')
// console.log(cars)

// const firstItem = cars.shift()
// const lastItem = cars.pop()
// console.log(firstItem)
// console.log(lastItem)
// console.log(cars)

// console.log(cars.reverse())

// const index = cars.indexOf('BMW')
// cars[index] = 'Audi'
// console.log(cars)
// let foundedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         foundedPerson = person
//     }
// }

// console.log(foundedPerson)

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// console.log(people[index])
// const person = people.find(function(person) {
//     return person.budget === 35002
// })
// console.log(person)

// const person = people.find(person => person.budget === 3500)
// console.log(person)

// console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers)



// Задача 1
// const text = 'Я долбаеб и мы учимся в юургу'
// const reverseText = text.split('')
// console.log(reverseText)
// console.log(reverseText.reverse().join(''))

const people = [
    {name: 'Sergey', budget: 3500},
    {name: 'Victoria', budget: 3200},
    {name: 'Elizabeth', budget: 1500},
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {  
        acc += person.budget
        return acc
    }, 0)

console.log(allBudget)