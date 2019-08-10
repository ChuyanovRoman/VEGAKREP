var xw = document.getElementById('feedback'),
    xb = document.getElementById('blackout');

function connection() {
    xw.style.zIndex = '3';
    xb.style.zIndex = '3';
}

function x() {
    xw.style.zIndex = '-1';
    xb.style.zIndex = '-1';
}