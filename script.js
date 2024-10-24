document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        alert('Please enter a valid number for temperature.');
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let resultUnit;

    // Conversion logic
    switch (unitSelect) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
            resultUnit = 'Fahrenheit (°F)';
            break;

        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            resultUnit = 'Celsius (°C)';
            break;

        case 'Kelvin':
            if (temperature < 0) {
                alert('Temperature in Kelvin cannot be negative.');
                return;
            }
            convertedTemperature = temperature - 273.15; // Kelvin to Celsius
            resultUnit = 'Celsius (°C)';
            break;

        default:
            alert('Please select a valid unit.');
            return;
    }

   
   const resultArea = document.getElementById('resultArea');
   resultArea.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
   resultArea.classList.add('fade-in');

   
   setTimeout(() => {
       resultArea.classList.remove('fade-in');
   }, 500);
});