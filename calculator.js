function evaluate() {
    function addition(a,b) {
        let c = a+b;
        return c;
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
    }
    
}


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
let currentExpression;




let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('mousedown', (e) => {
        let val = e.target.value
        arr.push(val);
        currentExpression = Number(arr.join(''));
        console.log(arr);
        screenCurrentExpression.textContent = currentExpression;
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
    screenCurrentExpression.textContent = currentExpression;
});

// AC or clear

let clear = document.querySelector('#ac')
clear.addEventListener('mousedown', (e) => {
    arr.splice(0, arr.length)
    currentExpression = Number(arr.join(''));
    decimal.addEventListener('mousedown', removeDecimal);
    screenCurrentExpression.textContent = currentExpression;
})


// operations
let add = document.querySelector('#add')
add.addEventListener('mousedown', (e) => {
    console.log('plus')
})