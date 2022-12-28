
import { Card, Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layout'
import { NoFavorites } from '../../components/ui'
import { ListFavoritesPokemon } from '../../components/ui/ListFavoritesPokemon'
import { localFavorites } from '../../utils'

export default function Favorites(){

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons)
  }, [])
  
  return (
    <Layout title='Favoritos'>
     {
      favoritesPokemons.length === 0 ? 
      ( 
        <NoFavorites />
      ):
      (
       <ListFavoritesPokemon  favoritesPokemons={favoritesPokemons}/>
      )
     }
    </Layout>
  )
}
