function getConvert() {
    let cur = document.getElementById("cur").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    if (from == "vie" && to == "usa") {
        result = "Số tiền là: " + (cur / 23000) + " $";
    }
    else if (from == "usa" && to == "vie") {
        result = "Số tiền là: " + (cur * 23000) + " Đ";
    }
    else if (from == "vie" && to == "eur") {
        result = "Số tiền là: " + (cur / 25000) + " E";
    }
    else if (from == "eur" && to == "vie") {
        result = "Số tiền là: " + (cur * 25000) + " Đ";
    }
    else if (from == "eur" && to == "usa") {
        result = "Số tiền là: " + (cur * 1.09) + " $";
    }
    else if (from == "usa" && to == "eur") {
        result = "Số tiền là: " + (cur * 0.91) + " E";
    } else if (from == "usa" && to == "usa") {
        result = "Số tiền là: " + cur + " $";
    } else if (from == "vie" && to == "vie") {
        result = "Số tiền là: " + cur + " Đ";
    } else if (from == "eur" && to == "eur") {
        result = "Số tiền là: " + cur + " E";
    }
    document.getElementById("amount").innerHTML = result;
}