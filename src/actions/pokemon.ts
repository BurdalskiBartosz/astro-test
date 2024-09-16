import { defineAction } from 'astro:actions'
import { PokemonClient } from 'pokenode-ts'

const api = new PokemonClient()

export const pokemon = {
	getPokemonsList: defineAction({
		handler: async () => {
			const data = await api.listPokemons(0, 50)

			return data
		}
	})
}
