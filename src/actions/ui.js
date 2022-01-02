import { types } from '../types/types'

export const changePage = ( page = 'home' ) => ({
    type: types.uiChangePage,
    payload: page   
})

export const changeCurrentPokemon = ( pokemon = 0 ) => {
    return {
        type: types.uiChangePokemon,
        payload: pokemon   
    }
}

export const loadPokemonesNames = ( pokemones = [] ) => {
    return {
        type: types.uiLoadPokemonesNames,
        payload: pokemones   
    }
}


    
