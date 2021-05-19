function summa() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = Number(a) + Number(b);
    document.getElementById("result").innerHTML = result;
}

function minus() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = a - b;
    document.getElementById("result").innerHTML = result;
}

function multiplication() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    let result = a * b;
    document.getElementById("result").innerHTML = result;
}

function division() {
    let a = document.getElementById('number1').value;
    let b = document.getElementById('number2').value;
    if (b==0) {
        alert ('Ошибка! На ноль делить нельзя'); }
    else {
        let result = a / b;
        document.getElementById("result").innerHTML = result; }
}

