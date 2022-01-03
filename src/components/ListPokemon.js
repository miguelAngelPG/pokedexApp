import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPokemon } from '../actions/ui'
import { colors } from '../data/datColorsByType'

import { getPokemonesApi } from '../helpers/loadInfo'
import { useModal } from '../hooks/useModal'
import { upperFirstLetter } from '../hooks/useUpperFirstLetter'
import { FloatingButton } from './FloatingButton'
import { Modal } from './Modal'
import { PokemonCard } from './PokemonCard'

export const ListPokemon = () => {

    const dispatch = useDispatch()

    const [ isOpen, openModal, closeModal ] = useModal( false )
    const { currentPokemon } = useSelector( state => state.ui )
    const typesByColor = Object.keys( colors )

    const [pokemones, setPokemones] = useState( null )
    console.log(pokemones)

    const [page, setPage] = useState( 1 )
    const [showBtnMore, setShowBtnMore] = useState( true )
    const [loading, setLoading] = useState( false )

    useEffect(() => {
        const getPokemones = async () => {
            const data = await getPokemonesApi( page )

            setLoading( false )
            
            //Total pokemones 1118
            //pages - 15 pokemones 
            //1118 / 15 = 74
            const totalPages = 74

            if ( page < totalPages ) {
                if ( !pokemones ) {
                    setPokemones( data )
                } else {
                    setPokemones( [ ...pokemones, ...data ] )
                }
            } else {
                setShowBtnMore( false )
            }
        }
        
        getPokemones()
    }, [ page, pokemones ])
    
    const search = ( id ) => {
        let index = pokemones.filter(pokemon => pokemon.id === id);
        dispatch( changeCurrentPokemon( index[0] ) )
    }

    return (
        <div className='scroll-bar'>
            <div className='pokemon-list' id='q' >
                { pokemones?.map(( pokemon, index ) => {
                    const pokeTypes = pokemon.types.map(type => type.type.name)
                    const type = typesByColor.find( type => pokeTypes.indexOf(type) > -1)
                    const color = colors[type]

                    return (
                        <div key={ index } onClick={ () => {
                            openModal()
                            search( pokemon.id )
                            }}>
                            <PokemonCard bg={ color } pokemon={ pokemon } />
                        </div>
                )}) }
            </div>
            {
                showBtnMore && (
                    !loading 
                    ? <button onClick={ () => {
                        setPage( page + 1 ) 
                        setLoading( true )} } className='btn-load-more pointer' >Cargar más...</button>
                    : <h4 className='loading-more' >Cargando...</h4>
                )
            }
            <FloatingButton />
            <Modal isOpen={isOpen} closeModal={closeModal} title={ upperFirstLetter( currentPokemon?.name ) }/>
        </div>
    )
}
