let input = document.getElementById("input_data");
let powerFlag = false;
let DTRFlag = true;
let deg_btn = document.querySelector(".deg_btn")
let memData;
let memoryFlag = false;
let changeflag = true;
let tempdata;

//----------------Input Data----------------------------------------
function addData(number) {
    input.value += number;
}
function DtR() {
    if (DTRFlag) {
        deg_btn.innerHTML = "RAD";
        DTRFlag = false;
    }
    else {
        deg_btn.innerHTML = "DEG";
        DTRFlag = true;
    }
}
//-----------------Memory Functions---------------------------------------


// document.querySelectorAll('.memoryFunction').forEach((element)=>{
//     element.addEventListener('click', ()=>{
//         memoryFunction(element)
//         console.log(true)
//     })
// })
// function memoryFunction(ele) {
//     let eleId = ele.attributes.id.value;
//     if (eleId == "mp") {
//         if (!memoryFlag) {
//             memData = "";
//             document.getElementById("mc").style.color = "Black";
//             document.getElementById("mr").style.color = "Black";
//             document.getElementById("ms").style.color = "Black";
//             memoryFlag = true;
//         }
//         (memoryFlag) ? memData += eval(input.value) + "+" : NULL;
//         input.value = "";
//     }
//     else if (eleId == "mm") {
//         if (!memoryFlag) {
//             memData = "";
//             document.getElementById("mc").style.color = "Black";
//             document.getElementById("mr").style.color = "Black";
//             document.getElementById("ms").style.color = "Black";
//             memoryFlag = true;
//         }
//         (memoryFlag) ? memData += eval(input.value) + "-" : NULL;
//         input.value = "";
//     }
//     else if (eleId == "mr" && memoryFlag) {
//         (input.value == "") ? memData = memData.substring(0, memData.length - 1) : memData += input.value;
//         input.value = eval(memData);
//     }
//     else if (eleId == "mc" && memoryFlag) {
//         memData = "";
//         console.log("memory is cleared");
//         document.getElementById("mc").style.color = "rgb(163, 163, 163)";
//         document.getElementById("mr").style.color = "rgb(163, 163, 163)";
//         document.getElementById("ms").style.color = "rgb(163, 163, 163)";
//         memoryFlag = false;
//     } else if (eleId == "ms" && memoryFlag) {
//         memData = eval(memData);
//         console.log(`Last calculation ${memData} stored successfully`);
//     }
// }


//-----------------Trignometry---------------------------------------------------
function calculateDeg(value) {
    let deg = (Math.PI / 180) * value;
    return deg;
}
document.getElementById('trigonometry').addEventListener('change', (evnt) => {
    let value = evnt.target.value

    if (DTRFlag) {
        if (value == 'sin') {
            input.value = Math.sin(calculateDeg(eval(input.value)))
        }
        else if (value == 'cos') {
            input.value = Math.cos(calculateDeg(eval(input.value)))
        }
        else if (value == 'tan') {
            input.value = Math.tan(calculateDeg(eval(input.value)))
        }
        document.getElementById('trigonometry').selectedIndex = 0;
    }
    if (DTRFlag == false) {
        if (value == 'sin') {
            input.value = Math.sin(input.value);
        }
        else if (value == 'cos') {
            input.value = Math.cos(input.value);
        }
        else if (value == 'tan') {
            input.value = Math.tan(input.value);
        }
        document.getElementById('trigonometry').selectedIndex = 0;
    }
})
//----------------------------Functions----------------------------------------
document.getElementById('function').addEventListener('change', (event) => {
    let value = event.target.value
    if (value == 'random') {
        input.value = Math.random(input.value);
    }
    else if (value == 'floor') {
        input.value = Math.floor(input.value);
    }
    else if (value == 'ceil') {
        input.value = Math.ceil(input.value);
    }
    document.getElementById('function').selectedIndex = 0;
})
// ----------------------------First Row--------------------------
const changeop = () => {
    if (changeflag) {
        document.getElementById("square").innerHTML = "X<sup>3</sup>";
        document.getElementById("squareroot").innerHTML = "3√x";
        document.getElementById("log2").innerHTML = "log<sub>10</sub>";
        changeflag = false;
    }
    else {
        document.getElementById("square").innerHTML = "X<sup>2</sup>";
        document.getElementById("squareroot").innerHTML = "2√x";
        document.getElementById("log2").innerHTML = "log<sub>2</sub>";
        changeflag = true;
    }
}
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
    input.placeholder = '0';
}
// ----------------------------Second Row--------------------------
function sqr() {
    if (changeflag) {
        input.value = Math.pow(eval(input.value), 2)
    }
    else {
        input.value = Math.pow(eval(input.value), 3)
    }
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
    if (changeflag) {
        input.value = Math.sqrt(input.value)
    }
    else {
        input.value = Math.cbrt(input.value)
    }
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
    if (changeflag) {
        input.value = Math.log2(input.value)
    }
    else {
        input.value = Math.log10(input.value)
    }
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
