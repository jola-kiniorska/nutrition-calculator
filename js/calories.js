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
