
/**
 * сложение
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function fold(a, b) {
    return a + b;
}
/**
 * вычитание
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function subtraction(a, b) {
    if (a > b) {
        return a - b;
    }
    return b - a;
}
/**
 * Умножение
 * @param {*} a 
 * @param {*} b 
 * @returns  
 */
function multiplication(a, b) {
    return a * b;
}
/**
 * Деление
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function division(a, b) {
    return a / b;
}


/**
 * 
 * @param {*} arg1 
 * @param {*} arg2 
 * @param {*} operation 
 * @returns 
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+": return fold(arg1, arg2);
        case "-": return subtraction(arg1, arg2);
        case "*": return multiplication(arg1, arg2);
        case "/": return division(arg1, arg2);
        default: return NaN;
    }
}

/**
 * склонение 
 * @param {number} number здесь задаем количество
 * @param {string} one здесь значение 1 предмета
 * @param {string} two здесь значение 2,3,4 предметов
 * @param {string} many здесь значение 5-100 предметов
 * @returns 
 */
function declination(number, one, two, many) {
    const hundreds = Math.trunc(number % 100);
    const tens = hundreds % 10;

    if (hundreds >= 5 && hundreds <= 20) {
        return many;
    }
    if (tens > 1 && tens < 5) {
        return two;
    }
    if (tens === 1) {
        return one;
    }
    return many;
}