function countBMI() {
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const buttonBMI = document.getElementById("button__bmi");
    
    buttonBMI.addEventListener('click', function () {
        const weightParam = parseFloat(weight.value);
        const heightParam = parseFloat(height.value)/100;
        const BMI = (weightParam / Math.pow(heightParam, 2)).toFixed(2);
        console.log(BMI);
    });
}

countBMI();
