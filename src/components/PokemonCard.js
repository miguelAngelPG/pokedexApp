import React from 'react'
import { upperFirstLetter } from '../hooks/useUpperFirstLetter'

export const PokemonCard = ({ pokemon, bg }) => {
    
    const buildId = ( id ) => {
        if ( id < 10) {
            return `#000${ id }`
        } else if( id < 100 ) {
            return `#00${ id }`
        } else if( id < 1000 ) {
            return `#0${ id }`
        }else{
            return `#${ id }`
        }
    }

    return (
    <div className='pokemon-card' style={{ background: bg }}>
        <div className='pokemon-cover'>
            <img className='pokemon-img' src={ pokemon?.sprites.front_default } alt={ pokemon?.name } />
            <div className='pokemon-info' >
                <h5>{ buildId( pokemon?.id ) }</h5>
                <h3>{ upperFirstLetter( pokemon?.name ) } </h3>
            </div>
        </div>
    </div> 
    )
}
