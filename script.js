const ButtonEls = document.querySelectorAll("button");
const inputval = document.getElementById("result");

for (let i = 0; i < ButtonEls.length; i++) {
    ButtonEls[i].addEventListener("click", () => {
        const buttonval = ButtonEls[i].textContent;
        if (buttonval === "C") {
            ClearInputField();
        } else if (buttonval === "=") {
            CalculateResult();
        } else {
            AppendValue(buttonval);
        }
    })
}
function ClearInputField() {
    inputval.value = "";
}
function CalculateResult() {
    inputval.value = eval(inputval.value)
}
function AppendValue(buttonval) {
    inputval.value += buttonval;
}