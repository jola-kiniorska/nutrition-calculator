function countCalories() {
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    const age = document.getElementById("age");
    const buttonCalories = document.getElementById("button__calories");
    
    buttonCalories.addEventListener('click', function () {
        const weightParam = parseFloat(weight.value);
        const heightParam = parseFloat(height.value);
        const ageParam = parseFloat(age.value);
        const calories = '';
        console.log(calories);
    });
}

countCalories();
