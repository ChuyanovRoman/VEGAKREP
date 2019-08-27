var xw = document.getElementById('feedback'),
    xb = document.getElementById('blackout'),
    flag2 = 1;

function nam(e) {
    e.value = e.value.replace(/['0-9','/:'=!_.@#{}№<$|%()-+^&*~`ёЁ>?";']/g, '');
    e.value = e.value.replace(/[\s]{2}/g, '');
}

function tel(e) {
    e.value = e.value.replace(/['а-я','a-z','A-Z','А-Я','\s/:'=!_.@#{}№<$|%^&*~`ёЁ>?";']/g, '');
    e.value = e.value.replace(/[()+-]{2}/g, '');
    if (e.value.length == 1) {
        e.value = '+7(' + e.value.replace(/[()+-]/g, '');
    } else if (e.value.length == 2) {
        e.value = '+7(';
    } else if (e.value.length == 6) {
        if (flag2 == 1) {
            flag2 = 0;
            e.value = e.value + ')';
        } else {
            flag2 = 1;
            e.value = e.value.slice(0, -1);
        }
    } else if (e.value.length == 10) {
        if (flag2 == 0) {
            flag2 = 1;
            e.value = e.value + '-';
        } else {
            flag2 = 0;
            e.value = e.value.slice(0, -1);
        }
    } else if (e.value.length == 13) {
        if (flag2 == 1) {
            flag2 = 0;
            e.value = e.value + '-';
        } else {
            flag2 = 1;
            e.value = e.value.slice(0, -1);
        }
    }
}

function mai(e) {
    e.value = e.value.replace(/[а-я','А-Я','/:'=!_#{}№<$|%()-+^&*~`ёЁ>?";']/g, '');
    e.value = e.value.replace(/[.@-]{2}/g, '');
}

function connection() {
    xw.style.zIndex = '12';
    xb.style.zIndex = '12';
}

function x() {
    xw.style.zIndex = '-1';
    xb.style.zIndex = '-1';
}