let input = document.getElementById("input_data");
let powerFlag = false;




//----------------Input Data----------------------------------------
function addData(number) {
    input.value += number;
}

// ----------------------------First Row--------------------------
function pi() {
    input.value += Math.PI
}

function e() {
    input.value += Math.E
}
function del(flag) {
    if (flag) {
        input.value = ""
    }
    else {
        let back = input.value
        input.value = back.substring(0, back.length - 1)
    }

}
// ----------------------------Second Row--------------------------

function sqr() {
    input.value = Math.pow(eval(input.value), 2)
}
function fractional() {
    input.value = Math.pow(eval(input.value), -1)
}
function modulus() {
    let temp = eval(input.value).toString().substring(0, 1);
    if (temp == '-' || temp == '+') {
        input.value = eval(input.value).toString().substring(1);
    }
}
function expo() {
    input.value = Math.exp(eval(input.value))
}

// ----------------------------Third Row--------------------------------------
function sqrt() {
    input.value = Math.sqrt(input.value)
}
function factorial() {
    let fact = 1;
    for (var i = input.value; i >= 1; i--) {
        fact = fact * i;
    }
    input.value = fact;
}

//-----------------------------Fourth row------------------------------------
function power() {
    // input.value = Math.pow(input.value, eval(input.value))
    if (input.value == "") {
        input.placeholder = "Enter first number"
        return;
    }
    else {
        tempdata = input.value
        input.value = ""
        input.placeholder = "Enter second number"
        powerFlag = true;
    }

}
//----------------------------Fifth row------------------------------------
function ten() {
    input.value = Math.pow(10, eval(input.value))
}
//----------------------------Sixth row------------------------------
function log() {
    input.value = Math.log2(input.value)
}
//-----------------------------Seventh row---------------------------------
function ln() {
    input.value = Math.log(input.value)
}
function plus_minus() {
    let sign = input.value.substring(0, 1)
    if (sign == '+' || sign == '-') input.value = input.value.substring(1)
    else input.value = '-' + input.value;
}

function equal() {
    if (powerFlag) {
        input.value = Math.pow(tempdata, eval(input.value))
        powerFlag = false;
    }
    input.value = eval(input.value);
}
