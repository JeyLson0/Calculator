



///////////////////////////////////////////////////////

//Animation
let numpad = document.querySelectorAll(".keypad");

numpad.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        element.setAttribute('style','font-size: 40px;')
    })
    element.addEventListener('mousedown', (e) => {
        element.setAttribute('style','font-size: 50px;')
    })
    element.addEventListener('mouseup', (e) => {
        element.setAttribute('style','font-size: 40px;')
    })
    element.addEventListener('mouseout', (e) => {
        element.removeAttribute('style','font-size: 40px;')
    })
});


//Numbers
let screenCurrentExpression = document.querySelector('#current_expression')
let arr = []
let currentExpression = 0;

let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('mousedown', (e) => {
        let val = e.target.value
        arr.push(val);
        currentExpression = Number(arr.join(''));
        if (sign == 0) {
            screenCurrentExpression.textContent = currentExpression;
            console.log(currentExpression)
        } 
        if (sign == 1) {
            currentExpression *= -1;
            screenCurrentExpression.textContent = currentExpression;
            console.log(currentExpression)
        }
    })
})

//Decimal period
let decimal = document.querySelector('#period');

function removeDecimal(e) {
    arr.push(e.target.value)
    currentExpression = arr.join('');
    screenCurrentExpression.textContent= currentExpression;
    decimal.removeEventListener('mousedown', removeDecimal);
}
decimal.addEventListener('mousedown', removeDecimal);


//C or backspace
let remove = document.querySelector('#backspace')
remove.addEventListener('mousedown', (e) => {
    let removed = arr.pop()
    if (removed == '.'){
        decimal.addEventListener('mousedown', removeDecimal);
    }
    console.log(removed)
    currentExpression = Number(arr.join(''));
    if (sign == 0) {
        screenCurrentExpression.textContent = currentExpression;
        console.log(currentExpression)
    } 
    if (sign == 1) {
        currentExpression *= -1;
        screenCurrentExpression.textContent = currentExpression;
        console.log(currentExpression)
    }
});

// AC or clear
let clear = document.querySelector('#ac');
clear.addEventListener('mousedown', (e) => {
    arr.splice(0, arr.length)
    currentExpression = Number(arr.join(''));
    decimal.addEventListener('mousedown', removeDecimal);
    sign = 0; 
    screenCurrentExpression.textContent = currentExpression;
})

//Negative/Positive : where positive is 0 and negative is 1
let sign = 0; //positive

let numSign = document.querySelector('#integer')
numSign.addEventListener('mousedown', (e) => {
    if (sign == 0) {
        sign = 1;
        console.log('negative')
        currentExpression *= -1
        console.log(currentExpression)
        return screenCurrentExpression.textContent = currentExpression;
    };
    if (sign == 1) {
        sign = 0;
        console.log('positive')
        currentExpression *= -1
        console.log(currentExpression)
        return screenCurrentExpression.textContent = currentExpression;
    }
})

// operations
/* function addition(a,b) {
    currentExpression = a+b;
    return screenCurrentExpression.textContent = currentExpression;
}

function subtract(a,b) {
    let c = a-b;
    return c;
}

function multiplication(a,b) {
    let c = a*b;
    return c;
}

function division (a,b) {
    let c = a/b;
    return c;
} */

let addition = document.querySelector('#add');
let division = document.querySelector('#divide');
let multiplication = document.querySelector('#multiply');
let subtraction = document.querySelector('#subtract');
let previousValue = document.querySelector('#previousValue')
let num = 0;
let newArr = []

addition.addEventListener('mousedown', (e) => {
    num = currentExpression;
    newArr.push(num);
    console.log(`newArr = ${newArr}`)
    if (newArr.length == 1 ) {
        previousValue.textContent = `${num}+`
        arr.splice(0, arr.length)
        currentExpression = Number(arr.join(''));
        return screenCurrentExpression.textContent = currentExpression;
    }
    if (newArr.length == 2 ) {
        sum(...newArr)
    }

})

function sum(a, b){
    result = a + b
    newArr.splice(0, newArr.length)
    newArr.push(result);
    console.log(newArr)
    previousValue.textContent = `${result}+`;
    arr.splice(0, arr.length)
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = currentExpression;
}


division.addEventListener('mousedown', (e) => {
    num = currentExpression;
    newArr.push(num);
    console.log(`newArr = ${newArr}`)
    if (newArr.length == 1 ) {
        previousValue.textContent = `${num}/`
        arr.splice(0, arr.length)
        currentExpression = Number(arr.join(''));
        return screenCurrentExpression.textContent = currentExpression;
    }
    if (newArr.length == 2 ) {
        quotient(...newArr)
    }

})

function quotient(a, b){
    result = a / b
    newArr.splice(0, newArr.length)
    newArr.push(result);
    console.log(newArr)
    previousValue.textContent = `${result}/`;
    arr.splice(0, arr.length)
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = currentExpression;
}

multiplication.addEventListener('mousedown', (e) => {
    num = currentExpression;
    newArr.push(num);
    console.log(`newArr = ${newArr}`)
    if (newArr.length == 1 ) {
        previousValue.textContent = `${num}x`
        arr.splice(0, arr.length)
        currentExpression = Number(arr.join(''));
        return screenCurrentExpression.textContent = currentExpression;
    }
    if (newArr.length == 2 ) {
        quotient(...newArr)
    }

})

function product(a, b){
    result = a * b
    newArr.splice(0, newArr.length)
    newArr.push(result);
    console.log(newArr)
    previousValue.textContent = `${result}x`;
    arr.splice(0, arr.length)
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = currentExpression;
}


subtraction.addEventListener('mousedown', (e) => {
    num = currentExpression;
    newArr.push(num);
    console.log(`newArr = ${newArr}`)
    if (newArr.length == 1 ) {
        previousValue.textContent = `${num}-`
        arr.splice(0, arr.length)
        currentExpression = Number(arr.join(''));
        return screenCurrentExpression.textContent = currentExpression;
    }
    if (newArr.length == 2 ) {
        difference(...newArr)
    }

})

function difference(a, b){
    result = a - b
    newArr.splice(0, newArr.length)
    newArr.push(result);
    console.log(newArr)
    previousValue.textContent = `${result}-`;
    arr.splice(0, arr.length)
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = currentExpression;
}

//Evaluate

