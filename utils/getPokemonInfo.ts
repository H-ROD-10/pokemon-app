import { pokeApi } from "../api"
import { IPokemonDetailsResponse } from "../interfaces"

export const getPokemonInfo = async(nameOrId: string) => {
  

    const { data } = await pokeApi.get<IPokemonDetailsResponse>(`/pokemon/${nameOrId}`)

    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

}