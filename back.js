function insert(num) {

    if (document.getElementById("mySpan").textContent == "0" && num != ".") {
        document.getElementById("mySpan").textContent = "";
    }

    if (checkForCorrectInput(num)) {
        document.getElementById("mySpan").textContent =
            document.getElementById("mySpan").textContent + num;
    }

}

function checkForCorrectInput(num) {
    let symbols = ["-", "/", "+", "*", "%"];

    if (symbols.includes(document.getElementById("mySpan").textContent.slice(-1)) && symbols.includes(num)) {
        return false;
    }

    if (document.getElementById("mySpan").textContent.includes(".") && num == ".") {
        return false;
    }

    if (document.getElementById("mySpan").textContent.length == 9) {
        return false;
    }

    return true;
}

function clean() {
    document.getElementById("mySpan").textContent = "0";
}

function equal() {
    let result = document.getElementById("mySpan").textContent;
    try {
        if (result) {
            if (result.includes('%')) {
                result.replace("%", "*100/")
            }
            document.getElementById("mySpan").textContent = eval(result);
        }
    } catch (err) {
        alert('You have a mistake in your input');
        clean();
    }

}

function plusMinus() {
    let number = document.getElementById("mySpan").textContent;
    number *= -1;
    document.getElementById("mySpan").textContent = number;
}