// let xhr = new XMLHttpRequest();

// xhr.open('GET','https://pokeapi.co/api/v2/pokemon/');

// xhr.onload = () => {
//     if(xhr.status === 200){
//         console.log(xhr.repsonseText)
//     }
// };

// xhr.error = () => {
//     console.log('error');
// };

// xhr.send();


// L'URL de l'API Pokémon
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// Fonction pour récupérer la liste de noms de Pokémon
function getPokemonNames(limit = 20) {
  fetch(`${apiUrl}?limit=${limit}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erreur lors de la requête à l'API Pokémon.");
      }
    })
    .then((data) => {
      const pokemonList = data.results.map((pokemon) => pokemon.name);
      displayPokemonNames(pokemonList);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Fonction pour afficher les noms de Pokémon
function displayPokemonNames(names) {
  const listContainer = document.getElementById("pokemon-list");
  listContainer.innerHTML = ""; // Efface le contenu précédent

  names.forEach((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    listContainer.appendChild(listItem);
  });
}

// Appel de la fonction pour obtenir une liste de noms de Pokémon (par exemple, avec une limite de 10)
getPokemonNames();
