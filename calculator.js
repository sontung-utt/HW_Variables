function getSum() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("result").textContent = "Kết quả phép cộng là: " + (parseInt(a) + parseInt(b))
}
function getMinus() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("result").textContent = "Kết quả phép trừ là: " + (a - b)
}
function getMulti() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("result").textContent = "Kết quả phép nhân là: " + (a * b)
}
function getDivide() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("result").textContent = "Kết quả phép chia là: " + (a / b)
}