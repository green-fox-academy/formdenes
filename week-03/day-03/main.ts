import { Pokemon } from './pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');

// Which pokemon should Ash use?

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

console.log(`I choose you, ${pokemonOfAsh.filter(value => value.isEffectiveAgainst(wildPokemon)==true)[0].name}!`);