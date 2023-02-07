// radio button pour selectionner just 1 des 3
const numberOfApartments = document.getElementById('number-of-apartments')
const numberOfFloors = document.getElementById('number-of-floors')
const numberOfElevators = document.getElementById('number-of-elevators')
const maximumOccupancy = document.getElementById('maximum-occupancy')
// const buildingType = document.getElementById ('building-type')


let floor = document.getElementById("floors-input")
let appartement = document.getElementById("apartments-input")
let elevators = document.getElementById("elevators-input")
let occupancy = document.getElementById("occupancy-input") 


 let amountOfElevators = document.getElementById("amountOfElevators")
 let elevatorPrice = document.getElementById("price1")
 let installation = document.getElementById("installation1")
 let total = document.getElementById("total1")

// 3 new addEventListener

let standardOption = document.getElementById("standard") 
let premiumOption = document.getElementById("premium")
let exceliumOption = document.getElementById("excelium")



//function qui cache tout les inputs
numberOfApartments.style.display = 'none'
numberOfFloors.style.display = 'none'
maximumOccupancy.style.display = 'none'
numberOfElevators.style.display = 'none'
// buildingType.style.display = 'none'


//function qui va show les elements relier avec se que tu a selectionner
const dropDown = document.getElementById('select1')
dropDown.addEventListener('change', ()=> {
    console.log(dropDown.value)
    if (dropDown.value == 'Residential') {
    numberOfApartments.style.display = 'none'
    numberOfFloors.style.display = 'block'
    maximumOccupancy.style.display = 'none'
    numberOfElevators.style.display = 'block'
    // calculResidential();
    } else if (dropDown.value == 'Commercial') {
        numberOfApartments.style.display = 'none'
        numberOfFloors.style.display = 'none'
        numberOfElevators.style.display = 'block'
        maximumOccupancy.style.display = 'block'
        // calculCommercial()
    } else if (dropDown.value == 'Industrial') {
        numberOfApartments.style.display = 'none'
        numberOfFloors.style.display = 'none'
        numberOfElevators.style.display = 'block'
        maximumOccupancy.style.display = 'none'
       }   else if (dropDown.value == 'Selection') {
            numberOfApartments.style.display = 'none'
            numberOfFloors.style.display = 'none'
            numberOfElevators.style.display = 'none'
            maximumOccupancy.style.display = 'none'
    
    //     moveTo.style.display = 'block'
    //     moveTo.style.display = 'block'
    
    }
})
// console.log(buildingType);
//function calculResidential(appartement, floor) { 
   // floor = document.getElementById("floors-input").value;
    //appartement = document.getElementById("apartments-input").value;

   // var appPerFloor = Math.ceil(appartement/floor)
   // console.log(appPerFloor)
    //var elevatorReq = Math.ceil(appPerFloor/6)
   // console.log(elevatorReq)
    //var column = Math.ceil(floor/20)
    //console.log(column)
    //var realElevatorNeeded = elevatorReq * column
   // console.log(realElevatorNeeded)
   // return realElevatorNeeded 






    function calculateResidential() {
        elev = document.getElementById("elevators-input").value;
        floor = document.getElementById('floors-input').value;
        const appPerFloor = Math.ceil(app/floor)
        const ascRequis = Math.ceil(appPerFloor/6)
        const columnAditionel = Math.ceil(floor/20)
        const realElevatorNeeded = ascRequis * columnAditionel
        console.log(realElevatorNeeded)
        return document.getElementById('elevators-required').value = realElevatorNeeded;
}
function calculCommercial() {
    const totalOccuppancy = (occupancy.value) * (floor.value)
    const elevatorRequire = Math.ceil (totalOccuppancy/200)
    const columnRequire = Math.ceil((floor).value / 10)
    const elevatorColumn = elevatorRequire * columnRequire
    const amountOfElevator = elevatorColumn + columnRequire
    return document.getElementById('amountOfElevators').value = amountOfElevator
    // return parseInt(amountOfElevators)
}  

appartement.addEventListener('input', () => {
    //calculResidential
    floor = document.getElementById("floors-input").value;
    appartement = document.getElementById("apartments-input").value;
    document.getElementById('amountOfElevators').value = calculResidential(appartement, floor)

})

floor.addEventListener('input', () => {
    //calculResidential
    floor = document.getElementById("floors-input").value
    appartement = document.getElementById("apartments-input").value
    document.getElementById('amountOfElevators').value = calculResidential(appartement, floor)
})

// changer les champ industriel
elevators.addEventListener('input', () => {
    calculIndustrial();
})


function calculIndustrial() {
    let elevValue = document.getElementById("elevators-input").value
    // console.log(elevValue)
    return document.getElementById("amountOfElevators").value = elevValue
}
 //const dropDown2 = document.getElementById('select2')
//console.log(standardOption.value)
standardOption.addEventListener('change', () => {
    console.log(standardOption.value)  
    installation.value =  ((amountOfElevators.value * 8000) / 100) * 10
    console.log(amountOfElevators.value)
    console.log(installation.value)
    total.value = (amountOfElevators.value * 8000) + (amountOfElevators.value / 100 * 20)
    return elevatorPrice.value = 8000
  
})

premiumOption.addEventListener('change', () => {
  console.log(premiumOption.value)
  installation1.value =  ((amountOfElevators.value * 12000) / 100) * 15
  console.log(amountOfElevators.value)
  console.log(installation1.value)
  total1.value = (amountOfElevators.value * 12000) + (amountOfElevators.value / 100 * 20)
  return elevatorPrice1.value = 12000
})

exceliumOption.addEventListener('change', () => {
  console.log(exceliumOption.value)
  installation2.value =  ((amountOfElevators.value * 15000) / 100) * 20
  console.log(amountOfElevators.value)
  console.log(installation2.value)
  total2.value = (amountOfElevators.value * 15000) + (amountOfElevators.value / 100 * 20)
  return elevatorPrice2.value = 15000
})
        
       
        
    
    //     moveTo.style.display = 'block'
    //     moveTo.style.display = 'block'
    
    // }
// })
