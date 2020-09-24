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

function main() {
    getUserInput();

    let sizeArray = findRightSize();

    console.log("SIZE ARRAY=", sizeArray);

    let groomingArray = findRightGrooming(sizeArray);

    console.log("GROOMING ARRAY=", groomingArray);

    let energyArray = findRightEnergy(groomingArray);

    console.log("ENERGY ARRAY=", energyArray);
    console.log(energyArray[0]["breed"]);
    
    displayBreed(energyArray);
}

function getUserInput() {
    let size_dropdown = document.getElementById("size");
    sizeValue = size_dropdown.options[size_dropdown.selectedIndex].text.toLowerCase();

    let grooming_dropdown = document.getElementById("grooming-needs");
    groomingValue = grooming_dropdown.options[grooming_dropdown.selectedIndex].text.toLowerCase();

    let energy_dropdown = document.getElementById("energy-level");
    energyValue = energy_dropdown.options[energy_dropdown.selectedIndex].text.toLowerCase();
}



function findRightSize() {

    let rightSizeArray = [];
    for(i = 0; i < dog.length; i++) {
        if(dog[i]["size"] === sizeValue) {
           rightSizeArray.push(dog[i]);
        }
    }
    return rightSizeArray;
}


function findRightGrooming(harray) {
    let rightGroomingArray = [];
    for(i = 0; i < harray.length; i++) {
        if(harray[i]["groomingNeeds"] === groomingValue) {
           rightGroomingArray.push(harray[i]);
        }
    }
    return rightGroomingArray;
}

function findRightEnergy(harray) {
    let rightEnergyArray = [];
    for(i = 0; i < harray.length; i++) {
        if(harray[i]["energyLevel"] === energyValue) {
           rightEnergyArray.push(harray[i]);
        }
    }
    return rightEnergyArray;
}

function displayBreed(harray) {
    document.getElementById("breedDisplay").innerHTML = `Your Breed(s): ${harray[0]["breed"]}`;
}


/*displayBreed = () => {
    document.getElementById("breedDisplay").innerHTML(`Your Breed(s): ${energyArray[0]["breed"]}`)
}*/