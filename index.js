/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// PSEUDO CODE
// click events for each units conversion section (3) - see above amounts above
// round all decimals to 3 places - use the .toFixed() - with 3 within parenthesis for 3 places

// within data divs
//possible model for converstions: `${num} m = ${conv.feet} ft | ${num} ft = ${conv.meters} m`
//possible model for converstions: `${num} l = ${conv.gallons} gal | ${num} gal = ${conv.liters} l`
//possible model for converstions: `${num} kg = ${conv.pounds} lb | ${num} lb = ${conv.kilograms} kg`

// click events for each units conversion section (3) - see above amounts above

// 1 - length conversions - 1 meter x 3.281 feet | 1 feet x 0.3048 meters
const btn = document.getElementById("input-btn");
const input = document.getElementById("input");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

const meterFeetConv = 3.281;
const literGallonConv = 0.264;
const kilogramPoundConv = 2.204;

btn.addEventListener("click", function () {
    // the number entered into the input remains a number value - .value specifies that the value remain the same type within the string
    let inputValue = input.value;
    length.textContent = `${inputValue} meters = ${(inputValue * meterFeetConv).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meterFeetConv).toFixed(3)} meters`;
    volume.textContent = `${inputValue} liters = ${(inputValue * literGallonConv).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / literGallonConv).toFixed(3)} liters`;
    mass.textContent = `${inputValue} kilograms = ${(inputValue * kilogramPoundConv).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / kilogramPoundConv).toFixed(3)} kilograms`;
})