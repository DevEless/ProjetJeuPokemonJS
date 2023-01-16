import {
image, pokeNumber, pokeName, pokeType , image2, pokeNumber2, pokeName2, pokeType2 , button
} from "./modules/variable.js"



export const changePokemon = async () => {
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
    image2.src = response.sprites.front_default;
    pokeNumber2.textContent = `#${response.id}`;
    pokeName2.textContent = response.name;
    pokeType2.textContent = response.types[0].type.name;
};
