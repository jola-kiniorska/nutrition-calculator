const bmiForm = document.querySelector('.bmi__form');
const whrForm = document.querySelector('.whr__form');
const caloriesForm = document.querySelector('.calories__form');

if (bmiForm) {
    const buttonBMI = document.getElementById("button__bmi");
    buttonBMI.addEventListener('click', function () {
        const weightParam = parseFloat(document.getElementById("weight").value);
        const heightParam = parseFloat(document.getElementById("height").value) / 100;
        const BMI = (weightParam / Math.pow(heightParam, 2)).toFixed(2);
        localStorage.setItem('bmi_value', BMI);
    });
}

if (whrForm) {
    const buttonWHR = document.getElementById("button__whr");
    buttonWHR.addEventListener('click', function () {
        const waistParam = parseFloat(document.getElementById("waist").value);
        const hipParam = parseFloat(document.getElementById("hip").value);
        const WHR = (waistParam / hipParam).toFixed(2);
        localStorage.setItem('whr_value', WHR);
    });
}

if (caloriesForm) {
    const buttonCalories = document.getElementById("button__calories");
    buttonCalories.addEventListener('click', function () {
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const weightParam = parseFloat(document.getElementById("weight").value);
        const heightParam = parseFloat(document.getElementById("height").value);
        const ageParam = parseFloat(document.getElementById("age").value);
        const activityParam = parseFloat(document.getElementById("activity").value);
        const PPMFemale = ((655.1 + 9.563 * weightParam + 1.85 * heightParam - 4.676 * ageParam) * activityParam).toFixed(2);
        const PPMMale = ((66.5 + 13.75 * weightParam + 5.003 * heightParam - 6.775 * ageParam) * activityParam).toFixed(2);
        const CPM = gender == "female" ? PPMFemale : PPMMale;
        localStorage.setItem('calories_value', CPM);
    });
}

const bmiResult = document.querySelector('.bmi_result');
const whrResult = document.querySelector('.whr_result');
const caloriesResult = document.querySelector('.calories_result');

if (bmiResult) {
    const bmiMeaning = document.querySelector('.bmi_meaning span');
    const bmiValue = localStorage.getItem('bmi_value');
    if (bmiValue < 18.5) {
        bmiMeaning.textContent = "underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.99) {
        bmiMeaning.textContent = "correct :)";
    } else if (bmiValue >= 25.0) {
        bmiMeaning.textContent = "overweight";
    }

    displayResult('.bmi_result', 'bmi_value');
}

if (whrResult) {
    const whrMeaning = document.querySelector('.whr_meaning');
    const whrValue = localStorage.getItem('whr_value');
    if (whrValue >= 1) {
        whrMeaning.textContent = "apple-shaped body type";
    } else {
        whrMeaning.textContent = "pear-shaped body type";
    }

    displayResult('.whr_result', 'whr_value');
}

if (caloriesResult) {
    displayResult('.calories_result', 'calories_value');
}

function displayResult(resultType, storageValue) {
    const resultParam = document.querySelector(resultType);
    if (resultParam) {
        resultParam.textContent = localStorage.getItem(storageValue);
    }
}