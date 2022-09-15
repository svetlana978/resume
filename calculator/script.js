let lastOperand;
let operation = null;
const inputWindow = document.getElementById('inputWindow');

for (let i = 0; i < 10; i++) {
    document.getElementById(`btn_${i}`).addEventListener('click', function() {
        inputWindow.value += i;
    })
}

function mathOperations(operatKind) {
    current = lastOperand + parseFloat(inputWindow.value);
    lastOperand = parseFloat(inputWindow.value);
    operation = operatKind;
    inputWindow.value = '';
}

document.getElementById('btn_sum').addEventListener('click', function() {
    mathOperations('sum');
})
document.getElementById('btn_mul').addEventListener('click', function() {
    mathOperations('mul');
})
document.getElementById('btn_div').addEventListener('click', function() {
    mathOperations('div');
})
document.getElementById('btn_def').addEventListener('click', function() {
    mathOperations('def');
})
document.getElementById('btn_sqrt').addEventListener('click', function() {
    inputWindow.value = Math.sqrt(inputWindow.value);
})
document.getElementById('btn_minus').addEventListener('click', function() {
    inputWindow.value = -parseFloat(inputWindow.value);
})
document.getElementById('btn_point').addEventListener('click', function() {
    inputWindow.value = parseFloat(inputWindow.value) + '.';
})
document.getElementById('btn_clr').addEventListener('click', function() {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})


document.getElementById('btn_calc').addEventListener('click', function() {
    switch (operation) {
        case "sum":
            result = lastOperand + parseFloat(inputWindow.value);
            inputWindow.value = result;
            break;
        case "def":
            result = lastOperand - parseFloat(inputWindow.value);
            inputWindow.value = result;
            break;
        case "mul":
            result = lastOperand * parseFloat(inputWindow.value);
            inputWindow.value = result;
            break;
        case "div":
            result = lastOperand / parseFloat(inputWindow.value);
            inputWindow.value = result;
            break;
        default:
            alert('error');
    }
    operation = null;
})