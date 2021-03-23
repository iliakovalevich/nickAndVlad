function insert(num){
    document.getElementById("mySpan").textContent=document.getElementById("mySpan").textContent+num;
}
function clean() {
    document.getElementById("mySpan").textContent="";
}
function equal() {
    let exp = document.getElementById("mySpan").textContent;
    if(exp) {
        document.getElementById("mySpan").textContent = eval(exp);
    }
}
function plusMinus() {
    let number = document.getElementById("mySpan").textContent;
    number *= -1;
    document.getElementById("mySpan").textContent = number;
}
