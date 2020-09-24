let dog = [
        Affenpinscher = {   
        breed: "Affenpinscher" ,
        size: "small",
        groomingNeeds: "moderate",
        shedLevel: "low",
        energyLevel: "medium",
        handlerExperience: "minimal"
        },
        AfghanHound = {
        breed: "Afghan Hound",
        size: "large",
        groomingNeeds: "extensive",
        shedLevel: "medium",
        energyLevel: "medium",
        handlerExperience: "moderate"
        },
        AiredaleTerrier = {
        breed: "Airedale Terrier",
        size: "large",
        groomingNeeds: "moderate",
        shedLevel: "medium",
        energyLevel: "medium",
        handlerExperience: "moderate"
        }, 
        Akita = {
        breed: "Akita",
        size: "giant",
        groomingNeeds: "moderate",
        shedLevel: "heavy",
        energyLevel: "high",
        handlerExperience: "experienced"
        },
        AlaskanMalamute = {
        breed: "Alaskan Malamute",
        size: "giant",
        groomingNeeds: "extensive",
        shedLevel: "heavy",
        energyLevel: "high",
        handlerExperience: "expereinced"
        },
        AmericanBulldog = {
        breed: "American Bulldog",
        size: "medium",
        groomingNeeds: "minimal",
        shedLevel: "low",
        energyLevel: "low",
        handlerExperience: "moderate"
        },
        AmericanPitBullTerrier = {
        breed: "American Pit Bull Terrier",
        size: "large",
        groomingNeeds: "minimal",
        shedLevel: "low",
        energyLevel: "high",
        handlerExperience: "experienced"
        },
        AustralianShepher = {
        breed: "Australian Shepherd", 
        size: "medium",
        groomingNeeds: "extensive",
        shedLevel: "heavy",
        energyLevel: "mdeium",
        handlerExperience: "moderate"
        },
        test = {
          breed: "Test Breed",
          size: "giant",
          groomingNeeds: "moderate",
          energyLevel: "medium"
        }
        
]

let sizeValue;
let groomingValue;
let energyValue;

function getSize() {
let s = document.getElementById("size");
let sizeSelection = s.options[s.selectedIndex].value;
return sizeSelection;
}

function getGroomingNeeds() {
let g = document.getElementById("grooming-needs");
let groomingSelection = g.options[g.selectedIndex].text;
return groomingSelection;
}

function getEnergyLevel() {
let e = document.getElementById("energy-level");
let energySelection = e.options[e.selectedIndex].text;
return energySelection;
}


function getUserInput() {
  sizeValue = getSize();
  groomingValue = getGroomingNeeds();
  energyValue = getEnergyLevel();

  console.log(sizeValue);
  console.log(findRightSize(sizeValue));
}



function findRightSize(value) {
  console.log("HIT");
  let rightSizeArray = [];
  for(i = 0; i < dog.length; i++) {
    if(dog[i]["size"] === value) {
      rightSizeArray.push(dog[i]);
    }
  }return rightSizeArray;
}

let rightSize = findRightSize(sizeValue);

//test
function findRightGrooming(value) {
  let rightGroomingArray = [];
  for (i=0; i < rightSize.length; i++) {
    if(dog[i]["groomingNeeds"] === value) {
      rightGroomingArray.push(rightSize[i]);
    }
  }return rightGroomingArray;
}

let rightGrooming = findRightGrooming("groomingValue");
// console.log(rightGrooming);

function findRightEnergy(value) {
  let rightEnergyArray = [];
  for (i=0; i< rightGrooming.length; i++) {
    if(dog[i]["energyLevel"] === value) {
      rightEnergyArray.push(rightGrooming[i]);
    }
  }return rightEnergyArray;
}

let rightEnergy = (findRightEnergy("energyValue"));
// console.log(rightEnergy);



/*
if (rightSizeArray.length >= 2) {
  function findRightGrooming(groomingValue) {
    let rightGroomingArray = [];
    for (i=0; i< rightSizeArray.length; i++) {
      if(dog[i]["groomingNeeds"] === groomingValue) {
        rightGroomingArray.push(rightSizeArray[i]);
      }
    }return rightGroomingArray;
  }else {
    return rightSizeArray[0]["breed"];
  }
}

if (rightGroomingArray.length >= 2) {
  function findRightEnergy(energyValue) {
    let rightEnergyArray = [];
    for (i=0; i< rightGroomingArray.length; i++) {
      if(dog[i]["energyLevel"] === energyValue) {
        rightEnergyArray.push(rightGroomingArray[i]);
      }
    }return rightEnergyArray;
  }else {
    return rightGroomingArray[0]["breed"];
  }
}









 


/*function findObjectByKey(array_input, key, value) {
    let newArray = [];
    for(i = 0; i < array_input.length; i++) {
      if(array_input[i][key] === value) {
        newArray.push(array_input[i]);
      }
    } return newArray;
  }*/
