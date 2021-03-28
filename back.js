function insert(num) {
    let symbols = ["/", "-", "+", "*", "%"];
    if (!(symbols.includes(num) && document.getElementById("mySpan").textContent.slice(-1).includes(num))) {
        if (!(document.getElementById("mySpan").textContent.length == 0 && num == "0")) {
            document.getElementById("mySpan").textContent =
                document.getElementById("mySpan").textContent + num;
        }
    }
}

function clean() {
    document.getElementById("mySpan").textContent = "";
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