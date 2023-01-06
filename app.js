async function fetchData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{method:'GET'})
    const data = await response.json();
    // console.log(data)
    let numbers = '';
    // let name = '';
    let img = '';
    let type = '';
    for (let i = 1; i <= data; i++) {
        // name = name + `${data.name}`
        
        
    }
    document.getElementById("header").insertAdjacentHTML('beforebegin',
    `<p>${data.id}</p>
    <p>${data.name}</p>
    <img src="${data.sprites.front_default}">
    <p>${data.types[0].type.name}</p>`
    );

    if (data.types[0].type.name == 'grass') {
        return true
    }else{
        document.getElementById("card").style.cssText = "background-color: green"
    }
    // console.log(data.types[0].type)


}

function getPokemons(number) {
    
    for (let i = 1; i <= number; i++) {
        fetchData(i);

    }
    // console.log(data)
}

function createPokemon(pokemon) {
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");
  
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
  
    flipCard.appendChild(cardContainer);
  
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
  
    spriteContainer.appendChild(sprite);
  
    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
  
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;
  
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
  
    cardContainer.appendChild(card);
  }

getPokemons(5)
