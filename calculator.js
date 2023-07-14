
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
let operator = 'none';
let currentExpression = 0;

let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('mousedown', (e) => {
        let val = e.target.value
        arr.push(val);
        currentExpression = Number(arr.join(''));
        if (operator == '') {
            newArr = [];
            previousValue.textContent = ``
            num = currentExpression;
            newArr.push(num);
        }
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

let key = document.querySelectorAll('.key')
key.forEach(element => {
    element.addEventListener('keydown', (e) => {
        console.log(e.key)
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


//Operations
let addition = document.querySelector('#add');
let division = document.querySelector('#divide');
let multiplication = document.querySelector('#multiply');
let subtraction = document.querySelector('#subtract');
let previousValue = document.querySelector('#previousValue')
let num = 0;
let newArr = []


//Addition
addition.addEventListener('mousedown', (e) => {
    if (operator == 'addition' || operator == 'none') {
        operator = 'addition'
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
        return console.log(operator)
    }
    if (operator != 'addition') {
        operator = 'addition'
        if (newArr.length == 1 ) {
            previousValue.textContent = `${num}+`
            arr.splice(0, arr.length)
            currentExpression = Number(arr.join(''));
            return screenCurrentExpression.textContent = currentExpression;
        }
    }
})

function sum(a, b){
    result = a + b
    num = result
    newArr.splice(0, newArr.length)
    newArr.push(num);
    console.log(newArr)
    previousValue.textContent = `${num}`;
    arr.splice(0, arr.length)
    operator = ''
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = ``;
}

//Division
division.addEventListener('mousedown', (e) => {
    
    if (operator == 'division' || operator == 'none') {
        console.log(operator)
        operator = 'division'
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
    }

    if (operator != 'division') {
        operator = 'division'
        if (newArr.length == 1 ) {
            previousValue.textContent = `${num}/`
            arr.splice(0, arr.length)
            currentExpression = Number(arr.join(''));
            return screenCurrentExpression.textContent = currentExpression;
        }
    }

})

function quotient(a, b){
    result = a / b
    num = result
    newArr.splice(0, newArr.length)
    newArr.push(num);
    console.log(newArr)
    previousValue.textContent = `${num}`;
    arr.splice(0, arr.length)
    operator = ''
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = ``;
}

//Multiplication
multiplication.addEventListener('mousedown', (e) => {
   
    if (operator == 'multiplication' || operator == 'none') { 
        operator = 'multiplication'
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
            product(...newArr)
        }
    }

    if (operator != 'multiplication') {
        operator = 'multiplication'
        if (newArr.length == 1 ) {
            previousValue.textContent = `${num}x`
            arr.splice(0, arr.length)
            currentExpression = Number(arr.join(''));
            return screenCurrentExpression.textContent = currentExpression;
        }
    }
})

function product(a, b){
    result = a * b
    num = result
    newArr.splice(0, newArr.length)
    newArr.push(num);
    console.log(newArr)
    previousValue.textContent = `${num}`;
    arr.splice(0, arr.length)
    operator = ''
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = ``;
}

//Subtraction
subtraction.addEventListener('mousedown', (e) => {
    if (operator == 'subtraction' || operator == 'none') {
        operator = 'subtraction'
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
    }
    if (operator != 'subtraction') {
        operator = 'subtraction'
        if (newArr.length == 1 ) {
            previousValue.textContent = `${num}-`
            arr.splice(0, arr.length)
            currentExpression = Number(arr.join(''));
            return screenCurrentExpression.textContent = currentExpression;
        }
    }
  
})

function difference(a, b){
    result = a - b
    num = result
    newArr.splice(0, newArr.length)
    newArr.push(num);
    console.log(newArr)
    previousValue.textContent = `${num}`;
    arr.splice(0, arr.length)
    operator = ''
    currentExpression = Number(arr.join(''));
    return screenCurrentExpression.textContent = ``;
}

//Evaluate or equals
let equals = document.querySelector('#eval');
equals.addEventListener('mousedown', (e) => {
    if (operator == 'addition') {
        num = currentExpression;
        newArr.push(num);
        sum(...newArr)
    }
    if (operator == 'multiplication') {
        num = currentExpression;
        newArr.push(num);
        product(...newArr)
    }
    if (operator == 'division') {
        num = currentExpression;
        newArr.push(num);
        quotient(...newArr)
    }
    if (operator == 'subtraction') {
        num = currentExpression;
        newArr.push(num);
        difference(...newArr)
    }
    if (operator == 'none') {
        screenCurrentExpression.textContent = currentExpression;
    }
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
    num = 0;
    newArr = [];
    operator = 'none'
    previousValue.textContent = '';
    screenCurrentExpression.textContent = '';
})