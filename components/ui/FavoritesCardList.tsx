import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'


type Props ={
    id: number
}

export const FavoritesCardList = ({id}: Props) => {
  const router = useRouter()

  const navigation = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} md={2} xl={1}>

      <Card isHoverable isPressable css={{padding: 10}} onPress={navigation}>
          <Card.Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt='Pokemon favorito'
          width={'100%'}
          height={140}
          />
      </Card>

    </Grid>
  )
}
