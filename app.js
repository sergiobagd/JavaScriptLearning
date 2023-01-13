const  heading = document.getElementById('hey')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('h2') // Всегда возвращает один 1 попавшийся элемент
// console.dir(heading2)
// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
// console.log(h2List)
const heading3 = h2List[1]
// console.log(heading3)


// console.log(heading2)


// console.dir(heading.textContent)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 2000)

setTimeout(() => {
    addStylesTo(heading2, 'Is my favorite Programming Language!', 'blue')
}, 3000)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    url = event.target.getAttribute('href')

    window.location = url
})
setTimeout(() => {
    addStylesTo(link, 'And I love it so much :)', 'orange', '3rem')
}, 4000)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('click', () => {
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#000'
    }
})

