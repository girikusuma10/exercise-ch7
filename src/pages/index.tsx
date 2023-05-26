
import { useState } from 'react'
import type { ReactElement } from 'react'
import DefaultLayout from '@/layouts/default'
// import SecondLayout from '@/layouts/second'
import Link from 'next/link'

interface IHomeProps {
    pokemons: Record<string, any>
}

interface IPokemonItem {
    name: string
    url: string
}

export const getServerSideProps = async (): Promise<Record<string, any>> => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const pokemons = await res.json()
    return { props: { pokemons } }
}

const Home = ({ pokemons }: IHomeProps): ReactElement => {
    const [searchQuery, setSearchQuery] = useState('')

    const filterPokemonsByQuery = (pokemons: IPokemonItem[]): IPokemonItem[] => {
        return pokemons.filter((pokemon: IPokemonItem) => pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    return (
        <main className='flex min-h-screen flex-col p-6 container m-auto'>
            <div className='mb-8'>
                <form className='flex'>
                    <input type='text' value={searchQuery} placeholder='Pikachu' onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearchQuery(e.target.value) }} className='text-base w-full py-1 px-2 border-2 border-gray-700 rounded m-auto' />
                </form>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-6'>
                {
                    filterPokemonsByQuery(pokemons.results).map((pokemon: IPokemonItem, index: number) => {
                        return (
                            <div key={index} className='flex justify-between items-center'>
                                <h2 className='text-base font-bold'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                                <Link href={pokemon.url} className='text-sm' target='_blank'>More</Link>
                            </div>
                        )
                    })
                }
            </div>
            {
                filterPokemonsByQuery(pokemons.results).length <= 0
                    ? <p className='text-end mt-4 text-sm'>There is no result</p>
                    : <p className='text-end mt-4 text-sm'>{filterPokemonsByQuery(pokemons.results).length} Results</p>
            }
        </main>
    )
}

Home.getLayout = function getLayout (page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Home
