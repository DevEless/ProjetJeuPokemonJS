import {
    button, image, pokeNumber, pokeName, pokeType
} from "./modules/variable.js"


const changePokemon = async () => {
    let randomnumber = Math.ceil(Math.random() *900 + 1);

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomnumber}
    `
    let data = await fetch(requestString)
    console.log(data)
    
    let response = await data.json()
    console.log(response)

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types[0].type.name;
};

button.addEventListener("click", changePokemon)
