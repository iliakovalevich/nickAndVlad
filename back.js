function insert(num) {
    let str = document.getElementById("mySpanLower").textContent + num;

    if (document.getElementById("mySpanLower").textContent == "0" && num != ".") {
        document.getElementById("mySpanLower").textContent = "";
    }

    if (str.length > 1) {
        clean();
        document.getElementById("mySpanLower").textContent = checkTwoMinuses(str);
    }

    if (checkForCorrectInput(num)) {
        document.getElementById("mySpanLower").textContent =
            document.getElementById("mySpanLower").textContent + num;
    }

}

function checkTwoMinuses(str) {
    let str1 = str;
    let strSlice2 = str.slice(0, (length - 1)).slice(-1);
    let strSlice1 = str.slice(-1);
    debugger;
    if ((strSlice1 == '-') && (strSlice2 == '-')) {
        debugger
        let strOut = str.slice(0, str.length - 2);
        strOut += '+';
        return strOut;
    }
    return str1.slice(0, length - 1);
}

function checkForCorrectInput(num) {
    let symbols = ["-", "/", "+", "*", "%"];

    if (symbols.includes(document.getElementById("mySpanLower").textContent.slice(-1)) && symbols.includes(num)) {
        return false;
    }

    if (document.getElementById("mySpanLower").textContent.includes(".") && num == ".") {
        return false;
    }

    if (document.getElementById("mySpanLower").textContent.length == 9) {
        return false;
    }

    return true;
}

function clean() {
    document.getElementById("mySpanLower").textContent = '';
    document.getElementById("mySpanUpper").textContent = '';
}

function equal() {
    let result = document.getElementById("mySpanLower").textContent;
    try {
        document.getElementById("mySpanUpper").textContent = result;
        if (result) {
            if (result.includes('%')) {
                result.replace("%", "*100/")
            }
            document.getElementById("mySpanLower").textContent = eval(result);
        }
    } catch (err) {
        alert('You have a mistake in your input');
        clean();
    }

}


function plusMinus() {
    let number = document.getElementById("mySpanLower").textContent ;
    number *= -1;
    document.getElementById("mySpanLower").textContent = number;
}