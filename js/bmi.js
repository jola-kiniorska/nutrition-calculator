
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const buttonBMI = document.getElementById("button__bmi");
let BMI = '';

if (buttonBMI) {
    buttonBMI.addEventListener('click', function () {
        const weightParam = parseFloat(weight.value);
        const heightParam = parseFloat(height.value) / 100;
        BMI = (weightParam / Math.pow(heightParam, 2)).toFixed(2);
    });
}

const resultPage = document.querySelector(".wrapper.result");
if (resultPage) {
    const resultBMI = resultPage.querySelector('.bmi_result');
    resultBMI.textContent = BMI;
}


