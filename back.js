function insert(num) {
    document.getElementById("mySpan").textContent = document.getElementById("mySpan").textContent + num;
}

function clean() {
    document.getElementById("mySpan").textContent = "";
}

function equal() {
    let exp = document.getElementById("mySpan").textContent;
    try {
        if (exp) {
            if (exp.indexOf('%') > -1) {
                exp.replace("%", "*100/")
            }
            document.getElementById("mySpan").textContent = eval(exp);
            debugger;
        }
    } catch (err) {
        alert('You have a mistake in your input, please press C and try again')
    }

}

function plusMinus() {
    let number = document.getElementById("mySpan").textContent;
    number *= -1;
    document.getElementById("mySpan").textContent = number;
}

function back() {
    let exp = document.getElementById("mySpan").textContent;
    document.getElementById("mySpan").textContent = exp.substring(0, exp.length - 1);
}

function calcPercent(str) {
    let mySplits = str.split("%");
    console.log(mySplits);
    alert(mySplits);
    // a = form.a.value/100;
    // b = a*form.b.value;
}