import { PokemonClient } from 'pokenode-ts'

class PokemonService {
	private api: PokemonClient

	constructor() {
		this.api = new PokemonClient()
	}

	public async getPokemons(offset: number, limit: number) {
		const { results } = await this.api.listPokemons(offset, limit)

		const pokemonData = []

		for (const pokemon of results) {
			const pokemonDetails = await this.api.getPokemonByName(pokemon.name)
			pokemonData.push(pokemonDetails)
		}

		return pokemonData
	}
}

const pokemonService = new PokemonService()

export default pokemonService
