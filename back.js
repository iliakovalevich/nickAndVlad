function insert(num) {

    if (document.getElementById("mySpanLower").textContent == "0" && num != ".") {
        document.getElementById("mySpanLower").textContent = "";
    }

    if (checkForCorrectInput(num)) {
        document.getElementById("mySpanLower").textContent =
            document.getElementById("mySpanLower").textContent + num;
    }

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
    document.getElementById("mySpanLower").textContent = "0";
    document.getElementById("mySpanUpper").textContent = "";
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
    let number = document.getElementById("mySpanLower").textContent;
    number *= -1;
    document.getElementById("mySpanLower").textContent = number;
}