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

///////////////////////////////////////////////////////

let numpad = document.querySelectorAll(".keypad");
let screenCurrentExpression = document.querySelector('#current_expression')
let arr = []
let currentExpression;




numpad.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        element.setAttribute('style','font-size: 40px;')
    })
    element.addEventListener('mousedown', (e) => {
        //console.log(e.target.value);
        element.setAttribute('style','font-size: 50px;')
        console.log(e.target.value)
        let val = e.target.value
        arr.push(val);
        currentExpression = arr.join('');
        screenCurrentExpression.textContent = currentExpression;
    })
    element.addEventListener('mouseup', (e) => {
        element.setAttribute('style','font-size: 40px;')
    })
    element.addEventListener('mouseout', (e) => {
        element.removeAttribute('style','font-size: 40px;')
    })
});





