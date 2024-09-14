import { pokemon } from "./pokemon";
import { defineAction } from 'astro:actions';

export const server = {
   pokemon,
   getPokemons: defineAction({
    handler: async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
        const pokemons = await data.json()
        return pokemons
    }
  }),
   getGreeting: defineAction({
    handler: async () => {
      const t = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
      const tt= await t.json()
      return tt
    }
  })
};
