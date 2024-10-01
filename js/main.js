const bmiForm = document.querySelector('.bmi__form');
const whrForm = document.querySelector('.whr__form');
const caloriesForm = document.querySelector('.calories__form');

if (bmiForm) {
    const buttonBMI = document.getElementById("button__bmi");
    buttonBMI.addEventListener('click', countBMI);
}

function countBMI() {
    const weightParam = parseFloat(document.getElementById("weight").value);
    const heightParam = parseFloat(document.getElementById("height").value) / 100;
    const BMI = (weightParam / Math.pow(heightParam, 2)).toFixed(2);
    localStorage.setItem('bmi_value', BMI);
}

const bmiResult = document.querySelector('.bmi_result');
if (bmiResult) {
    bmiResult.textContent = localStorage.getItem('bmi_value');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (whrForm) {
    const buttonWHR = document.getElementById("button__whr");
    buttonWHR.addEventListener('click', countWHR)
}

function countWHR() {
    const waistParam = parseFloat(document.getElementById("waist").value);
    const hipParam = parseFloat(document.getElementById("hip").value);
    const WHR = (waistParam / hipParam).toFixed(2);
    localStorage.setItem('whr_value', WHR);
}

const whrResult = document.querySelector('.whr_result');
if (whrResult) {
    whrResult.textContent = localStorage.getItem('whr_value');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (caloriesForm) {
    function countCalories() {
        const weight = document.getElementById("weight");
        const height = document.getElementById("height");
        const age = document.getElementById("age");
        const activity = document.getElementById("activity");
        const buttonCalories = document.getElementById("button__calories");

        buttonCalories.addEventListener('click', function () {
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const weightParam = parseFloat(weight.value);
            const heightParam = parseFloat(height.value);
            const ageParam = parseFloat(age.value);
            const activityParam = parseFloat(activity.value);
            const PPMFemale = ((655.1 + 9.563 * weightParam + 1.85 * heightParam - 4.676 * ageParam) * activityParam).toFixed(2);
            const PPMMale = ((66.5 + 13.75 * weightParam + 5.003 * heightParam - 6.775 * ageParam) * activityParam).toFixed(2);
            const CPM = gender == "female" ? PPMFemale : PPMMale;
            console.log(CPM);
        });
    }

    countCalories();
}