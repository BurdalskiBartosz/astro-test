import { defineAction } from 'astro:actions'
import pokemonService from '../services/PokemonService'
import { z } from 'astro:schema'

export const pokemon = {
	getPokemonsList: defineAction({
		input: z
			.object({
				offset: z.number(),
				limit: z.number()
			})
			.partial(),
		handler: async ({ offset = 0, limit = 10 }) => {
			const data = await pokemonService.getPokemons(offset, limit)

			return data
		}
	})
}
