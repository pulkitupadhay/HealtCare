document.getElementById("calculate-btn").addEventListener("click", function () {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (height > 0 && weight > 0) {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    document.getElementById("bmi-result").textContent = bmi;

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }
    document.getElementById("bmi-category").textContent = `Category: ${category}`;
    } else {
    alert("Please enter valid height and weight!");
    }
});
