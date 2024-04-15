const creatures = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures"
const equipment = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"
const materials = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials"
const monsters = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"
const treasure = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure"

const body = document.querySelector(".quotes");

async function getJsonWithFetch(catagory) {

    try {
        const response = await fetch(catagory);

        const jsonData = await response.json();

        const randomNum = Math.floor(Math.random() * jsonData["data"].length)
        console.log(randomNum);

        console.log(jsonData["data"][randomNum]);

        let imgSRC = jsonData["data"][randomNum]["image"];
        let name = jsonData["data"][randomNum]["name"];
        let description = jsonData["data"][randomNum]["description"];
        //let location = jsonData["data]"][randomNum]["common_locations"];

        const image = document.createElement("img");
        image.src = imgSRC;
        image.alt = name;

        body.innerHTML = image.outerHTML;

        const thingName = document.createElement("p");
        thingName.textContent = "Name: " + name;

        body.innerHTML += thingName.outerHTML;

        const thingDescription = document.createElement("p");
        thingDescription.textContent = "Description: " + description;

        body.innerHTML += thingDescription.outerHTML;

        /*const thingLocation = document.createElement("p");
        thingLocation.textContent= "Common locations: " +location;

        body.innerHTML += thingLocation.outerHTML;*/

    }

    catch (error) {
        console.error("This shit isn't working");
    }
}

const btnCreatures = document.querySelector("#creatures");
btnCreatures.addEventListener('click', ()=> {
    getJsonWithFetch(creatures);
})

const btnMaterials = document.querySelector('#materials');
btnMaterials.addEventListener('click', ()=> {
    getJsonWithFetch(materials);
})

const btnEquipment = document.querySelector('#equipment');
btnEquipment.addEventListener('click', ()=> {
    getJsonWithFetch(equipment);
})

const btnMonsters = document.querySelector('#monsters');
btnMonsters.addEventListener('click', ()=> {
    getJsonWithFetch(monsters);
});

const btnTreasure = document.querySelector('#treasure');
btnTreasure.addEventListener('click', ()=> {
    getJsonWithFetch(treasure);
})


