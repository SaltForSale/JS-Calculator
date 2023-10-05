let prevVal = '';
let newVal = '';
let resultVal = '';
let mathOp = '';

//* store whether or not the decimal was clicked
//* only allow one decimal per value
let decimalClicked = false;

//* hold values we want stored in memory
let valMemStored = '';

function numButPress(num) {
    //* if a number has already been clicked
    if (resultVal) {
        //* start a new number
        newVal = num;
        //* reset to create a new result
        resultVal = '';
    } else {
        //* used to block multiple decimals
        if (num === '.') {
            if (decimalClicked != true) {
                //* take the current value of newVal and add the character pressed
                newVal += num;
                //* Sets decimal check var to true, won't allow more
                decimalClicked = true;
            }
        } else {
            newVal += num;
            console.log(newVal);
        }
    }
    //* update the display
    document.getElementById('entry').value = newVal;
}
function mathButPress(operator) {
    //* checks if there was a previous calculation by seeing if resultVal has a value
    //* if resultVal doesn't have a value, then store the current value as a previous value for the next calculation
    if (!resultVal) {
        prevVal = newVal;
    } else {
        //* if there is a current result, store that as the previous value entered
        prevVal = resultVal;
    }
    //* restart creation of a new number
    newVal = '';
    //* reset decimal clicked
    decimalClicked = false;
    //* store operator clicked
    mathOp = operator;
    //* prepare entry for receiving new numbers
    resultVal = '';
    document.getElementById('entry').value = '0';
}
function equalButPress() {
    //* reset decimalClicked
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
    //* perform calculations based on stored operator
    switch (mathOp) {
        case '+':
            resultVal = prevVal + newVal;
            break;
        case '-':
            resultVal = prevVal - newVal;
            break;
        case '*':
            resultVal = prevVal * newVal;
            break;
        case '/':
            resultVal = prevVal / newVal;
            break;
        //* if equals is hit without an operator leave everything as it is
        default:
            resultVal = newVal;
    }
    prevVal = resultVal;
    document.getElementById('entry').value = resultVal;
}
//* clears everything except memory
function clearButPress() {
    prevVal = '';
    newVal = '';
    resultVal = '';
    mathOp = '';
    decimalClicked = false;
    document.getElementById('entry').value = '0';
}
//* store the current value in #entry in valMemStored
function copyButPress() {
    valMemStored = document.getElementById('entry').value;
}
//* if a value has been stored, paste it in the #entry window and assign it as the newVal
function pasteButPress() {
    if (valMemStored) {
        document.getElementById('entry').value = valMemStored;
        newVal = valMemStored;
    }
}