import { Card, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon : SmallPokemon
}

export const PokemonCard = ({pokemon}: Props) => {
    const {img, id, name} = pokemon;

    const router = useRouter();

    const onClick = () =>{
        router.push(`/name/${pokemon.name}`)
    }
  return (
    <Card 
        isHoverable 
        isPressable
        onPress={onClick}
    >
        <Card.Body css={{p: 1}}>
            <Card.Image 
            src={img}
            width='100%'
            height={140}  
            />
        </Card.Body>
        <Card.Footer>
            <Row justify='space-between'>
                <Text transform='capitalize'>{name}</Text>
                <Text>#{id}</Text>
            </Row>
        </Card.Footer>
    </Card>
  )
}
