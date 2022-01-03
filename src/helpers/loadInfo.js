export const getPokemonesApi = async ( page = 1 ) => {

    //p 1 = 15
    //p 2 = 30
    //p 3 = 45

    try {

        const pokemones = []
        for (let i = ((page*15)-14); i <= page*15; i++) {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${ i }/`)
            const pokemon  = await data.json()

            pokemones.push( pokemon )
        }

        return pokemones

    } catch (error) {
        console.log(error) 
    }

}

export const getPokemonApi =  async ( name ) => {
    
    try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${ name }/`)
        const pokemon  = await data.json()

        return pokemon
    } catch (error) {
        return false
    }
}


export const getPokemonIndividualApi = async ( results ) => {

    try {

        const pokemones = []
        results.forEach( async (element) => {

            const data = await fetch( element.url )
            const { id, name, sprites} = await data.json()
            
            pokemones.push( { id, name, sprites} )
        })
        
        return pokemones
    } catch (error) {
        // throw 'Error al cargar datos' + error
        console.log(error)
    }

    
}

export const getAbilitiesApi = async ( pokemon ) => {

    const abilities = []
    if ( pokemon !== undefined ) {
        for (let i = 0; i <= pokemon?.length; i++) {

            const data = await fetch( pokemon[ i ]?.ability?.url )
            const ability  = await data.json()
    
            abilities.push( ability )
        }
    } 

    return abilities

    
}
