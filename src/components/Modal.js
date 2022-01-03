import React from 'react'
import { GrClose } from 'react-icons/gr'
import { VscDebugBreakpointLog } from "react-icons/vsc"
import { useSelector } from 'react-redux'
import { upperFirstLetter } from '../hooks/useUpperFirstLetter'


export const Modal = ( { isOpen, closeModal, title } ) => {
    const handleModalContainerClick = ( e ) => e.stopPropagation() 

    const { currentPokemon } = useSelector( state => state.ui )
    
    return (
        <div className={`modal ${isOpen && "is"}`} onClick={ closeModal }>
            <div className="#" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={ closeModal }><GrClose/></button>
                <div className='case' onClick={ closeModal } >
                    <div className='case-left' onClick={handleModalContainerClick}>
                        <div className='poke-header'>
                            <div className='buttons'>
                                <div className='button1'></div>
                                <div className='button2'></div>
                                <div className='button3'></div>
                            </div>
                            <h2>Pokemon:&nbsp;&nbsp;&nbsp;&nbsp;<p>{ currentPokemon ? upperFirstLetter( currentPokemon?.name ) : 'Pokemon not found' }</p></h2>
                        </div>
                        <div className='screen1' >
                            <h4>Abilities: { currentPokemon?.abilities?.map( ({ability}, index) => <p key={ index } >&nbsp;&nbsp;<VscDebugBreakpointLog/>{ upperFirstLetter( ability?.name ) }</p> ) }</h4>
                            <h4>Experience: <p>&nbsp;&nbsp;{ currentPokemon?.base_experience }</p></h4>
                            <h4>Height: <p>&nbsp;&nbsp;{ currentPokemon?.height }</p></h4>
                            <h4>Types: { currentPokemon?.types?.map( ({type}, index) => <p key={ index } >&nbsp;&nbsp;<VscDebugBreakpointLog/>{ upperFirstLetter( type?.name ) }</p> ) }</h4>

                        </div>
                    </div>
                    <div className='case-right' onClick={handleModalContainerClick}>
                        <div className='screen2' >
                            {
                                currentPokemon 
                                ? <img className='img-poke' alt='pokedex' src={ currentPokemon?.sprites?.front_default } width={'80%'} />
                                : <p style={{color: '#fff', margin:'auto'}}>Not image</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}