let button = document.getElementById("button")
let image = document.getElementById("image")
let pokeNumber = document.getElementById("number")
let pokeName = document.getElementById("name")
let pokeType = document.getElementById("type")

let image2 = document.getElementById("image2")
let pokeNumber2 = document.getElementById("number2")
let pokeName2 = document.getElementById("name2")
let pokeType2 = document.getElementById("type2")

const changePokemon = async () => {
    let randomnumber = Math.ceil(Math.random() * 900 + 1);

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomnumber}
    
        `
        let randomnumber2 = Math.ceil(Math.random() * 900 + 1);

        let requestString2 = `https://pokeapi.co/api/v2/pokemon/${randomnumber2}
            `
    let data = await fetch(requestString)
    console.log(data)
    let data2 = await fetch(requestString2)


    let response = await data.json()
    console.log(response)
    let response2 = await data2.json()
    console.log(response2)

    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
    pokeType.textContent = response.types[0].type.name;
    image2.src = response2.sprites.front_default;
    pokeNumber2.textContent = `#${response2.id}`;
    pokeName2.textContent = response2.name;
    pokeType2.textContent = response2.types[0].type.name;

};

button.addEventListener("click", changePokemon,)