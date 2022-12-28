import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoritesCardList } from './FavoritesCardList'

type Props = {
    favoritesPokemons: number[]
}

export const ListFavoritesPokemon = ({favoritesPokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>

    {
      favoritesPokemons.map((id) =>(
        <FavoritesCardList key={id} id={id}/>
      ))
    }

  </Grid.Container>
  )
}
