import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { NextLink } from './NextLink';

export const NavBar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>
        <Image 
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
            alt='Icon de la app'
            width={70}
            height={70}
        />

        <NextLink href={'/'}>
          <Link block color="secondary">
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>
          </Link>
        </NextLink>

        
        <Spacer css={{ flex: 1 }}/>
        <NextLink href={'/favorites'}>
          <Link block color="secondary">
            <Text color='white'>Favoritos</Text>
          </Link>
        </NextLink>
    </div>
  )
}
