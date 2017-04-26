function do_math(num1, num2, operator){
    let result = null;
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
        case 'x':
        case 'X':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Please give valid inputs";
    }
    const resultStr = "The value of " + num1 + " " + operator + " " + num2 + " is equal to:";
    console.log(resultStr, result);
    return true;
}

do_math(1, 1, '/');

do_math(1, 1, '*');

do_math(1, 1, '-');

do_math(1, 1, '+');

do_math(1, 1, "cats");