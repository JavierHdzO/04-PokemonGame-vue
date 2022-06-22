
import pokemonApi from "@/API/pokemonAPI"

const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map( ( _ , index ) => index + 1 )

    

}
const getPokemonNames = async( [pokemon1, pokemon2, pokemon3, pokemon4] = []) => {
    
    const promiseArr = [
        pokemonApi.get(`/${pokemon1}`),
        pokemonApi.get(`/${pokemon2}`),
        pokemonApi.get(`/${pokemon3}`),
        pokemonApi.get(`/${pokemon4}`)
    ]

    const [resp1, resp2, resp3, resp4] = await Promise.all( promiseArr )

    return [
        {name: resp1.data.name, id: resp1.data.id},
        {name: resp2.data.name, id: resp2.data.id},
        {name: resp3.data.name, id: resp3.data.id},
        {name: resp4.data.name, id: resp4.data.id}
    ]
}

const getPokemonOptions = async () => {
    //Esto sirve para desordenar el arre
    const mixPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    
    const pokemons = await getPokemonNames( mixPokemons.splice(0,4) )
    
    return pokemons

}
export default getPokemonOptions