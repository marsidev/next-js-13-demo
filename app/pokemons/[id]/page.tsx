// import type { PokemonData } from '~/types/pokemon'
import { use } from 'react'
import NextImage, { ImageProps } from 'next/image'
import Pokedex from 'pokedex-promise-v2'

type PageProps = {
  params?: any
  children?: React.ReactNode
}

const api = new Pokedex()

const Image: React.FC<ImageProps> = (props) => {
  const DEV = process.env.NODE_ENV === 'development'

  // @ts-ignore
  if (DEV) return <img {...props} />
  return <NextImage {...props} />
}

// async function getPokemon(id: number): Promise<PokemonData> {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   return res.json()
// }

export default function Page({ params }: PageProps) {
  // const pokemon = await getPokemon(params.id)
  // const pokemon = use(getPokemon(params.id))
  const pokemon = use(api.getPokemonByName(params.id)) as Pokedex.Pokemon
  if (!pokemon) return null

  const sprite =
    pokemon.sprites.other?.['official-artwork'].front_default ||
    pokemon.sprites.front_default!

  return (
    <>
      <h1 className="text-center text-xl font-bold">{pokemon.name}</h1>
      <Image src={sprite} alt={pokemon.name} width={300} height={300} />
    </>
  )
}
