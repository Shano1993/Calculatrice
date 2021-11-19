let result = document.getElementById("result");
let buttonNumber = document.getElementsByClassName("button_number");
let operation = document.getElementsByClassName("operation");
let resultButton = document.getElementById("result_button");
let supp = document.getElementById("supp");
let point = document.getElementById("point");

for (let button of buttonNumber){
    button.addEventListener("click", function () {
        let dataNumber = button.innerHTML;
        result.innerHTML += dataNumber;
    })
}

for (let button of operation) {
    button.addEventListener("click", function () {
        let dataOperande = button.innerHTML;
        result.innerHTML += dataOperande;
    })
}

resultButton.addEventListener("click", function () {
    let resume = eval(result.innerHTML);
    result.innerHTML = resume;
})

point.addEventListener("click", function () {
    let dataPoint = point.innerHTML;
    result.innerHTML += dataPoint;
})

supp.addEventListener("click", function() {
    result.innerHTML = "";
})



