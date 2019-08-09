var xw = document.getElementsByClassName('feedback'),
    xb = document.getElementsByClassName('blackout');

function x() {
    for (let i = 0; i < xw.length; i++) {
        xw[i].style.zIndex = '-1';
        xb[i].style.zIndex = '-1';
    }
}