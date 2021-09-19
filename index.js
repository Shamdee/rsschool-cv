function myFunction() {
    let x =document.querySelector('div.topnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}