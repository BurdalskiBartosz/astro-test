import { defineAction } from 'astro:actions';

export const pokemon = {
  getPokemons: defineAction({
    handler: async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
        const pokemons = await data.json()
        return pokemons
    }
  }),
}