let displayValue = '';

function appendToDisplay (value) {
    displayValue += value;
    document .getElementById('display') .value = displayValue;
}

function clearDisplay () {
    displayValue = '';
    document .getElementById('display') .value = displayValue;
}

function backspace () {
    displayValue = displayValue .slice(0, -1);
    document .getElementById('display') .value = displayValue;
}

function operate (operator) {
    if (displayValue === '') return;
    displayValue += operator;
    document .getElementById('display') .value = displayValue;
}

function calculate () {
    try {
        const expression = displayValue .replace(/(\d+)/g, match => parseInt(match, 2));
        const result = eval(expression);
        document .getElementById('display') .value = Number(result) .toString(2);
        displayValue = Number(result) .toString(2);
    } catch (error) {
        document .getElementById('display') .value = 'Error';
        displayValue = '';
    }
}

document .addEventListener('keydown', function (event) {
    const key = event .key;

    if (key === '0' || key === '1') {
        appendToDisplay (key);
    } else if (key === '+') {
        operate ('+');
    } else if (key === '-') {
        operate ('-');
    } else if (key === '*') {
        operate ('*');
    } else if (key === '/') {
        operate ('/');
    } else if (key === 'Enter') {
        calculate ();
    } else if (key === 'Backspace') {
        backspace ();
    } else if (key === 'c' || key === 'C') {
        clearDisplay ();
    }
});
