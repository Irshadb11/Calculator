let inputValue = document.querySelectorAll(".container>#input_form");
let coorex = document.querySelectorAll(".countNo");
let wrongyfy = document.querySelectorAll(".wrong");

function add() {
    let fvalue = inputValue[0].value;
    printMessage(fvalue, "+");
}
function minus() {
    let fvalue = inputValue[0].value;
    printMessage(fvalue, "-");

}
function divide() {
    let fvalue = inputValue[0].value;
    printMessage(fvalue, "/");
}
function multi() {
    let fvalue = inputValue[0].value;
    printMessage(fvalue, "*");
}
function clean() {
    let fvalue = inputValue[0].value;
    printMessage(fvalue, "c");
}

function printMessage(formValue, Operator) {
    if (isNaN(formValue)) {
        wrongyfy[0].innerHTML = "please must be a number.";
        coorex[0].innerHTML = "";
    }

    else if (Operator === "+") {
        coorex[0].innerHTML = Number(coorex[0].innerHTML) + Number(formValue);
        wrongyfy[0].innerHTML = "";
    }
    else if (Operator === "-") {
        coorex[0].innerHTML = Number(coorex[0].innerHTML) - Number(formValue);
        wrongyfy[0].innerHTML = "";
    }
    else if (Operator === "/") {
        coorex[0].innerHTML = Number(coorex[0].innerHTML) / Number(formValue);
        wrongyfy[0].innerHTML = "";

    }
    else if (Operator === "*") {
        coorex[0].innerHTML = Number(coorex[0].innerHTML) * Number(formValue);
        wrongyfy[0].innerHTML = "";
    }
    else if (Operator === "c") {
        coorex[0].innerHTML = " ";
        wrongyfy[0].innerHTML = "";
    }
}