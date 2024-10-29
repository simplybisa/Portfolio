function addtoresult(number) {
    let result = document.getElementById("result");

    document.getElementById("result").innerHTML += number;
}

function calc() {
    let result = document.getElementById("result");

    try {
        let calculation = eval(result.innerHTML);
        result.innerHTML = Number(calculation).toFixed(2);
    } catch (error) {
        result.innerHTML = "Error";
    }
}

function ac() {
    document.getElementById("result").innerHTML = "";
}

function background_color() {
    color = document.getElementById("background_color").value;

    document.body.style.backgroundColor = color;
}

function text_color() {
    color = document.getElementById("text_color").value;

    document.getElementById("result").style.color = color;
    document.getElementById("web_changes").style.color = color;
}