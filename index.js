function myFunction() {
    let x = document.querySelector('ul.nav-list');
    if (x.className === 'nav-list') {
        x.className += ' responsive';
    } else {
        x.className = 'nav-list';
    }
}



hljs.initHighlightingOnLoad();
