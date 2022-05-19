const weight = document.getElementById("weight");
const height = document.getElementById("height");
const buttonBMI = document.getElementById("button");

buttonBMI.addEventListener('click', function () {
    const weightParam = parseFloat(weight.value);
    const heightParam = parseFloat(height.value);
    const BMI = weightParam / Math.pow(heightParam, 2)
    console.log(weightParam);
    console.log(heightParam);
    console.log(BMI);
    return BMI;
});




