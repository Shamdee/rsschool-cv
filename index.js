function myFunction() {
    let x = document.querySelector('ul.nav-list');
    if (x.className === 'nav-list') {
        x.className += ' responsive';
    } else {
        x.className = 'nav-list';
    }
}

// const anchors = document.querySelectorAll('a[href*="#"]')
// for (let anchor of anchors) {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault()

//         const blockID = anchor.getAttribute('href').substr(1)

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// }

hljs.initHighlightingOnLoad();

console.log('My self-rating is 140 points')