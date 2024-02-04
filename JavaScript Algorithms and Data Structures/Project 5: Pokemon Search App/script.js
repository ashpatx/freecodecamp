const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');
const pokemonContainer = document.getElementById('pokemon-container');
const avatarContainer = document.getElementById('avatar-container');
const categories = document.getElementById('categories');
const category= document.getElementById('category');

//attributes from api 
const pokemonName = document.getElementById('pokemon-name');
const pokemonID = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const avatar = document.getElementById('avatar');
const hp = document.getElementById('hp');
const defense = document.getElementById('defense');
const attack = document.getElementById('attack');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');      
const speed = document.getElementById('speed');      


const runLibrary = async () => {
  try { 
    const pokemonInput = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonInput}`
    );
    const data = await response.json();
    
    //format response 
    const hpStat = data.stats[0].base_stat;
    const attackStat = data.stats[1].base_stat;
    const defenseStat = data.stats[2].base_stat;
    const specialAttackStat = data.stats[3].base_stat;
    const specialDefenseStat = data.stats[4].base_stat;
    const speedStat = data.stats[5].base_stat;

    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    avatarContainer.innerHTML = `<img id="avatar" class="avatarContainer" src="${data.sprites.front_default}" alt="${data.name} front default avatar">`;

    //format response: bento grid
    hp.innerHTML = `<span class="stat-title">HP: </span> ${hpStat}`;
    attack.innerHTML = `<span class="stat-title">Attack: </span> ${attackStat}`;
    defense.innerHTML = `<span class="stat-title">Defense: </span> ${defenseStat}`;
    specialAttack.innerHTML = `<span class="stat-title">Special Attack: </span> ${specialAttackStat}`;
    specialDefense.innerHTML = `<span class="stat-title">Special Defense: </span> ${specialDefenseStat}`;
    speed.innerHTML = `<span class="stat-title">Speed: </span> ${speedStat}`;


    //data types
    categories.innerHTML = data.types.map(type => 
      `<span class="category ${type.type.name}">${type.type.name}</span>`).join('');
  } catch (err) {
    updateScreen();
    alert('Pokémon not found');
    console.log(`Pokemon alert: ${err}`);
  }
};


const updateScreen = () => {
  const avatar = document.getElementById('avatar');
  if (avatar) avatar.remove();

  //update stats
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  categories.innerHTML = '';
  weight.textContent = '';
  height.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  runLibrary();
});
