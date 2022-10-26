// import type { PokemonList } from '~/types/pokemon-list'
import type { LayoutProps } from '~/types/app'
import { use } from 'react'
import Link from 'next/link'
import Pokedex from 'pokedex-promise-v2'

const api = new Pokedex()

// async function getPokemonList(): Promise<PokemonList> {
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=24&offset=0')
//   return res.json()
// }

export default function Layout({ children }: LayoutProps) {
  // const pokemonList = use(getPokemonList())
  const pokemonList = use(api.getPokemonsList({ limit: 32, offset: 0 }))

  return (
    <div className="flex gap-8">
      <div className="w-2/6">
        <h2 className="text-xl font-bold">Pick a Pokémon!</h2>
        <p className="mb-4 text-sm font-medium">
          Or manually go to <code>/pokemons/:id</code>
        </p>

        <ul>
          {pokemonList.results.map((pokemon, index) => {
            return (
              <li key={pokemon.name}>
                <Link href={`/pokemons/${index + 1}`}>
                  {`${pokemon.name} (id #${index + 1})`}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex w-4/6 items-center justify-center p-4">
        {children}
      </div>
    </div>
  )
}
