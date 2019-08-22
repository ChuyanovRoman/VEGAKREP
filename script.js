var carousel = document.getElementsByClassName('carousel'),
    li = document.getElementsByTagName('li'),
    xw = document.getElementById('feedback'),
    xb = document.getElementById('blackout'),
    flag = 1;

f();

function f() {
    screws();
    setTimeout(hairpin, 10000);
    setTimeout(equipment, 20000);
    setTimeout(wood, 30000);
    setTimeout(f, 40000);
};

function screws() {
    if (flag == 1) {
        flag = 0;
        for (let z = 0; z < carousel.length; z++) {
            carousel[0].style.zIndex = 9;
            carousel[0].style.left = 0;
            setTimeout(() => (
                carousel[1].style.left = 1519 + 'px',
                carousel[2].style.left = 1519 + 'px',
                carousel[3].style.left = 1519 + 'px',
                setTimeout(() => (carousel[z].style.zIndex = 1), 200),
                flag = 1), 1000);
        }
        for (let i = 0; i < li.length; i++) {
            li[5].style.color = '#BFBFBF';
            li[6].style.color = '#BFBFBF';
            li[7].style.color = '#BFBFBF';
            li[4].style.color = '#FF4500';
        }
    }
}

function hairpin() {
    if (flag == 1) {
        flag = 0;
        for (let z = 0; z < carousel.length; z++) {
            carousel[1].style.zIndex = 8;
            carousel[1].style.left = 0;
            setTimeout(() => (
                carousel[0].style.left = 1519 + 'px',
                carousel[2].style.left = 1519 + 'px',
                carousel[3].style.left = 1519 + 'px',
                carousel[z].style.zIndex = 1,
                flag = 1), 1000);
        }
        for (let i = 0; i < li.length; i++) {
            li[4].style.color = '#BFBFBF';
            li[6].style.color = '#BFBFBF';
            li[7].style.color = '#BFBFBF';
            li[5].style.color = '#FF4500';
        }
    }
}

function equipment() {
    if (flag == 1) {
        flag = 0;
        for (let z = 0; z < carousel.length; z++) {
            carousel[2].style.zIndex = 7;
            carousel[2].style.left = 0;
            setTimeout(() => (
                carousel[0].style.left = 1519 + 'px',
                carousel[1].style.left = 1519 + 'px',
                carousel[3].style.left = 1519 + 'px',
                carousel[z].style.zIndex = 1,
                flag = 1), 1000);
        }
        for (let i = 0; i < li.length; i++) {
            li[4].style.color = '#BFBFBF';
            li[5].style.color = '#BFBFBF';
            li[7].style.color = '#BFBFBF';
            li[6].style.color = '#FF4500';
        }
    }
}

function wood() {
    if (flag == 1) {
        flag = 0;
        for (let z = 0; z < carousel.length; z++) {
            carousel[3].style.zIndex = 6;
            carousel[3].style.left = 0;
            setTimeout(() => (
                carousel[0].style.left = 1519 + 'px',
                carousel[1].style.left = 1519 + 'px',
                carousel[2].style.left = 1519 + 'px',
                carousel[z].style.zIndex = 1,
                flag = 1), 1000);
        }
        for (let i = 0; i < li.length; i++) {
            li[4].style.color = '#BFBFBF';
            li[5].style.color = '#BFBFBF';
            li[6].style.color = '#BFBFBF';
            li[7].style.color = '#FF4500';
        }
    }
}

function connection() {
    xw.style.zIndex = '12';
    xb.style.zIndex = '12';
}

function x() {
    xw.style.zIndex = '-1';
    xb.style.zIndex = '-1';
}