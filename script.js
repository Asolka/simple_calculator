var display = document.getElementById('display');
var total = null;
var operateur = null;

/* BOUTON 0 */
document.getElementById('btn0').addEventListener('click', () => {
    if (display.value != '') {
        display.value += '0';
    }
});

/* BOUTON 1 */
document.getElementById('btn1').addEventListener('click', () => {
    display.value += '1';
});

/* BOUTON 2 */
document.getElementById('btn2').addEventListener('click', () => {
    display.value += '2';
});

/* BOUTON 3 */
document.getElementById('btn3').addEventListener('click', () => {
    display.value += '3';
});

/* BOUTON 4 */
document.getElementById('btn4').addEventListener('click', () => {
    display.value += '4';
});

/* BOUTON 5 */
document.getElementById('btn5').addEventListener('click', () => {
    display.value += '5';
});

/* BOUTON 6 */
document.getElementById('btn6').addEventListener('click', () => {
    display.value += '6';
});

/* BOUTON 7 */
document.getElementById('btn7').addEventListener('click', () => {
    display.value += '7';
});

/* BOUTON 8 */
document.getElementById('btn8').addEventListener('click', () => {
    display.value += '8';
});

/* BOUTON 9 */
document.getElementById('btn9').addEventListener('click', () => {
    display.value += '9';
});

/* BOUTON C */
document.getElementById('btnC').addEventListener('click', () => {
    display.value = '';
    total = null;
    operateur = null;
});

/* BOUTON + */
document.getElementById('btn+').addEventListener('click', () => {
    if (display.value != '') {
        if (total === null) {
            total = parseFloat(display.value);
        } else {
            total += parseFloat(display.value);
        }
        operateur = '+';
        display.value = '';
    }
})

/* BOUTON - */
document.getElementById('btn-').addEventListener('click', () => {
    if (display.value != '') {
        if (total === null) {
            total = parseFloat(display.value);
        } else {
            total -= parseFloat(display.value);
        }
        operateur = '-';
        display.value = '';
    }
})

/* BOUTON X */
document.getElementById('btn*').addEventListener('click', () => {
    if (display.value != '') {
        if (total === null) {
            total = parseFloat(display.value);
        } else {
            total *= parseFloat(display.value);
        }
        operateur = '*';
        display.value = '';
    }
})

/* BOUTON / */
document.getElementById('btn/').addEventListener('click', () => {
    if (display.value != '') {
        if (total === null) {
            total = parseFloat(display.value);
        } else if (parseFloat(display.value) !== 0) {
            total /= parseFloat(display.value);
        }
        operateur = '/';
        display.value = '';
    }
})

/* BOUTON = */
document.getElementById('btn=').addEventListener('click', () => {
    if (display.value !== '' && total !== null) {
        const currentValue = parseFloat(display.value);
        switch(operateur) {
            case '+':
                total += currentValue;
                break;
            case '-':
                total -= currentValue;
                break;
            case '*':
                total *= currentValue;
                break;
            case '/':
                if (currentValue !== 0) {
                    total /= currentValue;
                }
                break;
        }
        display.value = total.toString();
        total = null;
        operateur = null;
    }
})