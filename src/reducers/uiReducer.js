import { types } from '../types/types'

const initialState = {
    page: 'Home',
    loading: false,
    msgError: null,
    currentPokemon: null,
    pokemonesNames: []
}

export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.uiLoadPokemonesNames:
            return {
                ...state,
                pokemonesNames: action.payload
            }

        case types.uiChangePokemon:
            return {
                ...state,
                currentPokemon: action.payload
            }

        case types.uiChangePage:
            return {
                ...state,
                page: action.payload
            }

        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case types.uiRemoveError:
                return {
                    ...state,
                    msgError: null
                }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
 
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }

}