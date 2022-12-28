import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import confetti from 'canvas-confetti'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layout'
import { IPokemonDetailsResponse, IPokemonListResponse } from '../../interfaces'
import { getPokemonInfo, nameFavorites } from '../../utils'

interface Props {
    pokemon: IPokemonDetailsResponse
 }

const PokemonByNamePage = ({pokemon}: Props) => {
    const [isInFavorites, setIsInFavorites] = useState( nameFavorites.existInFavorites(pokemon.name))

    const onToggleFavorite = () =>{
    
        nameFavorites.toggleFavoritesName(pokemon.name)
        setIsInFavorites(!isInFavorites)

        if(isInFavorites) return;

        confetti({
           zIndex: 999,
           particleCount: 100,
           spread: 160,
           angle: -100,
           origin:{
            x: 1,
            y: 0
           }

        })
    }
  return (
    <Layout title={pokemon.name}>
       <Grid.Container gap={2} css={{marginTop: '5px'}}>
        <Grid xs={12} sm={4}>
            <Card isHoverable css={{padding: '30px'}}>
                <Card.Body>
                    <Card.Image
                        src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                        alt={pokemon.name}
                        width='100%'
                        height={200}
                    />
                </Card.Body>
            </Card>
        </Grid>
        <Grid xs={12} sm={8}>
            <Card>
                <Card.Header css={{display: 'flex', justifyContent:'space-between'}}>

                    <Text h1 transform='capitalize'>{pokemon.name}</Text>

                    <Button
                        color={'gradient'}
                        ghost={!isInFavorites}
                        onPress={onToggleFavorite}
                    >
                        {isInFavorites? 'En Favoritos':'Guardar Favoritos'}
                    </Button>

                </Card.Header>
                <Card.Body>
                    <Text size={30}>Sprites</Text>

                    <Container display='flex' direction='row'>
                        <Image 
                            src={pokemon.sprites.front_default} 
                            alt={pokemon.name}
                            width={100}
                            height={100}
                        
                        />
                         <Image 
                            src={pokemon.sprites.back_default} 
                            alt={pokemon.name}
                            width={100}
                            height={100}
                        
                        />
                         <Image 
                            src={pokemon.sprites.back_shiny} 
                            alt={pokemon.name}
                            width={100}
                            height={100}
                        
                        />
                         <Image 
                            src={pokemon.sprites.back_shiny} 
                            alt={pokemon.name}
                            width={100}
                            height={100}
                        
                        />
                    </Container>
                </Card.Body>
            </Card>

        </Grid>

       </Grid.Container>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<IPokemonListResponse>('/pokemon?limit=151');

    const pokemonsName = data.results.map((pokemon) => pokemon.name)

   

    return {
        paths: pokemonsName.map((name) =>({
            params: { name }
        })),
        fallback: false
    }
}




export const getStaticProps: GetStaticProps = async ({params}) => {
    const { name } = params as {name: string}

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}

export default PokemonByNamePage