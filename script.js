function convert() {
    const initialTemp = document.getElementById("temperature").value;
    const initialUnit = document.getElementById("unit").value;

    // Input validation
    if (isNaN(initialTemp)) {
        alert("Please enter a valid number.");
        return;
    }

    let convertedTemp = 0;
    let convertedUnit = "";

    if (initialUnit === "celsius") {
        convertedTemp = (initialTemp * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (initialUnit === "fahrenheit") {
        convertedTemp = (initialTemp - 32) * 5/9;
        convertedUnit = "Celsius";
    } else { // Extra challenge: Kelvin conversion
        if (initialUnit === "celsius") {
            convertedTemp = initialTemp + 273.15;
        } else {
            convertedTemp = (initialTemp - 32) * 5/9 + 273.15;
        }
        convertedUnit = "Kelvin";
    }

    document.getElementById("convertedTemp").textContent = convertedTemp.toFixed(2) + " " + convertedUnit;
}
