function isNumeric(str) {
    return !(Number.isNaN(Number(str)))
}

function checkFirstNumber() {
    let firstNum = document.getElementById("first-number").value;
    if (!isNumeric(firstNum)) {
        document.getElementById("print-announce").innerHTML=
        `<p>Giá trị nhập ở ô <span class="text-announce">Số thứ nhất</span> không phải là số</p>`;
    }
}

function checkSecondNumber() {
    let secondNum = document.getElementById("second-number").value;
    if (!isNumeric(secondNum)) {
        document.getElementById("print-announce").innerHTML=
        `<p>Giá trị nhập ở ô <span class="text-announce">Số thứ hai</span> không phải là số</p>`;
    }
}

function isChecked() {
    if (document.getElementById("checkbox-plus").checked == true)
        return 1;
    else if (document.getElementById("checkbox-minus").checked == true)
        return 2;
    else if (document.getElementById("checkbox-multiply").checked == true)
        return 3;
    else if (document.getElementById("checkbox-divide").checked == true)
        return 4;
    else 
        return 0;
}

function checkCalculation() {
    document.getElementById("print-announce").innerHTML="";

    if (document.getElementById("first-number").value==""
        || document.getElementById("second-number").value==""
        || !isNumeric(document.getElementById("first-number").value)
        || !isNumeric(document.getElementById("second-number").value)) {

        document.getElementById("print-announce").innerHTML=
        "Chưa điền đủ hai số hợp lệ để thực hiện phép tính.";
    }

    else if (isChecked == 0) {
        document.getElementById("print-announce").innerHTML=
        `<p>Bấm nút <span class="text-announce">Tính</span> mà chưa chọn phép tính</p>`;
    }

    else {
        calculate(parseFloat(document.getElementById("first-number").value),
            parseFloat(document.getElementById("second-number").value));
    }
}

function calculate() {
    if (isChecked() == 1)
        document.getElementById("result").value = (parseFloat(document.getElementById("first-number").value) + parseFloat(document.getElementById("second-number").value));
    else if (isChecked() == 2)
        document.getElementById("result").value = (parseFloat(document.getElementById("first-number").value) - parseFloat(document.getElementById("second-number").value));
    else if (isChecked() == 3)
        document.getElementById("result").value = (parseFloat(document.getElementById("first-number").value) * parseFloat(document.getElementById("second-number").value));
    else if (isChecked() == 4)
        if (document.getElementById("second-number").value != 0)
            document.getElementById("result").value = (parseFloat(document.getElementById("first-number").value) / parseFloat(document.getElementById("second-number").value));
        else 
            document.getElementById("print-announce").innerHTML="Lỗi chia cho 0";
}