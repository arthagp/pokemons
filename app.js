const pokemonContainer = document.querySelector(".pokemon-container");


async function fetchData(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,
        { method: 'GET' })
    const data = await response.json();

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = data.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${data.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = data.name;

    const type = document.createElement('p');
    type.textContent = `type : ${data.types[0].type.name}`;

    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(spriteContainer);
    card.appendChild(type);

    cardContainer.appendChild(card);
    document.getElementById('pokemon-container').appendChild(cardContainer);
    cardContainer.style.cssText = "text-align: center;";
    number.style.padding ="12px 0 0 0"
    type.style.padding ="0 0 12px 0"
    cardContainer.style.margin = "0 500px"
    card.style.color = "#B1B3B1";
    if (data.types[0].type.name === 'grass') {
        card.style.backgroundColor = "#098A03"
    } else if (data.types[0].type.name === 'fire') {
        card.style.backgroundColor = "#EB9207"
    } else if (data.types[0].type.name === 'water') {
        card.style.backgroundColor = "#0200F0"
    } else if (data.types[0].type.name === 'bug') {
        card.style.backgroundColor = "#767376"
    } else if (data.types[0].type.name === 'normal') {
        card.style.backgroundColor = "#EAECD2"
    } else if (data.types[0].type.name === 'poison') {
        card.style.backgroundColor = "#000050"
    } else if (data.types[0].type.name === 'electric') {
        card.style.backgroundColor = "yellow"
    } else if (data.types[0].type.name === 'ground') {
        card.style.backgroundColor = "#4E4C4E"
    }
}

function getPokemons(number) {

    for (let i = 1; i <= number; i++) {
        fetchData(i);

    }
}

