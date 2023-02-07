let numberOfApartments = document.getElementById('number-of-apartments');
let numberOfFloors = document.getElementById('number-of-floors');
let numberOfElevators = document.getElementById('number-of-elevators');
let maximumOccupancy = document.getElementById('maximum-occupancy');

let floorInput = document.getElementById("floors-input");
let apartmentInput = document.getElementById("apartments-input");
let occupancyInput = document.getElementById("occupancy-input");

let elevatorsInput = document.getElementById("elevators-input");
let amountOfElevators = document.getElementById("amountOfElevators");
let elevatorPrice = document.getElementById("price1");
let installation = document.getElementById("installation1");
let total = document.getElementById("total1");

let standardOption = document.getElementById("standard");
let premiumOption = document.getElementById("premium");
let exceliumOption = document.getElementById("excelium");

let dropDown = document.getElementById('select1');

// hide all input fields initially
numberOfApartments.style.display = 'none';
numberOfFloors.style.display = 'none';
maximumOccupancy.style.display = 'none';
numberOfElevators.style.display = 'none';

// listen to changes in the select dropdown
dropDown.addEventListener('change', () => {
  if (dropDown.value === 'Residential') {
    numberOfApartments.style.display = 'none';
    numberOfFloors.style.display = 'block';
    maximumOccupancy.style.display = 'none';
    numberOfElevators.style.display = 'block';
  } else if (dropDown.value === 'Commercial') {
    numberOfApartments.style.display = 'none';
    numberOfFloors.style.display = 'none';
    numberOfElevators.style.display = 'block';
    maximumOccupancy.style.display = 'block';
  } else if (dropDown.value === 'Industrial') {
    numberOfApartments.style.display = 'none';
    numberOfFloors.style.display = 'none';
    numberOfElevators.style.display = 'block';
    maximumOccupancy.style.display = 'none';
  } else if (dropDown.value === 'Selection') {
    numberOfApartments.style.display = 'none';
    numberOfFloors.style.display = 'none';
    numberOfElevators.style.display = 'none';
    maximumOccupancy.style.display = 'none';
  }
});

// calculate the number of elevators needed for residential buildings
function calculateResidential() {
  let apartments = parseInt(apartmentInput.value, 10);
  let floors = parseInt(floorInput.value, 10);
  if (!apartments || !floors) {
    elevatorsInput.value = '';
    return;
  }
 
  let apartmentsPerFloor = apartments/floors
  let elevatorsReq = Math.ceil(apartmentsPerFloor / 6);
  elevatorsInput.value = elevatorsReq;
  amountOfElevators.value = elevatorsReq;
  calculatePrice();
  }
  
  // calculate the number of elevators needed for commercial buildings
  function calculateCommercial() {
  let occupancy = parseInt(occupancyInput.value, 10);
  let floors = parseInt(floorInput.value, 10);
  if (!occupancy || !floors) {
  elevatorsInput.value = '';
  return;
  }
  let elevatorsReq = Math.ceil((occupancy / 1000) / floors);
  elevatorsInput.value = elevatorsReq;
  amountOfElevators.value = elevatorsReq;
  calculatePrice();
  }
  
  // calculate the number of elevators needed for industrial buildings
  function calculateIndustrial() {
  let occupancy = parseInt(occupancyInput.value, 10);
  if (!occupancy) {
  elevatorsInput.value = '';
  return;
  }
  let elevatorsReq = Math.ceil(occupancy / 2000);
  elevatorsInput.value = elevatorsReq;
  amountOfElevators.value = elevatorsReq;
  calculatePrice();
  }
  
  // calculate the price of elevators based on selected option and number of elevators
  function calculatePrice() {
  let price = 0;
  let elevatorCount = elevatorsInput.value;
  if (!elevatorCount) {
  return;
  }
  if (standardOption.checked) {
  price = elevatorCount * 8000;
  } else if (premiumOption.checked) {
  price = elevatorCount * 12000;
  } else if (exceliumOption.checked) {
  price = elevatorCount * 15000;
  }
  elevatorPrice.value = price;
  installation.value = price * 0.1;
  total.value = price + (price * 0.1);
  }
  
  // handle changes in the input fields
apartmentInput.addEventListener('change', calculateResidential);
floorInput.addEventListener('change', () => {
  if (dropDown.value === 'Residential') {
    calculateResidential();
  } else if (dropDown.value === 'Commercial') {
    calculateCommercial();
  } else if (dropDown.value === 'Industrial') {
    calculateIndustrial();
  }
});
occupancyInput.addEventListener('change', () => {
  if (dropDown.value === 'Commercial') {
    calculateCommercial();
  } else if (dropDown.value === 'Industrial') {
    calculateIndustrial();
  }
});

standardOption.addEventListener('change', calculatePrice);
premiumOption.addEventListener('change', calculatePrice);
exceliumOption.addEventListener('change', calculatePrice);

// Add currency symbol
//let currency = "$";
//let output = document.getElementsByClassName("output");
//output.innerHTML = currency + output.innerHTML;
  

    
    
    
