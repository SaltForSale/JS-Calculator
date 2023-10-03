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

}
function mathButPress(operator) {

}
function equalButPress() {

}
//* clears everything except memory
function clearButPress() {
    prevVal = '';
    newVal = '';
    resultVal = "";
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