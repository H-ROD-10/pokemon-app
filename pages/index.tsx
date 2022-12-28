import { Grid } from '@nextui-org/react';
import { GetStaticProps } from 'next';
import  { pokeApi }  from '../api';
import { Layout } from "../components/layout";
import { PokemonCard } from '../components/pokemon/';
import { IPokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[]
}


export default function HomePage ({pokemons}: Props){

  //console.log(pokemons)

  return (
    <Layout title="Listado de Pokemons">
     <Grid.Container gap={2} justify='flex-start'>
      {
        pokemons.map((pokemon, i) => {
          return(
            <Grid key={i} xs={6} sm={3} md={2} xl={1}>
              <PokemonCard pokemon={pokemon}/>
            </Grid>
          )
        })
      }
     </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {
 

  const { data } = await pokeApi.get<IPokemonListResponse>('/pokemon?limit=151');

  //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",

  const pokemons: SmallPokemon[] = data.results.map((pokemon)=>{
    const Id = pokemon.url.split('/')[6]
    return {
        id: Id,
        name: pokemon.name,
        url: pokemon.url,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${Id}.svg`
      }
    
  })
  
 //console.log(pokemons)

  return {
    props: {
       pokemons
    }
  }
}