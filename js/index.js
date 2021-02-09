//1

Array.from(document.links).forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = '#fff'
    } )
})

//2 
let enterEventCount = 1
const header = document.querySelector('header')

header.addEventListener('mouseenter', () => {
    header.style.color = 'red'
    console.log(`You're mouse entered the header ${enterEventCount++} times.`)
    alert(`Also check the console!`)
})

//3 
let leaveEventCount = 1
header.addEventListener('mouseleave', () => {
    header.style.color = 'black'
    console.log(`You're mouse has exited the ${leaveEventCount++} times.`)
    alert(`Sorry to bother you again! These two events will trigger when your mouse enters or leaves the header element. Also, check the console!`)
})
