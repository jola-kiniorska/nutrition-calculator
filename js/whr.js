function countWHR() {
    const waist = document.getElementById("waist");
    console.log(waist)
    const hip = document.getElementById("hip");
    const buttonWHR = document.getElementById("button__whr");

    buttonWHR.addEventListener('click', function () {
        const waistParam = parseFloat(waist.value);
        const hipParam = parseFloat(hip.value);
        const WHR = (waistParam / hipParam).toFixed(2);
        console.log(WHR);
    });
}

countWHR();
